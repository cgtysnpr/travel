import RedPart from "./hero-section/RedPart";
import SearchPart from "./hero-section/SearchPart";
import RecentPart from "./hero-section/RecentPart";
function HeroSection() {
  return (
    <div className="w-full">
      <div className="w-full h-100 bg-no-repeat overlay bg-cover">
        <div className="flex flex-col md:flex-row">
          <div className="grid grid-cols-1 w-full lg:w-6/12 gap-4 px-12 mt-2">
            <RedPart />
            <SearchPart />
          </div>
          <RecentPart />
        </div>
        <div className="flex relative basis-full w-full justify-end pt-10 sm:pt-0 pr-10 pb-10">
          <div className="w-20 h-20 rounded-full flex justify-center items-center border-white border-2">
            <h1 className="text-lg text-white">WA</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
