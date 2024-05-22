import { keywords } from "../../../fakeData";
import KeywordForm from "./keywordForm";
import NewKeyword from "./NewKeyword";

export default function Keyword() {
  return (
    <section>
      <div className="mb-7 flex flex-wrap justify-center gap-2 py-6 Tablet:mb-8">
        {keywords.map((keyword, i) => (
          <p className="" key={i}>
            {keyword}
          </p>
        ))}
      </div>

      <KeywordForm />
      <NewKeyword />
    </section>
  );
}
