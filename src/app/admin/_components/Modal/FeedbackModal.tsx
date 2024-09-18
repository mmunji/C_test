import Modal from "@/components/modal/modal";

interface FeedBackProps {
  isListModal: boolean;
  setIsModal: (value: boolean) => void;
  setisListModal: (value: boolean) => void;
  ModalContent: {
    user_email: string;
    user_nickName: string;
    content: string;
  };
}

export default function FeedBackModal({
  isListModal,
  setIsModal,
  ModalContent,
  setisListModal,
}: FeedBackProps) {
  return (
    <Modal isAlertModal isOpen={isListModal} onClose={() => setIsModal}>
      <Modal.TitleWrapper>
        <Modal.Title>피드백</Modal.Title>
        <Modal.Description>
          이메일 : {ModalContent.user_email}
        </Modal.Description>
        <Modal.Description>
          닉네임 : {ModalContent.user_nickName}
        </Modal.Description>
        <hr />
        <Modal.Description>{ModalContent.content}</Modal.Description>
      </Modal.TitleWrapper>
      <Modal.Button onClick={() => setisListModal(false)}>확인</Modal.Button>
    </Modal>
  );
}
