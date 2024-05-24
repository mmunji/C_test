import styles from "./KeywordBar.module.css";

export default function KeywordBar() {
  return (
    <div
      className={`mb-4 flex w-full items-center justify-center rounded-xl py-3 Laptop:mb-[52px] Laptop:py-5 ${styles.keyword_bar}`}
    >
      <section className="flex h-6 items-center Laptop:h-[34px]">
        <span className="mr-2 text-regular font-Bold text-Silver Laptop:text-xl">
          웡카, 지금은
        </span>
        <span className="text-regular font-Bold text-Primary Laptop:text-xl">
          초콜릿 향
        </span>
      </section>
    </div>
  );
}
