"use client";

import React, { Suspense, useEffect, useState } from "react";

import MobileSignUpComplete from "./_components/MobileSignUpComplete";
import NotMobileSignUpComplete from "./_components/NotMobileSignUpComplete";

export default function SignUpComplete() {
  const [prevPage, setPrevPage] = useState<string | null>(null);

  useEffect(() => {
    setPrevPage(sessionStorage.getItem("prev-page"));
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-BG">
      <Suspense>
        {prevPage && (
          <>
            <NotMobileSignUpComplete prevPage={prevPage} />
            <MobileSignUpComplete prevPage={prevPage} />
          </>
        )}
      </Suspense>
    </div>
  );
}
