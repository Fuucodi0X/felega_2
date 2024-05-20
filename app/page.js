'use client'
import Quest from "@/components/quest"
import Menu from "@/components/menu"
import Link from "next/link"
import { useState } from "react"

const Home = () => {
  const {color_class, toggle} = useState(false)
  return (
    <>
    <div className="containers py-2  ">

    <div className="navbar bg-base-100">

    <div className="flex-1">
      <Menu/>
      logo
    </div>

  <div className="flex-none">
    <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Link href={"/profile"}>
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </Link>
          </div>
        </div>
    </div>
  </div>

</div>
      <div className="layer_above flex  gap-10 items-center text-center ">
        <div className="flex-1 flex justify-center items-center   flex-col" onClick={toggle}>
              <Link href={"/"} >
                <img src="/checkpoint.png" ></img>
                <p className={color_class?"text-white":"text-green-500"}>Check points</p>
              </Link>
          </div>

        <div className="flex-1 flex justify-center items-center flex-col" onClick={toggle}>
              <Link href={"/quest"} >
                <img src="/quest.png" ></img>
                <p className={!color_class?"text-white":"text-green-500"}>Quest</p>
                </Link>
          </div>
      </div>

      <div className="quest">
          <Quest img = "/checkpoint/adwa museum checkpoint thumbnail 1.png" title ="Adwa musium"/>
          <Quest img = "/checkpoint/adwa museum checkpoint thumbnail 1.png" title ="Adwa musium"/>
          <Quest img = "/checkpoint/adwa museum checkpoint thumbnail 1.png" title ="Adwa musium"/>
          <Quest img = "/checkpoint/adwa museum checkpoint thumbnail 1.png" title ="Adwa musium"/>
          <Quest img = "/checkpoint/adwa museum checkpoint thumbnail 1.png" title ="Adwa musium"/>
      </div>

    </div>
    </>
  )
}

export default Home
