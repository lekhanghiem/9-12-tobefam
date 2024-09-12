"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingSpin from "./loading";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDataReady(true);
    }, 500);
  }, [pathname, searchParams]);

  if (!dataReady && !pathname.includes("dashboard")) return <LoadingSpin />;
  return null;
}
