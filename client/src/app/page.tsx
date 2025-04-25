// "use client"; // ✅ Ensures client-side navigation

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace("/auth/login"); // ✅ Redirects users to Login on page load
//   }, []);

//   return null; // Keeps the landing page empty while redirecting
// }

import HomePage from "../components/homepage/homepage";

export default function Home() {
  return <HomePage/>
}