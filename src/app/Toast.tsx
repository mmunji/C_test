"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useToast, useToastActions } from "@/stores/useToast";

import { CloseSm } from "../../public/icons";

export default function Toast() {
  const toast = useToast();
  const { remove } = useToastActions();
  const handleRemoveToast = (id: string) => {
    remove(id);
  };
  return (
    <div className="">
      <AnimatePresence>
        {toast.map((item) => (
          <motion.div
            key={item.id}
            className="fixed left-1/2 z-[999999] flex w-[320px] -translate-x-1/2 items-center justify-between rounded-xl bg-D2_Gray p-4 shadow-[0_4px_10px_0_rgba(0,0,0,0.3)] Text-s-Medium Laptop:left-auto Laptop:right-[100px] Laptop:w-[400px] Laptop:translate-x-0 Laptop:Text-m-Medium"
            initial={{ bottom: "-260px" }}
            animate={{
              bottom: 40,
              transition: {
                type: "spring",
                duration: 0.25,
                damping: 20,
                mass: 1,
                stiffness: 177.8,
              },
            }}
            exit={{
              opacity: 0,
              bottom: "-160px",
              transition: {
                duration: 0.3,
                damping: 60,
                mass: 1,
                stiffness: 1600,
              },
            }}
          >
            <span className="">{item.message}</span>
            <button type="button" onClick={() => handleRemoveToast(item.id)}>
              <Image src={CloseSm} alt="닫기" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
