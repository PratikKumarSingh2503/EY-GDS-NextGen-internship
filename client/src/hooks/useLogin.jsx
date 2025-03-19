import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        // Handle errors gracefully
        const errorData = await res.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await res.json();

      // Update auth context
      dispatch({ type: "LOGIN", payload: data });

      // Save user to local storage
      localStorage.setItem("user", JSON.stringify(data));
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};
// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useLogin = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const { dispatch } = useAuthContext();

//   const login = async (email, password) => {
//     setLoading(true);
//     setError(null);

//     const res = await fetch(
//       `${import.meta.env.VITE_SERVER_URL}/api/user/login`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       }
//     );

//     const json = await res.json();

//     if (!res.ok) {
//       setLoading(false);
//       setError(json.error);
//     }

//     if (res.ok) {
//       //  update the auth context
//       dispatch({ type: "LOGIN", payload: json });

//       // save the user to local storage
//       localStorage.setItem("user", JSON.stringify(json));

//       setLoading(false);
//     }
//   };

//   return { login, error, loading };
// };
