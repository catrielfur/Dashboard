import React from 'react';
import image from '../assets/images/logo.png';
import { Link } from "react-router-dom";



function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - AUTOYA</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/listado-productos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Listado de Productos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Categorias">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Categorías</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Ultimo-producto">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Último producto en base de datos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Buscar-producto">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar por producto</span>
                    </Link>
                </li>

                 {/*<!-- Nav Item - Tables -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/Usuarios">
                    <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>

                
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/producto-por-ID">
                    <i className="fas fa-fw fa-folder"></i>
                        <span>Producto por ID</span>
                    </Link>
                </li> */}

             {/*    <!-- Nav Item - Tables -->}
                <li className="nav-item">
                    <Link className="nav-link" to="/Usuarios2">
                    <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios2</span>
                    </Link>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;