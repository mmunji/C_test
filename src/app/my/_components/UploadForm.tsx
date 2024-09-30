"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import { FullLoadingSpinner } from "@/components/loadingSpinner/LoadingSpinner";
import { updateProfileImage } from "@/services/my/actions";

import { CameraMd, CameraSm } from "../../../../public/icons";

export default function ImageUploadForm() {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = () => {
    inputRef.current?.click();
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.files) return;
    const formData = new FormData();
    formData.append("profile", e.currentTarget.files[0]);
    setLoading(true);
    await updateProfileImage(formData);
    setLoading(false);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button
        type="button"
        onClick={handleImageUpload}
        className="absolute -bottom-[2px] right-[2px] flex h-7 w-7 translate-x-1/2 items-center justify-center rounded-full bg-Gray Tablet:h-10 Tablet:w-10"
      >
        <div className="block Tablet:hidden">
          <Image src={CameraSm} alt="변경" />
        </div>
        <div className="hidden Tablet:block">
          <Image src={CameraMd} alt="변경" />
        </div>
      </button>
      {loading && <FullLoadingSpinner />}
    </>
  );
}
