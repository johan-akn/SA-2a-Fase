import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Adotar from "../pages/Adotar";
import Dragoes from "../pages/Dragoes";
import Landing from "../pages/Landing";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";
import Inicial from "../pages/Inicial";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
    {path: "/", element: <Landing />},
    {path: "/home", element: <Inicial />},
    {path: "/contato", element: <Contato />},
    {path: "/adotar", element: <Adotar />},
    {path: "/contato", element: <Contato />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/login", element: <Login />},
    {path: "/perfil", element: <Perfil/>},
    // {path: "/generica", element: <Generica />},
    // {path: "/dragoes", element: <Dragoes />},
])

export default router;
