const locationData = [
  {
    head: "Trending",
    title: "Muğla, Turkey",
    views: "1284 views",
  },
  {
    head: "Trending",
    title: "Muğla, Turkey",
    views: "1284 views",
  },
  {
    head: "Trending",
    title: "Muğla, Turkey",
    views: "1284 views",
  },
  {
    head: "Trending",
    title: "Muğla, Turkey",
    views: "1284 views",
  },
  {
    head: "Trending",
    title: "Muğla, Turkey",
    views: "1284 views",
  },
];
function PopularLocationsPart() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-4xl font-bold text-black px-12 tracking-widest">
          POPULAR LOCATIONS
        </h1>
        <h1 className="px-12 text-[#9D9D9D]">
          Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum
          tatteLorem ipsum sit amet{" "}
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 px-12 mt-6">
        {locationData.map((data, i) => (
          <div key={i} className={(i+1) === locationData.length ? "hidden sm:block bg-[#2f3c7e] rounded-md p-6":"bg-[#2f3c7e] rounded-md p-6"}>
            <h1 className="text-red-700 font-bold text-xl underline">
              {data.head}
            </h1>
            <h1 className="text-white  text-xl ">{data.title}</h1>
            <h1 className="text-white  text-xl ">{data.views}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
export default PopularLocationsPart;
