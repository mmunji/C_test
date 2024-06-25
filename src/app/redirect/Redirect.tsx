"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import { authAPIS } from "@/services/auth/authAPIs";

export default function Redirect() {
  const searchParams = useSearchParams();
  const authToken = searchParams.get("authToken");
  const router = useRouter();
  const prevPage = sessionStorage.getItem("prev-page");
  const params = new URL(document.location).searchParams;
  const name = params.get("name");

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
