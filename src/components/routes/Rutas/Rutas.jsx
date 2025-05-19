import {Home} from "../../pages/Home/Home"
import {Historia} from "../../pages/Historia/Historia"
import {Introduccion} from "../../pages/Introduccion/Introduccion"
import {Experiencia} from "../../pages/Experiencia/Experiencia"

import { Menu } from "../../common/Menu/Menu"

import { Routes, Route } from "react-router-dom"

export function Rutas(){

    return(

        <>

          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Introduccion/>}></Route>
            <Route path="/inicio" element={<Home/>}></Route>
            <Route path="/proyectos" element={<Historia/>}></Route>
            <Route path="/danielacastañedaaristizabal" element={<Introduccion/>}></Route>
            <Route path="/experiencia" element={<Experiencia/>}></Route>
          </Routes>
          
        </>
    )
}