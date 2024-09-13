"use client"
import { usePathname } from "next/navigation";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
   const pathname = usePathname();
     const isDashboard = pathname.startsWith('/dashboard');
  return <div >{children}</div>;
}
