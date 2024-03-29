'use client'
import Image from "next/image";
import App from "./components/App";
import Menu from "./components/Menu";

// function fechaAi() {
//   const menuElement = document.getElementById("menu");
//   if (menuElement) {
//     menuElement.classList.add("invisible");
//     menuElement.classList.remove("absolute");
//   }
// }

// function Menu() {
//   const menuElement = document.getElementById("menu");
//   if (menuElement) {
//     menuElement.classList.remove("invisible");
//     menuElement.classList.add("fixed");
//   }
// }

export default function Home() {
  return (
    <main className="flex bg-gray-100 font-Manrope">
      <header className="w-29 h-screen fixed bg-primary text-white invisible xl:visible z-10" id="menu" itemID="menu">
        <div className="">
          <span className="text-xl m-4 absolute mt-4 xl:invisible">x</span>
          <a href="#" className="flex justify-center items-baseline mx-auto pt-11">
            <Image src="/logo.svg" width={47.27} height={40} alt="N Banking" />
            <h2 className="px-0.5 text-sm md:text-base font-GilroyMedium">Banking</h2>
          </a>
        </div>
        <nav className="">
          <div className="ml-4 mt-11 space-y-6 ">
            <a href="#">
              <li className=" flex items-center gap-3 bg-blue-600  hover:bg-blue-400 rounded-l-lg px-3 h-12 text-sm md:text-base">
                <Image src="/dashboard.svg" width={30} height={30} alt="" />
                Dashboard
              </li>
            </a>
            <a href="#" className="block">
              <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                <Image src="/perfil.svg" width={30} height={30} alt="" />
                My Accounts
              </li>
            </a>
            <a href="#" className="block">
              <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                <Image src="/cards.svg" width={30} height={30} alt="" />
                My Cards
              </li>
            </a>
            <a href="#" className="block">
              <li className="flex items-center gap-3 text-sm md:text-base  hover:bg-blue-400 rounded-l-lg px-3 h-12">
                <Image src="/transfer.svg" width={30} height={30} alt="" />
                Fund Transfer
              </li>
            </a>
            <a href="#" className="block">
              <li className="flex items-center gap-3 text-sm md:text-base hover:bg-blue-400 rounded-l-lg px-3 h-12">
                <Image src="/paper.svg" width={30} height={30} alt="" />
                Bill Payment
              </li>
            </a>
            <a href="#" className="block  ">
              <li className="flex items-center gap-3 text-sm md:text-base hover:bg-blue-400 rounded-l-lg px-3 h-12">
                <Image src="/settings.svg" width={30} height={30} alt="" />
                Settings
              </li>
            </a>
          </div>
        </nav>
      </header>

      <section className="w-full h-scren xl:ml-29 ">

        <section className="h-19 w-full flex justify-between px-8 border-b-2 bg-white border-gray-200">
          <div className="flex items-center">
            <div className="flex items-end gap-3">
              <div className="xl:hidden">
                <Menu />
              </div>
              {/* <button onClick={Menu} className="visible xl:invisible">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
              </button> */}


              <h2 className="text-base text-gray-900 font-bold hidden md:block  md:text-2xl">Good Morning</h2>
              <Image className="cursor-pointer" src="/sun.svg" width={35} height={22} alt="Sun Icon" />

            </div>
          </div>

          <div className="flex items-center gap-10">

            <div className="w-12 h-12 flex items-center justify-center cursor-pointer bg-blurblue rounded-full hover:bg-blue-100">
              <Image className="" src="/bell.svg" width={24} height={24} alt="bell icon" />
              <span className="font-bold text-red-500 animate-pulse">3</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Image className="hidden md:block" src="/avatar.png" width={48} height={48} alt="User photo" />

              <h3 className="font-bold text-base md:text-xl hidden md:block">Kathryn</h3>

              <Image className="cursor-pointer" src="/down-arrow.svg" width={24} height={24} alt="down arrow menu" />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap lg:flex-nowrap w-full lg:mt-8">

          <div className="m-8 space-y-8 w-full md:w-full lg:w-100">


            <div className="w-full md:min-w-100 h-52 bg-white rounded-md">


              <div className="flex items-center justify-between p-6">
                <h3 className="font-bold text-base md:text-xl">Balance</h3>
                <a href="#" className="p-1">
                  <Image className="" src="/more.svg" width={4} height={16} alt="more information" />
                </a>
              </div>

              <div className="backgroundDiv"></div>

              <div className="mt-4 pl-6 space-y-6">
                <h2 className="font-bold text-xl md:text-3xl lg:text-4xl">$14,567.00 USD</h2>
                <p className="font-semibold text-base">Available</p>
              </div>

            </div>
            <div className="w-full md:min-w-100 h-64 bg-white rounded-md">

              <div className="flex justify-between px-4 py-4">
                <h2 className="font-bold text-base   lg:text-xl">Favourite Transfers</h2>

                <a href="#" className="font-normal text-sm md:text-base">See All</a>
              </div>

              <div className="space-y-7 px-6">
                <div className=" flex items-center py-3 pl-5 gap-4 border-2 border-gray/200 rounded-md">
                  <Image className="" src="/avatar2.png" width={48} height={48} alt="User photo" />
                  <span className="font-bold text-sm md:text-base">Kathryn Murphy</span>
                </div>
                <div className="flex items-center py-3 pl-5 gap-4 border-2 border-gray/200 rounded-md">
                  <Image className="" src="/avatar3.png" width={48} height={48} alt="User photo" />
                  <span className="font-bold text-sm md:text-base">Wade Warren</span>
                </div>

              </div>
            </div>
          </div>

          <div className="w-full h-105 mt-8 mr-8 mb-8 p-6 ml-8 bg-white rounded-md lg:ml-0 lg-mb-0 ">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-bold sm:text-sm md:text-base">Insights</h3>
              <a href="#" className="p-1">
                <Image className="" src="/more.svg" width={4} height={16} alt="more information" />
              </a>
            </div>
            <div className="z-0">
              <App />
            </div>
          </div>
        </div>

        <div className="min-h-85 bg-white rounded-xl mx-8" >

          <div className="flex  justify-between items-end px-6 py-4">
            <h3 className="font-bold text-base md:text-xl">Transaction</h3>
            <a href="#" className="p-1">
              <Image className="" src="/more.svg" width={4} height={16} alt="more information" />
            </a>
          </div>

          <div className="overflow-auto box-border mb-8 rounded-xl">
            <table className="min-w-full overflow-x-auto">
              <thead className="bg-white overflow-x-visible">
                <tr className="border-2 m-8 flex items-center justify-between rounded-xl">
                  <td scope="col" className="pl-12 py-3 text-left text-base font-semibold text-gray-800 ">
                    Name
                  </td>
                  <td scope="col" className="pl-28 py-3 text-left text-base font-semibold text-gray-800 ">
                    ID
                  </td>
                  <td scope="col" className="pl-12 py-3 text-left text-base font-semibold text-gray-800 ">
                    Status
                  </td>
                  <td scope="col" className="px-12 py-3 text-left text-base font-semibold text-gray-800 ">
                    Amount
                  </td>
                  <td scope="col" className="pr-12 py-3 text-left text-base font-semibold text-gray-800 ">
                    Date
                  </td>
                </tr>
              </thead>
              <tbody className="bg-white rounded-xl overflow-visible">
                <tr className="flex justify-between items-center border-2 mx-8 mb-4 rounded-xl">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image className="" src="/avatar4.png" width={48} height={48} alt="User photo" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-base text-gray-800">Jenny Wilson</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-base text-gray-800 whitespace-nowrap">
                    <span className="">245689</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">Complete</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">+$455,00</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">20 Dec 2022</span>
                  </td>
                </tr>
                <tr className="flex justify-between items-center border-2 mx-8 mb-4 rounded-xl">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image className="" src="/avatar5.png" width={48} height={48} alt="User photo" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-base text-gray-800">Robert Fox</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-base text-gray-800 whitespace-nowrap">
                    <span className="">245689</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">Complete</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">+$455,00</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">20 Dec 2022</span>
                  </td>
                </tr>

                <tr className="flex justify-between items-center border-2 mx-8 mb-4 rounded-xl">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image className="" src="/avatar6.png" width={48} height={48} alt="User photo" />
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-base text-gray-800">Jacob Jones</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-base text-gray-800 whitespace-nowrap">
                    <span className="">245689</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-base leading-5 font-semibold rounded-full bg-green-100 text-green-800">Complete</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">+$455,00</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap ">
                    <span className="text-base font-semibold text-gray-800">20 Dec 2022</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
