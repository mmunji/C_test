import Footer from "../../components/footer/Footer";
import BannerWapper from "./_components/Banner/BannerWapper";
import SectionMoiveList from "./_components/SectionMoiveList";
export default function Main() {
  return (
    <div className="bg-BG">
      <div>
        <BannerWapper />
      </div>
      <SectionMoiveList />
      <Footer />
    </div>
  );
}
