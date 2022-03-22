
function Footer(){

    return(

        <>
       <div className="bg-[#F2F2F2] px-12 pb-10 sm:pb-2">
       <div class="grid grid-cols-2 sm:grid-cols-4 gap-10 p-20">
            <div className="border-t-4 border-[#35448C] pt-5">
                <h1 className="text-black text-lg font-bold mb-5">Popular</h1>
                <h1>Ski Vacation </h1>
                <h1>Luxury holiday homes</h1>
                <h1>Cottage Netherlands</h1>
                <h1>Holiday in Belgium</h1>
                <h1>Holiday Parks</h1>
                <h1>Group accommodation</h1>
                <h1>City Breaks</h1>
            </div>
            <div className="border-t-4 border-[#35448C] pt-5">
                <h1 className="text-black text-lg font-bold mb-5">For Homeowners</h1>
                <h1>Rent your holiday home</h1>
                <h1>How much can I earn?</h1>
                <h1>Trust and Safety </h1>
                <h1>How to join?</h1>
                <h1>FAQ</h1>
                <h1>Homeowner Blog</h1>
            </div>
            <div className="border-t-4 border-[#35448C] pt-5">
            <h1 className="text-black text-lg font-bold mb-5">Business & Support</h1>
            <h1>FAQ</h1>
            <h1>Customer Service</h1>
            <h1>My Belvilla</h1>
            <h1>Sitemap</h1>
            <h1>Affiliate Program</h1>
            <h1>Invite Friends</h1>
            <h1>Travel Agency Login</h1>
            
            </div>
            <div className="border-t-4 border-[#35448C] pt-5">
                <img className="mb-5" src="images/tursab.png"/>
                <img src="images/etbis.png"/>
            </div>
        </div>
        <hr className="sm:mb-6 mt-6 border border-[#8797ad]"/>
        <div class="flex sm:flex-row">
  <div class="basis-full sm:basis-1/2">
      <h1 className="text-lg mt-3">© Firma 2021 - 2022 The Firma name and logo are registered trademarks.</h1>
  </div>
  <div class="basis-1/4 hidden sm:flex mb-7 justify-end">
      <div className="flex items-center gap-2">
      <div className="w-11 h-11 bg-[#9D9D9D] rounded-full"/>
      <h1 className="underline">Language</h1>
      </div>
      <div className="flex items-center gap-2 ml-5">
      <div className="w-11 h-11 bg-[#9D9D9D] rounded-full"/>
      <h1 className="underline">EUR</h1>
      </div>
      </div>
  <div class="basis-1/4 hidden sm:flex gap-4 justify-end">
  
  <div className="w-11 h-11 bg-[#9D9D9D] rounded-full"/>
  <div className="w-11 h-11 bg-[#9D9D9D] rounded-full"/>
  <div className="w-11 h-11 bg-[#9D9D9D] rounded-full"/>
  </div>
</div>
       </div>
        </>
)
}
export default Footer