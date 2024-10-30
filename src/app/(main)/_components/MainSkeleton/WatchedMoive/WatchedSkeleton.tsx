import LaptopMasterPiece from "../MasterPieceMovie/LaptopMasterPiece";
import MobileWatched from "./MobileWatched";
import TabletWatched from "./TabletWatched";

export default function WatchedSkeleton() {
  return (
    <div>
      <div className="hidden Laptop:block">
        <LaptopMasterPiece />
      </div>
      <div className="Laptop:hidden">
        <MobileWatched />
        <TabletWatched />
      </div>
    </div>
  );
}
