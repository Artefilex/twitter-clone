import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Footer (){
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[color:var(--color-subbase)] text-[13px] leading-4">
        <Link to={"/"} className="hover:underline"> Hizmet Şartları </Link>
        <Link to={"/"} className="hover:underline"> Gizlilik Politikası </Link>
        <Link to={"/"} className="hover:underline"> Çerez Politikası </Link>
        <Link to={"/"} className="hover:underline"> Imprint </Link>
        <Link to={"/"} className="hover:underline"> Erişilebilirlik </Link>
        <Link to={"/"} className="hover:underline"> Reklam bilgisi </Link>
     <div className="w-full flex gap-2">
     <Popover className={"relative leading-4 inline-flex"} > 
            <Popover.Button className={"inline-flex items-end border-none outline-none"}> Daha fazla   <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg> </Popover.Button>
            <Popover.Panel className={"w-[150px] max-w-[384px] bg-[color:var(--background-secondary)] rounded-xl grid absolute bottom-0 right-0 shadow-box overflow-hidden "}> 
            <Link to={"/"} className="py-3 px-4 text-[color:var(--color-base)]  text-[15px] leading-5 font-bold hover:bg-[color:var(--background-third)] transition-colors "> Hakkında </Link>
            <Link to={"/"} className="py-3 px-4  text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-third)] transition-colors"> Durum  </Link>
            <Link to={"/"} className="py-3 px-4  text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-third)] transition-colors"> İşletmeler için X  </Link>
            <Link to={"/"} className="py-3 px-4  text-[color:var(--color-base)] text-[15px] leading-5 font-bold hover:bg-[color:var(--background-third)] transition-colors"> Geliştiriciler </Link>
            </Popover.Panel>
        </Popover>

     </div>
        <p > © 2023 X Artefilex </p>

        </footer>
    )
}