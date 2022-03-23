const adviceData = [
  {
    title: "NORFOLK",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart7.png",
  },
  {
    title: "LA QUINTA",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart8.png",
  },
  {
    title: "STROUD",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart9.png",
  },
  {
    title: "SAN BERNARDO",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart10.png",
  },
];
function AdvicePart() {
  return (
    <div className="px-12 mt-10 pt-10 mb-16">
      <div className="flex flex-col sm:flex-row justify-between mb-12">
        <h1 className="text-4xl  font-bold text-black tracking-wide">
          SEYAHAT BLOGGERLARINDAN TAVSIYELER
        </h1>
        <h1 className="text-[#9D9D9D] mt-2">
          Select your destination to make your summer unforgettable
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {adviceData.map((data, i) => (
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
export default AdvicePart;
