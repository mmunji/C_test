import Footer from "./_components/Footer";
import MainBanner from "./_components/MainBanner";
import SectionMoiveList from "./_components/SectionMoiveList";
export default function Main() {
  return (
    <div className="bg-BG text-white ">
      <MainBanner />
      <SectionMoiveList />
      <Footer />
    </div>
  );
}
