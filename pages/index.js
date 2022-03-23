import HeroSection from "../sections/home-page/HeroSection";
import MobileRecentPart from "../sections/home-page/MobileRecentPart";
import WhereToGo from "../sections/home-page/WhereToGo";
import ShowPart from "../sections/home-page/ShowPart";
import DescriptionPart from "../sections/home-page/DescriptionPart";
import StatPart from "../sections/home-page/StatPart";
import AdvicePart from "../sections/home-page/AdvicePart";
import OtherMustSeen from "../sections/home-page/OtherMustSeen";
import AllPlaces from "../sections/home-page/AllPlaces";
import SubsriptionPart from "../sections/home-page/SubsriptionPart";
export default function Home() {
  return (
    <>
      <HeroSection />
      <MobileRecentPart />
      <div className="flex justify-center w-100">
        <hr className="mt-8 w-11/12 border border-[#707070] mb-8" />
      </div>
      <WhereToGo />
      <ShowPart />
      <DescriptionPart />
      <StatPart />
      <AdvicePart />
      <OtherMustSeen />
      <AllPlaces />
      <SubsriptionPart />
    </>
  );
}
