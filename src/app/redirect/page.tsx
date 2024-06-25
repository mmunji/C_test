"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { authAPIS } from "@/services/auth/authAPIs";

export default function Redirect() {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const authToken = searchParams.get("authToken");

  useEffect(() => {
    const fetchLogin = async () => {
      const prevPage = sessionStorage.getItem("prev-page");

      if (authToken) {
        const { res } = await authAPIS.authBy(authToken);
        console.log(res.headers.get("access"));

        if (res.ok && prevPage) {
          router.push(prevPage);
        }
      }
    };
    fetchLogin();
  }, [authToken, router]);

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoadingSpinner size="3xl" color={"primary"} />
    </div>
  );
}
