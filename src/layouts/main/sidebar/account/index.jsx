import { Popover } from "@headlessui/react"
import { useAccount } from "../../../../store/hooks"
import More from "./more"
export default function Account (){
    const acount = useAccount()
    return (
        <div className="mt-auto ">
        <Popover className={"relative"}>
      <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex items-center text-left outline-none">
        <img src={acount.avatar} alt="dddd" className="w-10 h-10  rounded-full " />
        <div className="mx-3 text-[15px] ">
        <span className="text-bold leading-[20px] "> {acount.fullName}</span>
         <span className="text-[#71767b] "> @{acount.username} </span>
        </div>
      </Popover.Button>
    <Popover.Panel className={"absolute bottom-full w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl "}>
        <More/>
    </Popover.Panel>
        </Popover>
      
    </div>
    )
} 