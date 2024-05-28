import {
  ModalButton,
  ModalCancelButton,
  ModalCheckbox,
} from "@/components/modal/_components/ModalButtons";
import { ModalLogin } from "@/components/modal/_components/ModalLogin";
import { ModalImg, ModalMain } from "@/components/modal/_components/ModalMain";
import { ModalReport } from "@/components/modal/_components/ModalReport";
import {
  ModalDescription,
  ModalTitle,
  ModalTitleWrapper,
} from "@/components/modal/_components/ModalTitle";

/* 사용 방법
 <Modal
   isAlertModal={false}                                    - alert modal 유무를 확인하여 패딩 값을 부여합니다.
   isOpen={isOpen}                                         - 외부에서 상태를 받아옵니다.
   onClose={() => setIsOpen(false)}                        - onClose함수를 받습니다.
 >
    <Modal.TitleWrapper>                                   - title이 필요한 경우에 사용하세요
      <Modal.Title>정말 씨네톡을 탈퇴 하시겠어요?</Modal.Title>
      <Modal.Description>
        회원님의 톡과 평점은 남지만
        <br />
        씨네톡을 더이상 이용할 수 없어요.
      </Modal.Description>
    </Modal.TitleWrapper>
    <Modal.Report />                                       - 신고창이 필요한 경우에 사용하세요 props는 받지 않습니다.
    <Modal.Login                                           - 로그인이 필요한 경우에 사용하세요 children 메시지와 로그인 함수를 받습니다.
      onKakaoLogin={() => console.log("d")}
      onNaverLogin={() => console.log("d")}
    />
    <Modal.Img />                                          - 이미지가 필요한 경우에 사용하세요 props는 받지 않습니다.
    <Modal.Checkbox>네, 전부 삭제하고 탈퇴할래요</Modal.Checkbox> - 체크박스가 필요한 경우에 사용하세요 props는 받지 않습니다.
    <Modal.CancelButton>취소</Modal.CancelButton>            - 취소 버튼이 필요한 경우에 사용하세요 props는 받지 않습니다.
    <Modal.Button                                           - 액션 버튼이 필요한 경우에 사용하세요 callback인자에는 report에서 선택된 상태를 받습니다. 필요한 경우 사용하세요.
      onClick={() => {
        setIsOpen(false);
      }}
    >
      탈퇴하기
    </Modal.Button>
 </Modal>
*/

const Modal = Object.assign(ModalMain, {
  TitleWrapper: ModalTitleWrapper,
  Title: ModalTitle,
  Description: ModalDescription,
  Img: ModalImg,
  Button: ModalButton,
  CancelButton: ModalCancelButton,
  Checkbox: ModalCheckbox,
  Report: ModalReport,
  Login: ModalLogin,
});

export default Modal;
