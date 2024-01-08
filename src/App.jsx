import { useState } from "react"
import data from "../data.json"

export default function App() {
  const [infors] = useState(data);

  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="flex flex-inline p-4">
        {/*result*/}
        <section className="flex flex-col gap-4 w-72 h-auto p-4 items-center justify-center bg-gradient-to-r from-Light-royal-blue rounded-lg  to-Light-slate-blue">
          <h1 className="text-gray-300 font-bold text-xl">Your result</h1>
          <div className="bg-violet-800 w-32 h-32 flex flex-col items-center justify-center my-5 rounded-full">
            <h1 className="font-semibold text-4xl text-White">76</h1>
            <span className="text-gray-500">of 100</span>
          </div>
          <h1 className="text-gray-300 font-bold text-2xl">Great</h1>
          <p className="text-white text-center px-4">You scored higher than 65% of the people who have taken these tests</p>
        </section>
        {/**summary */}
        <section className="flex flex-col w-72 h-auto p-4 shadow-lg">
          <h1 className="text-xl font-bold">Summary</h1>
          {infors.map((infor) => {
            return (
              <div className="flex justify-between p-2 rounded-lg my-4" 
              style={{backgroundColor: `${infor.bg}30`}}>
                <div className="flex flex-none gap-4">
                  <img src={infor.icon} alt="" />
                  <span>{infor.category}</span>
                </div>
                <span className="">{infor.score}/100</span>
              </div>
            )

          })}
          <button className=" bg-Dark-gray-blue p-2 rounded-xl hover:bg-Light-lavender">Continue</button>

        </section>
      </div>

    </main>
  )
}