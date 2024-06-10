import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import { keywordAPIs } from "@/api/keyword/keywordAPIs";
import Button from "@/components/buttons/Button";
import LoadingSpinner from "@/components/loadingSpinner/LoadingSpinner";
import useDevice from "@/hooks/useDevice";

import SpeechBubble from "../../../../../components/speechBubble/SpeechBubble";

interface KeywordFormProps {
  movieId: number;
  title: string;
}

export default function KeywordForm({ movieId, title }: KeywordFormProps) {
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const { device } = useDevice();

  const sliceTitleMap: { [key: string]: number } = {
    mobile: 10,
    tablet: Infinity,
    laptop: 5,
    desktop: 11,
  };

  const sliceNumber = sliceTitleMap[device];

  const formattedTitle =
    title.split("").splice(0, sliceNumber).join("") + "...";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      e.target.value = e.target.value.slice(0, 5);
    } else {
      setValue(e.target.value);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { res } = await keywordAPIs.addKeyword(movieId, value);
      setLoading(true);
      if (res.ok) setValue("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full Laptop:static">
      <div className="absolute left-1/2 top-[-13px] w-[305px] translate-x-[-50%] translate-y-[-100%] Laptop:hidden">
        <SpeechBubble dir="bottom">
          떠오르는 단어를 작성하거나, 키워드를 눌러보세요!
        </SpeechBubble>
      </div>
      <div className="relative w-full overflow-hidden rounded-xl ">
        <input
          type="text"
          placeholder={`'${device === "tablet" ? title : formattedTitle}'는 한 단어로?`}
          maxLength={5}
          value={value}
          onFocus={() => setFocused(true)}
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
            disabled={!value || loading}
            className="flex h-[29px] w-[60.3px] items-center justify-center"
          >
            {loading ? <LoadingSpinner color="white" size="xs" /> : "올리기"}
          </Button>
        </section>
      </div>
    </form>
  );
}
