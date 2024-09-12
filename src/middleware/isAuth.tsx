/* eslint-disable react/display-name */

import auth from "@/app/[locale]/utility/auth";
import { useRouter, usePathname } from "next/navigation";
import { ComponentType, useEffect, useState } from "react";

const isAuth = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const pathname = usePathname();
    const [checkAuth, setAuth] = useState(false);
    useEffect(() => {
      const user = auth();
      if (user) {
        setAuth(true);
        router.replace("/");
      }else{
        setAuth(true);
        // router.replace("/login");
        // router.replace("/register");


      }
    }, [router]);

    if (checkAuth) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default isAuth;
