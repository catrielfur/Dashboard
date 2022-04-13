import React from 'react';
import imagenFondo from '../assets/images/Ram.jpg';

function LastMovieInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Ram "/>
                    </div>
                    <p>Motor 5.7L V8 HEMI MDS VVT. 16 Válvulas / 395 CV de Potencia / 550 N-m Torque Caja automática de 8 velocidades. Capacidad de remolque: 4492 Kg.</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
