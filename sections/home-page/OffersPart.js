const offersPart = [
  {
    title: "FISHING SEASON IN NORWAY",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
  {
    title: "WINTER TRAVEL IN NORWAY",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
  {
    title: "NOEL IN NORWAY",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
];
function OffersParts() {
  return (
    <>
      <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-start sm:justify-between mb-5">
        <h1 className="font-bold text-4xl">
          STILL CONFUSED? CHECK OUR OFFERS.
        </h1>
        <h1 className=" text-[#9D9D9D]">
          Select your destination to make your summer unforgettable
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {offersPart.map((data, i) => (
          <div className="bg-[#FBEAEB] p-8">
            <h1 className="text-2xl text-[#2F3C7E] font-bold">{data.title}</h1>
            <h1 className="text-[#2F3C7E] font-medium w-3/5">
              {data.description}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
export default OffersParts;
