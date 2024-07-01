"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import MobileSignUpComplete from "./_components/MobileSignUpComplete";
import NotMobileSignUpComplete from "./_components/NotMobileSignUpComplete";

export default function SignUpComplete() {
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const nickname = useSearchParams().get("nickname");

  useEffect(() => {
    setPrevPage(sessionStorage.getItem("prev-page"));
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-BG">
      {prevPage && nickname && (
        <>
          <NotMobileSignUpComplete prevPage={prevPage} nickname={nickname} />
          <MobileSignUpComplete prevPage={prevPage} nickname={nickname} />
        </>
      )}
    </div>
  );
}
