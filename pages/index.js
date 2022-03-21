
import Image from 'next/image'
import { XIcon } from '@heroicons/react/outline'
import { LocationMarkerIcon,CalendarIcon,UsersIcon } from '@heroicons/react/solid'

export default function Home() {
  return (<>
<div className="w-full">
    <div className="w-full h-100 bg-no-repeat overlay bg-cover">
   
<div className="flex flex-col md:flex-row">
<div className="grid grid-cols-1 w-full lg:w-6/12 gap-4 px-12 mt-2">
<div className="flex-none w-full px-2 sm:px-6 lg:px-12">
    <div className="w-72 h-60 flex flex-row-reverse justify-end p-4 text-white" style={{background:"transparent linear-gradient(180deg, #DB1D1D 0%, #DE3131E8 39%, #FFFFFF66 100%) 0% 0% no-repeat padding-box"}}>
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
  <div className="w-full">
    <h3 className="text-3xl lg:text-6xl font-semibold text-white lg:tracking-widest leading-tight">Muhteşem evlerden birini seç, tatilin tadını çıkart!</h3>
  </div>
  <div>
    <div className="w-full flex flex-row items-center rounded-full border-2 h-14 sm:h-24 border-white bg-transparent">
    <LocationMarkerIcon className="block h-8 w-16 text-white " aria-hidden="true" />
    <input type="text" className="w-11/12 h-full text-white text-2xl bg-transparent border-transparent focus:outline-none"  placeholder="Nereye Gidiyorsunuz?"/>
    </div>
  </div>
  <div>
    <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
    <CalendarIcon className="block h-8 w-16 text-white" aria-hidden="true" />
    <h1 className="text-white text-2xl bg-transparent border-transparent focus:outline-none"  placeholder="Nereye Gidiyorsunuz?"> {"Check-in > Check-out"} </h1>
    </div>
  </div>
  <div className="flex flex-row gap-3">
    <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
    <UsersIcon className="block h-8 w-16 text-white" aria-hidden="true" />
    <h1 className="text-white text-xl sm:text-2xl bg-transparent border-transparent focus:outline-none"  placeholder="Nereye Gidiyorsunuz?"> 2 Guests </h1>
    </div>
    <div className="w-full">
    <button className="text-blue-800 w-full rounded-full h-14 sm:h-24 text-2xl bg-white border-transparent border-2 border-white bg-white focus:outline-none">Search</button>
    </div>
  </div>
</div>
<div className="w-full lg:w-5/12 flex justify-end place-items-end">
<div className="grid grid-rows-4  gap-x-0 px-12 mt-20 hidden sm:hidden md:block">
<div className="flex-none w-full px-2 sm:px-6 lg:px-12 sm:my-5">
    <div className="w-80 h-32 flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-2xl text-black">London</h1>
            <h1 className="text-lg whitespace-nowrap text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    
  </div>
  <div className="flex-none w-full px-2 sm:px-6 lg:px-12 sm:my-5">
    <div className="w-80 h-32 flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-2xl text-black">London</h1>
            <h1 className="text-lg whitespace-nowrap text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    
  </div>
  <div className="flex-none w-full px-2 sm:px-6 lg:px-12 sm:my-5">
    <div className="w-80 h-32 flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-2xl text-black">London</h1>
            <h1 className="text-lg whitespace-nowrap text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    
  </div>
  <div className="flex-none w-full px-2 sm:px-6 lg:px-12 sm:my-5">
    <div className="w-80 h-32 flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-2xl text-black">London</h1>
            <h1 className="text-lg whitespace-nowrap text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    
  </div>

</div>
</div>
</div>
<div className="flex relative basis-full w-full justify-end pt-10 sm:pt-0 pr-10 pb-10">
      <div className="w-20 h-20 rounded-full flex justify-center items-center border-white border-2">
            <h1 className="text-lg text-white">WA</h1>
      </div>
  </div>
    </div>  
   
    </div>
    <div className="grid grid-cols-2  gap-2 block sm:hidden px-2 mt-4">
    <div className="w-full h-auto flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-xl text-black">London</h1>
            <h1 className="text-sm  text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    <div className="w-full h-auto flex flex-row-reverse rounded-md justify-end p-4 text-white bg-[#FBEAEB]">
          <div className="flex justify-end">
          <XIcon className="block h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <div className="flex flex-col pl-7">
            <div className="h-7 w-24 bg-black rounded-md text-center">
                <h1 className="text-sm mt-1">Recent Search</h1>
            </div>
            <h1 className="text-xl text-black">London</h1>
            <h1 className="text-sm  text-black">08 Nov - 18 Nov 2021 - 2 Guest</h1>
          </div>
    </div>
    </div>
    <div className="flex justify-center w-100">
     <hr className="mt-8 w-11/12 border border-[#707070] mb-8" /></div>
     <div className="flex flex-col sm:flex-row w-100 justify-between px-6 sm:px-20">
     <h3 className="text-2xl sm:text-3xl text-black">WHERE TO GO, THIS SUMMER ?!</h3>
     <h3 className="text-xl sm:text-3xl text-[#9D9D9D]">Select your destination to make your summer unforgettable</h3>
     
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-12 px-16 mb-12">
      <div className="hover:border-t-8 hover:border-sky-900 py-2">
        <img className="rounded-md" src="images/slider-1.png"/>
        <h3 className="text-2xl sm:text-4xl text-black mt-2">BAHAMAS</h3>
        <h3 className="text-md sm:text-lg text-black">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h3>
      </div>
      <div className="hover:border-t-8 hover:border-sky-900 py-2">
        <img className="rounded-md" src="images/slider-2.png"/>
        <h3 className="text-2xl sm:text-4xl text-black mt-2">ITALY</h3>
        <h3 className="text-md sm:text-lg text-black">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h3>
      </div>
      <div className="hover:border-t-8 hover:border-sky-900 py-2">
        <img className="rounded-md" src="images/slider-3.png"/>
        <h3 className="text-2xl sm:text-4xl text-black mt-2">DUBAI</h3>
        <h3 className="text-md sm:text-lg text-black">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h3>
      </div>
      <div className="hover:border-t-8 hover:border-sky-900 py-2">
        <img className="rounded-md" src="images/slider-4.png"/>
        <h3 className="text-2xl sm:text-4xl text-black mt-2">FRANCE</h3>
        <h3 className="text-md sm:text-lg text-black">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h3>
      </div>

</div>
     </>
  )
}
