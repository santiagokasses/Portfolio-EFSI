import './Home.css'
import React from 'react'
import { useContext } from 'react';
import Titulo from './Titulo'
import Favorito from './Favorito'
import { CreacionesContext } from "../Context/CreacionesContext"

const Home = (props) => {
    const { creaciones, setCreaciones  } = useContext(CreacionesContext)

  return (
    <div className='bottom'>
        <section>
            <Titulo/>
        </section>
        {creaciones.slice(0, 6).map((creaciones) => 
            <section className='creacion' key={creaciones.id}>
                <div className='espacioCreacion rowHome'>
                    <div className='col-4'>
                        <p>● Proyecto {creaciones.id}</p>
                        <p className='tituloProyecto'><b>{creaciones.nombre}</b></p>
                        <p>{creaciones.descripcion}</p>
                        <p>Lenguaje: {creaciones.leguaje}</p>
                        <p>{creaciones.fecha}</p>
                        <a className='linkRepositorio' href={creaciones.respositorio} target="_blank">{creaciones.respositorio}</a>
                        <Favorito id={creaciones.id}/>
                    </div>
                    <div className='separacion'>
                        <img className='imagen' src={creaciones.imagen ? creaciones.imagen : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'}/>
                    </div>
                </div>
                
            </section>
        )}
    </div>
  )
}

export default Home