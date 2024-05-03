import React from "react";

import useLoggedInStore from "@/stores/useLoggedIn";

import HeaderAuthButtons from "./HeaderAuthButtons";
import HeaderAuthedUserSection from "./HeaderAuthedUserSection";
import HeaderSearchInput from "./HeaderSearchInput";

interface HeaderRightSectionProps {
  hasScrolledPast: boolean;
}

export default function HeaderRightSection({
  hasScrolledPast,
}: HeaderRightSectionProps) {
  const { loggedIn, setLoggedIn } = useLoggedInStore();

  return (
    <section className="flex h-10 items-center gap-8">
      <HeaderSearchInput hasScrolledPast={hasScrolledPast} />
      {loggedIn ? <HeaderAuthedUserSection /> : <HeaderAuthButtons />}
    </section>
  );
}
