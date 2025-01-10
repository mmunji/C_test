"use client";
import Image from "next/image";
import { useRef, useState } from "react";

import DropdownTrigger from "@/components/dropdown/_components/DropdownTrigger";
import Dropdown from "@/components/dropdown/dropdown";
import { FullLoadingSpinner } from "@/components/loadingSpinner/LoadingSpinner";
import Modal from "@/components/modal/modal";
import { updateProfileImage } from "@/services/my/actions";
import { getRandomProfileImage } from "@/utils/image";

import {
  CameraMd,
  CameraSm,
  trashFull,
  UserSquare,
} from "../../../../public/icons";

export default function ImageUploadForm() {
  const [isImageErrorAlertOpen, setisImageErrorAlertOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = () => {
    inputRef.current?.click();
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const target = e.target.files[0];
    if (!target?.name.match(/\.(jpg|jpeg|png)$/)) {
      setisImageErrorAlertOpen(true);
      return false;
    }
    const formData = new FormData();
    formData.append("profile", e.target.files[0]);
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
              <Image unoptimized src={CameraSm} alt="변경" />
            </div>
            <div className="hidden Tablet:block">
              <Image unoptimized src={CameraMd} alt="변경" />
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
                unoptimized
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
                unoptimized
                src={trashFull}
                alt="삭제"
                className="hidden Tablet:inline-block"
              />
              <p>삭제</p>
            </div>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
      {isImageErrorAlertOpen && (
        <Modal isAlertModal onClose={() => setisImageErrorAlertOpen(false)}>
          <Modal.TitleWrapper>
            <Modal.Title>이미지 형식이 올바르지 않아요.</Modal.Title>
            <Modal.Description>
              JPG, JPEG, PNG 형식의 확장자만 가능해요.
            </Modal.Description>
          </Modal.TitleWrapper>
          <Modal.Button onClick={() => setisImageErrorAlertOpen(false)}>
            확인
          </Modal.Button>
        </Modal>
      )}
      {loading && <FullLoadingSpinner />}
    </>
  );
}
