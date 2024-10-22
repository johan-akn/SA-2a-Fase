import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragoes from "../pages/Dragoes";
import Landing from "../pages/Landing";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Inicial from "../pages/Inicial";

const router = createBrowserRouter([
    {path: "/", element: <Landing />},
    {path: "/home", element: <Inicial />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/dragoes", element: <Dragoes />},
    {path: "/contato", element: <Contato />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
])

export default router;
