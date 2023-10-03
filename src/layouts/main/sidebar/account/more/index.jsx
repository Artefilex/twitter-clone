import { useAccounts } from "../../../../../store/hooks"

export default function More(){
    const acounts = useAccounts()
    return(
        <div>
          {
            acounts.map()
          }
        </div>
    )
}