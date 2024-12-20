import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";

import Button from "@/components/buttons/Button";
import Dropdown from "@/components/dropdown/dropdown";
import { useRemoveTalk } from "@/services/talk/talkMutations";
import formatDate from "@/utils/formatDate";

import { MoreHorizontal } from "../../../../../../../../../public/icons";
import DeleteTalkModal from "../../../DeleteTalkModal";

interface ReplyHeaderProps {
  reply: ReviewList;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTalkId: Dispatch<SetStateAction<number | null>>;
  movieId: number;
  setEditReply: Dispatch<SetStateAction<boolean>>;
  parentReviewId: number;
}

export default function ReplyHeader({
  reply,
  setOpen,
  setTalkId,
  movieId,
  setEditReply,
  parentReviewId,
}: ReplyHeaderProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { mutate: removeTalk, isPending } = useRemoveTalk({
    parentReviewId: parentReviewId,
    setOpenDeleteModal: setOpenDeleteModal,
    movieId: movieId,
    type: "reply",
  });
  const submitRemoveTalk = () => {
    removeTalk({ talkId: reply.id });
  };

  return (
    <>
      <div className="flex h-10 items-center justify-between">
        <section className="flex items-center gap-2">
          <Image
            unoptimized
            width={100}
            height={100}
            alt={reply?.nickName}
            id="replyimg"
            src={`data:image/jpeg;base64,${reply?.profileImage}`}
            className="mt-1 h-7 w-7 overflow-hidden rounded-full Tablet:mr-2 Tablet:h-[30px] Tablet:w-[30px]"
          />

          <p className="text-Gray_Orange Text-xs-Regular Tablet:Text-s-Medium">
            {reply?.nickName}
          </p>
          <p className="text-Gray Text-xs-Regular Tablet:Text-s-Medium">
            {formatDate(reply?.createdAt)} {reply?.edited && "(수정)"}
          </p>
        </section>
        {reply?.mine ? (
          <Dropdown type="text">
            <Dropdown.Trigger>
              <Button variant="text" className="my-auto h-fit">
                <Image unoptimized src={MoreHorizontal} alt="메뉴" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.List>
              <Dropdown.Item
                onClick={() => {
                  setEditReply(true);
                }}
              >
                수정
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setOpenDeleteModal(true);
                }}
              >
                삭제
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        ) : (
          <Dropdown type="text">
            <Dropdown.Trigger>
              <Button variant="text" className="my-auto h-fit">
                <Image unoptimized src={MoreHorizontal} alt="메뉴" />
              </Button>
            </Dropdown.Trigger>
            <Dropdown.List>
              <Dropdown.Item
                onClick={() => {
                  setTalkId(reply?.id);
                  setOpen(true);
                }}
              >
                신고
              </Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        )}
      </div>
      {openDeleteModal && (
        <DeleteTalkModal
          onClick={submitRemoveTalk}
          setOpenDeleteModal={setOpenDeleteModal}
          isPending={isPending}
        />
      )}
    </>
  );
}
