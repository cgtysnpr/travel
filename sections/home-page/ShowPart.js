import PopularLocationsPart from "./PopularLocationsPart";
const showData = [
  {
    title: "MARMARIS OTEL",
    location: "TURKIYE, MUGLA",
    price: "$ 68, per night",
    image: "images/cart2.png",
  },
  {
    title: "MARMARIS OTEL",
    location: "TURKIYE, MUGLA",
    price: "$ 68, per night",
    image: "images/cart3.png",
  },
  {
    title: "MARMARIS OTEL",
    location: "TURKIYE, MUGLA",
    price: "$ 68, per night",
    image: "images/cart4.png",
  },
];
function ShowPart() {
  return (
    <div className="w-full bg-[#fbeaeb] pb-10">
      <div className="grid grid-cols-1 flex justify-center justify-items-center sm:grid-cols-4 gap-4  p-12">
        <div className="flex flex-col">
          <div className="flex  mb-2 p-5">
            <h1 className="text-3xl text-black font-bold">
              SADECE GÜZEL DEGIL, EN IYILERI GOSTERIYORUZ
            </h1>
          </div>
          <hr className="border-b-8 border-blue-900 w-6/12 ml-5" />
          <h1 className="text-lg text-black p-5">
            Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum
            tatteLorem ipsum sit amet dolor velle est posse indum ingot lorem
            ipsum tatteLorem ipsum sit amet dolor velle est posse indum.
          </h1>
        </div>
        {showData.map((data, i) => (
          <div key={i}>
            <img className="rounded-mg" src={data.image} />
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <h1 className="text-md text-[#9D9D9D]">{data.location}</h1>
            <h1 className="text-md text-[#9D9D9D]">FROM</h1>
            <h1 className="text-xl text-black">{data.price}</h1>
          </div>
        ))}
      </div>
      <PopularLocationsPart />
    </div>
  );
}
export default ShowPart;
