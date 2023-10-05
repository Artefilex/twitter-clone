
import SidebarSection from "../../../../componet/sidebar-section";
import UserCard from "../../../../componet/user-card";
import { whoFollowUsers } from "../../../../mock";
import {useAccount} from "../../../../store/auth/hooks"
export default function WhoFollow () {
    const account = useAccount()
  return(
    <SidebarSection title="Kimi takip etmeli" 
    more={`/connect_people?user_id=${account.id}`} >
     {whoFollowUsers.map((user,index) => <UserCard user={user} key={index}/> )}
    </SidebarSection>
  )}