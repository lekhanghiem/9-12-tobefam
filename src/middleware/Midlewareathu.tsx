'use client'
import { useEffect, useState } from "react";
import { useRouter , usePathname } from "next/navigation";
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true); // Loading state
  const path = usePathname(); // Get the current route
 const router = useRouter();
  useEffect(() => {

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLoading(true);
if(path === "/vi/login" || path==="/vi/register") {
        router.replace("/");

}
else{
console.log("123123")
}
    } else {
      if (path !== "/vi/login" && path !== "/vi/register" && !storedUser ) {
        router.replace("/login");
      } else {
        setLoading(true);
      }
    }
  }, [router, path]);
  if (loading) {
      return <>{children}</>;
  }
};

export default ProtectedRoute;
