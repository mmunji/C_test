export default function KeywordBar() {
  return (
    <div
      className="mb-4 flex w-full items-center justify-center rounded-xl py-3 Laptop:mb-[52px] Laptop:py-5"
      style={{
        background:
          "linear-gradient(96deg, rgba(115, 80, 136, 0.30) 0%, rgba(93, 32, 44, 0.30) 100%), #2E2C2B;",
      }}
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
