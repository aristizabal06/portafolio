import { Link } from "react-router-dom"

import "./Menu.css"
export function Menu() {

    return (

        <>
            <nav class="navbar navbar-expand-lg manu ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/danielacastañedaaristizabal">
                    Daniela Castañeda Aristizabal
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/inicio">
                                Inicio
                            </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/danielacastañedaaristizabal">
                                Sobre mi
                            </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/proyectos">
                                Mis Proyectos
                            </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" aria-disabled="true" to="experiencia">
                                Mi Experiencia
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}