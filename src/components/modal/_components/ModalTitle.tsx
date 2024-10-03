export function ModalTitleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 Tablet:min-w-[360px]">
      {children}
    </div>
  );
}

export function ModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-[216px] text-center text-Primary Text-l-Bold Tablet:Text-xl-Bold">
      {children}
    </div>
  );
}

export function ModalDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-center Text-m-Medium">{children}</div>;
}
