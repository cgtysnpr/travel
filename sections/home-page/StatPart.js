const statData = [
  {
    title: "40 years of experience",
    description: "….. is your holiday home specialist",
  },
  {
    title: "Average rating of 4+",
    description: "Proven by awards & great reviews",
  },
  {
    title: "40k+ homes in Europe",
    description: "Beautiful and unique holiday homes",
  },
  {
    title: "2.8 million guests in 2020",
    description: "We offer you a memorable experience",
  },
];
function StatPart() {
  return (
    <div className="bg-[#F8F8F8] hidden sm:block px-12">
      <div className="grid sm:grid-cols-4 gap-4 py-16">
        {statData.map((data, i) => (
          <div key={i} className="flex">
            <div className="rounded-full w-14 h-14 bg-[#2F3C7E]" />
            <div className="ml-8">
              <h1 className="font-bold text-xl">{data.title}</h1>
              <h1 className="text-xs">{data.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StatPart;
