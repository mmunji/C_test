"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { authAPIS } from "@/services/auth/authAPIs";

export default function Redirect() {
  const router = useRouter();
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setAuthToken(searchParams.get("authToken"));
      setPrevPage(sessionStorage.getItem("prev-page"));
    }
  }, []);

  useEffect(() => {
    const fetchLogin = async () => {
      if (authToken) {
        const { res } = await authAPIS.authBy(authToken);
        console.log(res.headers.get("access"));

        if (res.ok && prevPage) {
          router.push(prevPage);
        }
      }
    };
    fetchLogin();
  }, [authToken, router, prevPage]);

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoadingSpinner size="3xl" color={"primary"} />
    </div>
  );
}
