import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home"
import Notification from "../pages/notifications"
import Explore from "../pages/explore/"
import MainLayout from "../layouts/main"
import NotFound from "../pages/not-found"
import Profile from "../pages/profile"
import Messages from "../pages/messages"
import Lists from "../pages/lists"
import Bookmarks from "../pages/bookmarks"
import Premium from "../pages/premium"
const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
              index: true,
              element: <Home/>           
             },
            {
                path: "explore",
                element:  <Explore/>
            },
            {
                path: "notifications",
                element:<Notification/>
            },
            {
                path: "messages",
                element: <Messages/>,
            },
            {
                path: "lists",
                element: <Lists/>
            },
            {
                path: "i/verified-choose",
                element: <Premium/>

            },
            {
                path: "bookmarks",
                element: <Bookmarks/>,
            },
            {
                path: ":username",
                element: <Profile/>,
            },
            {
                path: "*",
                element :<NotFound/>
            }
         

        ]
    },
])

export default routes