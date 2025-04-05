import Home from "@containers/pages/Home"
import Contact from "@containers/pages/Contact"
import Missions from "@containers/pages/Missions"
import News from "@containers/pages/News"
import SolarSystem from "@containers/pages/SolarSystem"
import Technologies from "@containers/pages/Technologies"
import Timeline from "@containers/pages/Timeline"
import Login from "@containers/Login/Login"

const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/contact",
        end: true,
        component: Contact,
    },
    {
        path: "/missions",
        end: true,
        component: Missions,
    },
    {
        path: "/news",
        end: true,
        component: News,
    },
    {
        path: "/solar-system",
        end: true,
        component: SolarSystem,
    },
    {
        path: "/technologies",
        end: true,
        component: Technologies,
    },
    {
        path: "/timeline",
        end: true,
        component: Timeline,
    },
    {
        path: "/login",
        end: true,
        component: Login,
    },
]

export default routes
