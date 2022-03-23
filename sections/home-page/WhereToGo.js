const goData = [
  {
    title: "BAHAMAS",
    image: "images/slider-1.png",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
  {
    title: "ITALY",
    image: "images/slider-2.png",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
  {
    title: "DUBAI",
    image: "images/slider-3.png",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
  {
    title: "FRANCE",
    image: "images/slider-4.png",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
  },
];
function WhereToGo() {
  return (
    <div className="px-12 mt-10 pt-10 mb-16">
      <h1 className="text-4xl font-bold text-black  tracking-wide">
        WHERE TO GO, THIS SUMMER ?!
      </h1>
      <h1 className="text-[#9D9D9D] w-3/6 mt-2 mb-12">
        Select your destination to make your summer unforgettable for you
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {goData.map((data, i) => (
          <div key={i} className="hover:border-t-8 hover:border-[#35448C] py-2">
            <img className="rounded-md w-full mb-5" src={data.image} />
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <h1 className="w-3/5">{data.description}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WhereToGo;
