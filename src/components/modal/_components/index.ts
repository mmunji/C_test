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
