import LaptopMasterPiece from "./LaptopMasterPiece";

export default function MasterPieceSkeleton() {
  return (
    <div>
      <div className="flex flex-col gap-4  ">
        <h1 className="Text-l-Bold Laptop:Text-xxl-Bold">
          씨네톡 속 숨겨진 명작
        </h1>
        <LaptopMasterPiece />
      </div>
    </div>
  );
}
