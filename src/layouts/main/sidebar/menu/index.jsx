import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/consts";
import NewTweet from "./new"
import More from "./more";
import { useAccount } from "../../../../store/auth/hooks";
export default function Menu() {
  const account = useAccount()
  return (
    <nav className="mt-0.5 mb-1" key={account.id}>
      {mainMenu.map((items, index) => (
        <NavLink to={typeof items.path === "function" ? items.path() : items.path } className="py-[0.188rem] block group" key={index}>
          {({ isActive }) => (
            <div
              className={classNames(
                " inline-flex  items-center p-3  transition-colors rounded-full gap-5  group-hover:bg-[color:var(--background-third)] ",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[1.641rem] h-[1.641rem] relative ">
                {items?.notification && (
                  <span className="flex items-center justify-center border border-[color:var(--background-primary)] text-[color:var(--background-primary)] bg-[color:var(--color-primary)] w-[1.125rem] h-[1.125rem] rounded-full absolute -top-1.5 -right-1 text-[0.688rem] ">
                    {items?.notification}
                  </span>
                )}

                {isActive && items.icon.active}
                {!isActive && items.icon.pasive}
              </div>
              <div className="pr-4 text-xl leading-5">{items.title} </div>
            </div>
          )}
        </NavLink>
      ))}
    <More/>
    <NewTweet/>
    
    </nav>
  );
}
