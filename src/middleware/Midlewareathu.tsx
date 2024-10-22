'use client'
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();
  const pathname = usePathname(); // Get the current route
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setLoading(false);
    } else {
      if (pathname !== "/vi/login" && pathname !== "/register" ) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    }
  }, [router, pathname]);

  if (loading) {
      router.replace("/areaList"); // Optional: loading indicator while checking auth
  }

  // Render children if user is authenticated or on login/register page
  return <>{children}</>;
};

export default ProtectedRoute;
