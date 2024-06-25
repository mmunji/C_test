export function AccountFormTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="Text-s-Bold Tablet:Text-l-Bold">{children}</h2>;
}

export function AccountFormLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 items-center">
      <span className="w-12 text-Gray_Orange Tablet:w-[120px]">{children}</span>
    </div>
  );
}
