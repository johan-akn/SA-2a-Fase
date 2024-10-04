import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragoes from "../pages/Dragoes";
import Landing from "../pages/Landing";
import Cadastro from "../pages/Cadastro";

const router = createBrowserRouter([
    {path: "/", element: <Landing />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/contato", element: <Contato />},
    {path: "/cadastro", element: <Cadastro />},
])

export default router;
