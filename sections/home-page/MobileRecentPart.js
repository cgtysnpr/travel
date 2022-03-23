import { XIcon } from "@heroicons/react/outline";

function MobileRecentPart() {
  return (
    <div className="grid grid-cols-2  gap-2 block sm:hidden px-2 mt-4">
      <div className="w-full h-auto flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
        <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
        </div>
        <div className="flex flex-col pl-7">
          <div className="h-7 w-24 bg-black rounded-md text-center">
            <h1 className="text-sm mt-1">Recent Search</h1>
          </div>
          <h1 className="text-xl text-black">London</h1>
          <h1 className="text-sm  text-black">
            08 Nov - 18 Nov 2021 - 2 Guest
          </h1>
        </div>
      </div>
      <div className="w-full h-auto flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
        <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
        </div>
        <div className="flex flex-col pl-7">
          <div className="h-7 w-24 bg-black rounded-md text-center">
            <h1 className="text-sm mt-1">Recent Search</h1>
          </div>
          <h1 className="text-xl text-black">London</h1>
          <h1 className="text-sm  text-black">
            08 Nov - 18 Nov 2021 - 2 Guest
          </h1>
        </div>
      </div>
    </div>
  );
}
export default MobileRecentPart;
