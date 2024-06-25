import React from "react";

import Button from "@/components/buttons/Button";

export default function SignUpGender() {
  return (
    <section className="mt-6 Tablet:mt-5">
      <label className="text-White Text-xs-Regular">성별</label>
      <section className="flex gap-3">
        <Button variant="line" size="md" className="w-full rounded-xl ">
          남자
        </Button>
        <Button variant="line" size="md" className="w-full rounded-xl ">
          여자
        </Button>
        <Button variant="line" size="md" className="w-full rounded-xl ">
          기타
        </Button>
      </section>
    </section>
  );
}
