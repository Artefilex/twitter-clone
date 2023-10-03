import { Popover ,Transition } from "@headlessui/react"
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
        <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
      
      </Popover.Button>
      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="transform  opacity-0"
        enterTo="transform  opacity-100"
        leave="transition duration-200 ease-out"
        leaveFrom="transform  opacity-100"
        leaveTo="transform  opacity-0"
      >
    <Popover.Panel className={"absolute bottom-[80px] w-[300px] py-3 left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl "}>
     {({close}) =>(
         <More close = {close}/>
     )}
    </Popover.Panel>

    </Transition>
        </Popover>
      
    </div>
    )
} 