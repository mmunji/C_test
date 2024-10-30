import {
  ModalButton,
  ModalCancelButton,
  ModalCheckbox,
} from "@/components/modal/_components/ModalButtons";
import ModalEtc from "@/components/modal/_components/ModalEtc";
import ModalLogin from "@/components/modal/_components/ModalLogin";
import ModalMain from "@/components/modal/_components/ModalMain";
import {
  ModalDescription,
  ModalTitle,
  ModalTitleWrapper,
} from "@/components/modal/_components/ModalTitle";

const Modal = Object.assign(ModalMain, {
  TitleWrapper: ModalTitleWrapper,
  Title: ModalTitle,
  Description: ModalDescription,
  Etc: ModalEtc,
  Button: ModalButton,
  CancelButton: ModalCancelButton,
  Checkbox: ModalCheckbox,
  Login: ModalLogin,
});

export default Modal;
