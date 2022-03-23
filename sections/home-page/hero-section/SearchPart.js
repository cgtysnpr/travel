import {
  LocationMarkerIcon,
  CalendarIcon,
  UsersIcon,
} from "@heroicons/react/solid";
function SearchPart() {
  return (
    <>
      <div className="w-full">
        <h3 className="text-3xl lg:text-6xl font-semibold text-white lg:tracking-widest leading-tight">
          Muhteşem evlerden birini seç, tatilin tadını çıkart!
        </h3>
      </div>
      <div>
        <div className="w-full flex flex-row items-center rounded-full border-2 h-14 sm:h-24 border-white bg-transparent">
          <LocationMarkerIcon
            className="block h-8 w-16 text-white "
            aria-hidden="true"
          />
          <input
            type="text"
            className="w-11/12 h-full text-white heroText text-2xl bg-transparent border-transparent focus:outline-none"
            placeholder="Nereye Gidiyorsunuz?"
          />
        </div>
      </div>
      <div>
        <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
          <CalendarIcon
            className="block h-8 w-16 text-white"
            aria-hidden="true"
          />
          <h1 className="text-white text-2xl  bg-transparent border-transparent focus:outline-none">
            {" "}
            {"Check-in > Check-out"}{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
          <UsersIcon className="block h-8 w-16 text-white" aria-hidden="true" />
          <h1 className="text-white text-xl sm:text-2xl bg-transparent border-transparent focus:outline-none">
            {" "}
            2 Guests{" "}
          </h1>
        </div>
        <div className="w-full">
          <button className="text-blue-800 w-full rounded-full h-14 sm:h-24 text-2xl bg-white border-transparent border-2 border-white bg-white focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
export default SearchPart;
