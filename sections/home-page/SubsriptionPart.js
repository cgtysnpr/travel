function SubsriptionPart() {
  return (
    <div className="bg-[#C5FAD5] pb-16">
      <div className="flex justify-center flex-col items-center pt-10">
        <h1 className="font-semibold text-xl mb-5">
          Sign Up, we will send the best deals to you!
        </h1>
        <div className="w-full flex items-center justify-center ">
          <div className="bg-white flex  flex-row-reverse w-3/6 h-14 rounded-md">
            <button
              type="button"
              className="rounded-md bg-black text-white w-2/5"
            >
              Subscribe
            </button>
            <input
              className="w-full bg-transparent focus:outline-none pl-3"
              type="text"
              placeholder="Enter your mail address, here."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SubsriptionPart;
