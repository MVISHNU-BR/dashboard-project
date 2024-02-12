import Image from "next/image";
import React from "react";
import App from "./components/App";


export default function Home() {
  return (
    <main className="flex bg-gray-100">
      <header className="w-29 h-screen bg-primary text-white min-lg:hidden">

        <div className="flex justify-center items-baseline mx-auto pt-11">
          <Image src="/logo.svg" width={47.27} height={40} alt="N Banking" />
          <h2 className="px-0.5">Banking</h2>

        </div>
        <nav className="">
          <div className="ml-4 mt-11 space-y-8 ">
            <li className="flex items-center gap-3 bg-blue-600 rounded-l-lg px-3 h-12 ">
              <Image src="/dashboard.svg" width={30} height={30} alt="" />
              <a href="#">Dashboard</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/perfil.svg" width={30} height={30} alt="" />
              <a href="#">My Accounts</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/cards.svg" width={30} height={30} alt="" />
              <a href="#">My Cards</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/transfer.svg" width={30} height={30} alt="" />
              <a href="#">Fund Transfer</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/paper.svg" width={30} height={30} alt="" />
              <a href="#">Bill Payment</a>
            </li>
            <li className="flex items-center gap-3">
              <Image src="/settings.svg" width={30} height={30} alt="" />
              <a href="#">Settings</a>
            </li>
          </div>
        </nav>
      </header>

      <section className="w-full h-scren">

        <section className="h-19 w-full flex justify-between px-8 border-b-2 bg-white border-gray-200">
          <div className="flex items-center">
            <div className="flex items-end gap-3">

              <h2 className="text-2xl text-gray-900 font-bold">Good Morning</h2>
              <Image src="/sun.svg" width={35} height={22} alt="Sun Icon" />

            </div>
          </div>

          <div className="flex items-center gap-10">

            <div className="w-12 h-12 flex items-center justify-center bg-blurblue rounded-full">
              <Image className="" src="/bell.svg" width={24} height={24} alt="bell icon" />
              <span className="font-bold">3</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Image className="" src="/avatar.png" width={48} height={48} alt="User photo" />

              <h3 className="font-bold text-xl">Kathryn</h3>

              <Image src="/down-arrow.svg" width={24} height={24} alt="down arrow menu" />
            </div>
          </div>
        </section>

        <div className="flex w-full ">
          <div className="m-8 space-y-8">


            <div className="w-100 h-52 bg-white rounded-md">


              <div className="flex items-center justify-between p-6">
                <h3 className="font-bold text-xl">Balance</h3>
                <Image src="/more.svg" width={4} height={16} alt="more information" />
              </div>

              <div className="backgroundDiv"></div>

              <div className="mt-4 pl-6 space-y-6">
                <h2 className="font-bold text-4xl">$14,567.00 USD</h2>
                <p className="font-semibold text-base">Available</p>
              </div>

            </div>
            <div className=" h-64 bg-white rounded-md">

              <div className="flex justify-between px-4 py-4">
                <h2 className="font-bold text-xl">Favourite Transfers</h2>
                <span className="font-normal text-sm py-">See All</span>
              </div>

              <div className="space-y-7 px-6">
                <div className=" flex items-center py-3 pl-5 gap-4 border-2 border-gray/200 rounded-md">
                  <Image className="" src="/avatar2.png" width={48} height={48} alt="User photo" />
                  <span className="font-bold text-base">Kathryn Murphy</span>
                </div>
                <div className="flex items-center py-3 pl-5 gap-4 border-2 border-gray/200 rounded-md">
                  <Image className="" src="/avatar3.png" width={48} height={48} alt="User photo" />
                  <span className="font-bold text-base">Wade Warren</span>
                </div>

              </div>
            </div>
          </div>

          <div className="w-full h-105 mt-8 mr-8 p-6  bg-white rounded-md ">
            <div className="flex items-center justify-between p-4">
              <h3 className="font-bold text-base">Insights</h3>
              <Image src="/more.svg" width={4} height={16} alt="more information" />
            </div>
            <div className="flex justify-center">
              <App />
            </div>
          </div>
        </div>

        <div className="min-h-85 bg-white rounded-xl mx-8" >
            
            <div className="flex  justify-between px-6 py-4">
              <h3 className="font-bold text-xl">Transaction</h3>
              <Image src="/more.svg" width={4} height={16} alt="more information" />
            </div>

            <div className="">
              <table className="min-w-full ">
                <thead className="bg-white">
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
                <tbody className="bg-white rounded-xl">
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
