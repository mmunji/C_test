import { josa } from "es-hangul";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import Button from "@/components/buttons/Button";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import Modal from "@/components/modal/modal";
import useDevice from "@/hooks/useDevice";
import useHandleClickAuthButton from "@/hooks/useHandleClickAuthButtons";
import useNeedLogin from "@/hooks/useNeedLogin";
import {
  useAddKeyword,
  useEditKeyword,
} from "@/services/keyword/keywordMutations";
import filterAbuse from "@/utils/filterAbuse";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";

interface KeywordFormProps {
  movieId: number;
  title: string;
  initialValue?: string;
  myKeywordId?: number | null;
  isClickedEdit?: boolean;
  setIsClickedEdit?: Dispatch<SetStateAction<boolean>>;
}

export default function KeywordForm({
  movieId,
  title,
  initialValue = "",
  myKeywordId,
  isClickedEdit,
  setIsClickedEdit,
}: KeywordFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(initialValue);
  const { device } = useDevice();
  const { mutate: addKeyword, isPending } = useAddKeyword(setValue, movieId);
  const { handleClickAuthButton } = useHandleClickAuthButton();
  const { isOpen, setIsOpen, handleNeedLogin } = useNeedLogin();
  const { mutate: editKeyword } = useEditKeyword(
    setIsClickedEdit,
    movieId,
    myKeywordId,
  );

  useEffect(() => {
    if (isClickedEdit) inputRef.current?.focus();
  }, [isClickedEdit]);

  const sliceTitleMap: { [key: string]: number } = {
    mobile: 10,
    tablet: Infinity,
    laptop: 5,
    desktop: 11,
  };

  const sliceNumber = sliceTitleMap[device];

  const formattedTitle =
    title.length > sliceNumber
      ? title.split("").splice(0, sliceNumber).join("") + "..."
      : title;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    } else {
      setValue(e.target.value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filterAbuse(value)) return;
    if (initialValue === "") addKeyword({ movieId, value });
    else editKeyword({ movieId: movieId, value: value });
  };

  const josaTitle = josa(formattedTitle, "은/는");
  const fullJosaTitle = josa(title, "은/는");

  return (
    <form onSubmit={handleSubmit} className="relative w-full Laptop:static">
      <div className="absolute left-1/2 top-[-13px] w-[305px] translate-x-[-50%] translate-y-[-100%] Laptop:hidden">
        <SpeechBubble dir="bottom">
          떠오르는 단어를 작성하거나, 키워드를 눌러보세요!
        </SpeechBubble>
      </div>
      <div className="relative w-full overflow-hidden rounded-xl ">
        <input
          ref={inputRef}
          type="text"
          placeholder={`${device === "tablet" ? `${fullJosaTitle}` : `${josaTitle}`} 한 단어로?`}
          maxLength={5}
          value={value}
          onFocus={() => {
            if (handleNeedLogin()) {
              inputRef.current?.blur();
              return;
            }

            setFocused(true);
          }}
          onChange={(e) => handleChange(e)}
          className="h-[45px] w-full bg-[rgba(0,0,0,0.20)] py-2 pl-4 pr-3 text-Gray_Orange outline-none Text-s-Medium placeholder:text-Gray Tablet:Text-m-Medium"
        />

        <section className="absolute right-3 top-1/2 flex translate-y-[-50%] items-center gap-2">
          {focused && (
            <p className="text-Gray Text-s-Regular">{value?.length}/5</p>
          )}
          <Button
            size="sm"
            variant="orange"
            type="submit"
            disabled={!value || isPending}
            className="flex h-[29px] w-[60.3px] items-center justify-center"
          >
            {isPending ? <LoadingSpinner color="white" size="xs" /> : "올리기"}
          </Button>
        </section>
      </div>

      {isOpen && (
        <Modal isAlertModal={false} onClose={() => setIsOpen(false)}>
          <Modal.Login
            onKakaoLogin={() => handleClickAuthButton("kakao")}
            onNaverLogin={() => handleClickAuthButton("naver")}
          />
        </Modal>
      )}
    </form>
  );
}
