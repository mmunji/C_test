import { newKeywords } from "@/app/detail/fakeData";

export default function NewKeyword() {
  return (
    <div className="mt-4 flex justify-center Laptop:mt-3">
      <p className="mr-3 text-L_Gray Text-s-Medium">최신순</p>
      <section className="flex gap-2">
        {newKeywords.map((keyword, i) => (
          <p key={i} className="text-Gray Text-s-Regular">
            {keyword}
          </p>
        ))}
      </section>
    </div>
  );
}
