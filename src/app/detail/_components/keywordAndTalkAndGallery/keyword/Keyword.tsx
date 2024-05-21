import { keywords } from "../../../fakeData";
import KeywordForm from "./keywordForm";

export default function Keyword() {
  return (
    <section className="mt-6">
      <div className="mb-[52px] flex flex-wrap justify-center gap-2 Tablet:mb-8">
        {keywords.map((keyword, i) => (
          <p className="" key={i}>
            {keyword}
          </p>
        ))}
      </div>

      <KeywordForm />
    </section>
  );
}
