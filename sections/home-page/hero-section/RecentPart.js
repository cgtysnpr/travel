import { XIcon } from "@heroicons/react/outline";
const recentData = [
  {
    title: "London",
    description: "08 Nov - 18 Nov 2021 - 2 Guest",
  },
  {
    title: "London",
    description: "08 Nov - 18 Nov 2021 - 2 Guest",
  },
  {
    title: "London",
    description: "08 Nov - 18 Nov 2021 - 2 Guest",
  },
  {
    title: "London",
    description: "08 Nov - 18 Nov 2021 - 2 Guest",
  },
];
function RecentPart() {
  return (
    <div className="w-full lg:w-5/12 flex justify-end place-items-end">
      <div className="grid grid-rows-4  gap-x-0 px-12 mt-20 hidden sm:hidden md:block">
        {recentData.map((data, i) => (
          <div
            key={i}
            className="flex-none w-full px-2 sm:px-6 lg:px-12 sm:my-5"
          >
            <div className="w-80 h-32 flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
              <div className="flex justify-end">
                <XIcon
                  className="block h-6 w-6 text-black"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col pl-7">
                <div className="h-7 w-24 bg-black rounded-md text-center">
                  <h1 className="text-sm mt-1">Recent Search</h1>
                </div>
                <h1 className="text-2xl text-black">{data.title}</h1>
                <h1 className="text-lg whitespace-nowrap text-black">
                  {data.description}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RecentPart;
