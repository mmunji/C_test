"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import DropdownTrigger from "@/components/dropdown/_components/DropdownTrigger";
import Dropdown from "@/components/dropdown/dropdown";
import { FullLoadingSpinner } from "@/components/loadingSpinner/LoadingSpinner";
import { updateProfileImage } from "@/services/my/actions";
import { getRandomProfileImage } from "@/utils/fn";

import {
  CameraMd,
  CameraSm,
  trashFull,
  UserSquare,
} from "../../../../public/icons";

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

  const handleImageReset = async () => {
    const url = getRandomProfileImage();
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    if (!filename) return;
    const metadata = { type: `image/${ext}` };
    const formData = new FormData();
    formData.append("profile", new File([data], filename, metadata));
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
      <Dropdown type="icon">
        <DropdownTrigger>
          <div className="absolute -bottom-[2px] right-[2px] flex h-7 w-7 translate-x-1/2 items-center justify-center rounded-full bg-D3_Gray Tablet:h-10 Tablet:w-10">
            <div className="block Tablet:hidden">
              <Image src={CameraSm} alt="변경" />
            </div>
            <div className="hidden Tablet:block">
              <Image src={CameraMd} alt="변경" />
            </div>
          </div>
        </DropdownTrigger>
        <Dropdown.List className="left-[50px] top-[6px] Tablet:left-20">
          <Dropdown.Item
            onClick={handleImageUpload}
            className="justify-center px-3 py-2 Tablet:justify-start Tablet:p-3"
          >
            <div className="flex items-center gap-2">
              <Image
                src={UserSquare}
                alt="선택"
                className="hidden Tablet:inline-block"
              />
              <p>사진 선택</p>
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            onClick={handleImageReset}
            className="justify-center px-3 py-2 Tablet:justify-start Tablet:p-3"
          >
            <div className="flex items-center gap-2">
              <Image
                src={trashFull}
                alt="삭제"
                className="hidden Tablet:inline-block"
              />
              <p>삭제</p>
            </div>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
      {loading && <FullLoadingSpinner />}
    </>
  );
}
