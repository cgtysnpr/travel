import OffersParts from "./OffersPart";
const descriptionData = [
  {
    title: "ITALY",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart1.png",
  },
  {
    title: "DUBAI",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart5.png",
  },
  {
    title: "FRANCE",
    description:
      "Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.",
    image: "images/cart6.png",
  },
];
function DescriptionPart() {
  return (
    <div className="px-12 mt-10 pt-10 mb-16">
      <h1 className="text-4xl font-bold text-black  tracking-wide">
        LOREM IPSUM SIT AMET DOLOR VELLE EST POSSE.
      </h1>
      <h1 className="text-[#9D9D9D] w-3/6 mt-2 mb-12">
        Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum
        tatteLorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum
        tatteLorem ipsum sit amet dolor velle est posse indum.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {descriptionData.map((data, i) => (
          <div key={i} className="hover:border-t-8 hover:border-[#35448C] py-2">
            <img className="rounded-md w-full mb-5" src={data.image} />
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <h1 className="w-3/5">{data.description}</h1>
          </div>
        ))}
      </div>
      <OffersParts />
    </div>
  );
}
export default DescriptionPart;
