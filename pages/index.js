
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
    <input type="text" className="w-11/12 h-full text-white heroText text-2xl bg-transparent border-transparent focus:outline-none"  placeholder="Nereye Gidiyorsunuz?"/>
    </div>
  </div>
  <div>
    <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
    <CalendarIcon className="block h-8 w-16 text-white" aria-hidden="true" />
    <h1 className="text-white text-2xl  bg-transparent border-transparent focus:outline-none"> {"Check-in > Check-out"} </h1>
    </div>
  </div>
  <div className="flex flex-row gap-3">
    <div className="w-full flex flex-row items-center rounded-full h-14 sm:h-24 border-2 border-white bg-transparent">
    <UsersIcon className="block h-8 w-16 text-white" aria-hidden="true" />
    <h1 className="text-white text-xl sm:text-2xl bg-transparent border-transparent focus:outline-none" > 2 Guests </h1>
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
     <div className="px-12 mt-10 pt-10 mb-16">
      <h1 className="text-4xl font-bold text-black  tracking-wide">WHERE TO GO, THIS SUMMER ?!</h1>
      <h1 className="text-[#9D9D9D] w-3/6 mt-2 mb-12">Select your destination to make your summer unforgettable for you</h1>
 
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/slider-1.png"/>
        <h1 className="text-2xl font-bold">BAHAMAS</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/slider-2.png"/>
        <h1 className="text-2xl font-bold">ITALY</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/slider-3.png"/>
        <h1 className="text-2xl font-bold">DUBAI</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/slider-4.png"/>
        <h1 className="text-2xl font-bold">FRANCE</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      </div>


    </div>
<div className="w-full bg-[#fbeaeb] pb-10">
<div className="grid grid-cols-1 flex justify-center justify-items-center sm:grid-cols-4 gap-4  p-12">
          <div className="flex flex-col">
            <div className="flex  mb-2 p-5">
            <h1 className="text-3xl text-black font-bold">SADECE GÜZEL DEGIL, EN IYILERI GOSTERIYORUZ</h1>
            </div>
            <hr className="border-b-8 border-blue-900 w-6/12 ml-5" />
            <h1 className="text-lg text-black p-5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatteLorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatteLorem ipsum sit amet dolor velle est posse indum.</h1>
          </div>
          <div>
            <img className="rounded-mg" src="images/cart2.png"/>
            <h1 className="text-2xl font-bold">MARMARIS OTEL</h1>
            <h1 className="text-md text-[#9D9D9D]">TURKIYE, MUGLA</h1>
            <h1 className="text-md text-[#9D9D9D]">FROM</h1>
            <h1 className="text-xl text-black">$ 68, per night</h1>
            
          </div>
          <div>
          <img className="rounded-mg" src="images/cart3.png"/>
          <h1 className="text-2xl font-bold">MARMARIS OTEL</h1>
            <h1 className="text-md text-[#9D9D9D]">TURKIYE, MUGLA</h1>
            <h1 className="text-md text-[#9D9D9D]">FROM</h1>
            <h1 className="text-xl text-black">$ 68, per night</h1>
          </div>
          <div>
          <img className="rounded-mg" src="images/cart4.png"/>
          <h1 className="text-2xl font-bold">MARMARIS OTEL</h1>
            <h1 className="text-md text-[#9D9D9D]">TURKIYE, MUGLA</h1>
            <h1 className="text-md text-[#9D9D9D]">FROM</h1>
            <h1 className="text-xl text-black">$ 68, per night</h1>
          </div>
      </div>
      <div className="flex justify-between">
      <h1 className="text-4xl font-bold text-black px-12 tracking-widest">POPULAR LOCATIONS</h1>
      <h1 className="px-12 text-[#9D9D9D]">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatteLorem ipsum sit amet </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 px-12 mt-6">
        <div className="bg-[#2f3c7e] rounded-md p-6">
          <h1 className="text-red-700 font-bold text-xl underline">Trending</h1>
          <h1 className="text-white  text-xl ">Muğla, Turkey</h1>
          <h1 className="text-white  text-xl ">1284 views</h1>
          </div>
          <div className="bg-[#2f3c7e] rounded-md p-6">
          <h1 className="text-red-700 font-bold text-xl underline">Trending</h1>
          <h1 className="text-white  text-xl ">Muğla, Turkey</h1>
          <h1 className="text-white  text-xl ">1284 views</h1>
          </div>
          <div className="bg-[#2f3c7e] rounded-md p-6">
          <h1 className="text-red-700 font-bold text-xl underline">Trending</h1>
          <h1 className="text-white  text-xl ">Muğla, Turkey</h1>
          <h1 className="text-white  text-xl ">1284 views</h1>
          </div>
          <div className="bg-[#2f3c7e] rounded-md p-6">
          <h1 className="text-red-700 font-bold text-xl underline">Trending</h1>
          <h1 className="text-white  text-xl ">Muğla, Turkey</h1>
          <h1 className="text-white  text-xl ">1284 views</h1>
          </div>
          <div className="bg-[#2f3c7e] hidden sm:block rounded-md p-6">
          <h1 className="text-red-700 font-bold text-xl underline">Trending</h1>
          <h1 className="text-white  text-xl ">Muğla, Turkey</h1>
          <h1 className="text-white  text-xl ">1284 views</h1>
          </div>
         </div>
    </div>
    <div className="px-12 mt-10 pt-10 mb-16">
      <h1 className="text-4xl font-bold text-black  tracking-wide">LOREM IPSUM SIT AMET DOLOR VELLE EST POSSE.</h1>
      <h1 className="text-[#9D9D9D] w-3/6 mt-2 mb-12">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatteLorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatteLorem ipsum sit amet dolor velle est posse indum.</h1>
 
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart1.png"/>
        <h1 className="text-2xl font-bold">ITALY</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart5.png"/>
        <h1 className="text-2xl font-bold">DUBAI</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart6.png"/>
        <h1 className="text-2xl font-bold">FRANCE</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      </div>
      <div className="mt-12 flex justify-between">
        <h1 className="font-bold text-4xl mb-12">STILL CONFUSED? CHECK OUR OFFERS.</h1>
        <h1 className="px-12 text-[#9D9D9D]">Select your destination to make your summer unforgettable</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div className="bg-[#FBEAEB] p-8">
            <h1 className="text-2xl text-[#2F3C7E] font-bold">FISHING SEASON IN NORWAY</h1>
            <h1 className="text-[#2F3C7E] font-medium w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
          </div>
          <div className="bg-[#FBEAEB] p-8">
            <h1 className="text-2xl text-[#2F3C7E] font-bold">WINTER TRAVEL IN NORWAY</h1>
            <h1 className="text-[#2F3C7E] font-medium w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
          </div>
          <div className="bg-[#FBEAEB] p-8">
            <h1 className="text-2xl text-[#2F3C7E] font-bold">NOEL IN NORWAY</h1>
            <h1 className="text-[#2F3C7E] font-medium w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
          </div>
        </div>

    </div>
    <div className="bg-[#F8F8F8] hidden sm:block px-12">
      <div className="grid sm:grid-cols-4 gap-4 py-16">
        <div className="flex">
          <div className="rounded-full w-14 h-14 bg-[#2F3C7E]"/>
          <div className="ml-8">
            <h1 className="font-bold text-xl">40 years of experience</h1>
            <h1 className="text-xs">….. is your holiday home specialist</h1>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full w-14 h-14 bg-[#2F3C7E]"/>
          <div className="ml-8">
            <h1 className="font-bold text-xl">Average rating of 4+</h1>
            <h1 className="text-xs">Proven by awards & great reviews</h1>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full w-14 h-14 bg-[#2F3C7E]"/>
          <div className="ml-8">
            <h1 className="font-bold text-xl">40k+ homes in Europe</h1>
            <h1 className="text-xs">Beautiful and unique holiday homes</h1>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-full w-14 h-14 bg-[#2F3C7E]"/>
          <div className="ml-8">
            <h1 className="font-bold text-xl">2.8 million guests in 2020</h1>
            <h1 className="text-xs">We offer you a memorable experience</h1>
          </div>
        </div>
        
      </div>
    </div>
    <div className="px-12 mt-10 pt-10 mb-16">
      <div className="flex justify-between mb-12">
      <h1 className="text-4xl  font-bold text-black tracking-wide">SEYAHAT BLOGGERLARINDAN TAVSIYELER</h1>
      <h1 className="text-[#9D9D9D] mt-2">Select your destination to make your summer unforgettable</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart7.png"/>
        <h1 className="text-2xl font-bold">NORFOLK</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart8.png"/>
        <h1 className="text-2xl font-bold">LA QUINTA</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart9.png"/>
        <h1 className="text-2xl font-bold">STROUD</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      <div className="hover:border-t-8 hover:border-[#35448C] py-2">
        <img className="rounded-md w-full mb-5" src="images/cart10.png"/>
        <h1 className="text-2xl font-bold">SAN BERNARDO</h1>
        <h1 className="w-3/5">Lorem ipsum sit amet dolor velle est posse indum ingot lorem ipsum tatte.</h1>
      </div>
      </div>
      </div>
      <div className="px-12">
        <div className="flex justify-center sm:flex sm:justify-start">
      <h1 className="mt-12 text-xl font-bold">OTHER, MUST SEEN PLACES</h1>
      <h1 className="mt-12 text-xl font-bold mb-3">ITALY</h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
      <div>
        <h1>Aspen</h1>
        <h1>Breckenridge</h1>
        <h1>Coachella</h1>
        <h1>Hudson Valley</h1>
      </div>
      <div>
        <h1>Joshua Tree   </h1>
        <h1>Lake Tahoe</h1>
        <h1>North Lake Tahoe</h1>
        <h1>Palm Springs</h1>
      </div>
      <div>
        <h1>San Diego</h1>
        <h1>South Lake Tahoe</h1>
        <h1>Steamboat Springs</h1>
        <h1>Tahoe city</h1>
      </div>
      <div>
        <h1>Telluride</h1>
        <h1>The Hamptons</h1>
        <h1>Vail</h1>
      </div>
      </div>
      </div>

      <div className="px-12 mb-12">
      <h1 className="mt-12 text-xl font-bold">ALL PLACES</h1>
      <h1 className="mt-12 text-xl font-bold mb-3">ITALY</h1>
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-10 sm:gap-4">
      <div>
        <h1>Aspen</h1>
        <h1>Breckenridge</h1>
        <h1>Coachella</h1>
        <h1>Hudson Valley</h1>
      </div>
      <div>
        <h1>Joshua Tree   </h1>
        <h1>Lake Tahoe</h1>
        <h1>North Lake Tahoe</h1>
        <h1>Palm Springs</h1>
      </div>
      <div>
        <h1>San Diego</h1>
        <h1>South Lake Tahoe</h1>
        <h1>Steamboat Springs</h1>
        <h1>Tahoe city</h1>
      </div>
      <div>
        <h1>Telluride</h1>
        <h1>The Hamptons</h1>
        <h1>Vail</h1>
      </div>
      </div>
      </div>
      <div className="bg-[#C5FAD5] pb-16">
        <div className="flex justify-center flex-col items-center pt-10">
        <h1 className="font-semibold text-xl mb-5">Sign Up, we will send the best deals to you!</h1>
        <div className="w-full flex items-center justify-center ">
          <div className="bg-white flex  flex-row-reverse w-3/6 h-14 rounded-md">
        <button type="button" className="rounded-md bg-black text-white w-2/5">Subscribe</button>
          <input className="w-full bg-transparent focus:outline-none pl-3" type="text" placeholder="Enter your mail address, here."/>
          </div>
        </div>
        </div>
      </div>
     </>
  )
}
