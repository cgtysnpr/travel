import { XIcon } from "@heroicons/react/outline";
function RedPart() {
  return (
    <div className="flex-none w-full px-2 sm:px-6 lg:px-12">
      <div
        className="w-72 h-60 flex flex-row-reverse justify-end p-4 text-white"
        style={{
          background:
            "transparent linear-gradient(180deg, #DB1D1D 0%, #DE3131E8 39%, #FFFFFF66 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <div className="flex flex-col pl-7">
          <h3 className="text-4xl font-bold">Türsab’a </h3>
          <h3 className="text-4xl">kayıtlıyız. Kontrol etmek için </h3>
          <h3 className="text-4xl underline underline-offset-1">tıklayın.</h3>
        </div>
      </div>
    </div>
  );
}
export default RedPart;
