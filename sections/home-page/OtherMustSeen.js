const otherMustSeenData = [
  {
    title: "Aspen",
  },
  {
    title: "Breckenridge",
  },
  {
    title: "Coachella",
  },
  {
    title: "Hudson Valley",
  },
  {
    title: "Joshua Tree",
  },
  {
    title: "Lake Tahoe",
  },
  {
    title: "North Lake Tahoe",
  },
  {
    title: "Palm Springs",
  },
  {
    title: "San Diego",
  },
  {
    title: "South Lake Tahoe",
  },
  {
    title: "Steamboat Springs",
  },
  {
    title: "Tahoe city",
  },
  {
    title: "Telluride",
  },
  {
    title: "The Hamptons",
  },
  {
    title: "Vail",
  },
];
function OtherMustSeen() {
  return (
    <div className="px-12">
      <div className="flex justify-center flex-col sm:flex sm:justify-start">
        <h1 className="mt-12 text-xl font-bold">OTHER, MUST SEEN PLACES</h1>
        <h1 className="mt-12 text-xl font-bold mb-3">ITALY</h1>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-4">
        {otherMustSeenData.map((data, i) => (
          <div key={i}>
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OtherMustSeen;
