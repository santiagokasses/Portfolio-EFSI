import './Home.css'
import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import Favorito from './Favorito'

const Favoritos = (props) => {
  const { favoritos, setFavoritos } = useContext(FavoritosContext)

  console.log('favoritos tiene: ', favoritos)

  return (
    <div className='margengrande bottom'>
      <h1>Tus favoritos</h1>
      {favoritos.length > 1 ? (
        favoritos.map((favoritos) =>
          <section className='creacion' key={favoritos.id}>
            <div className='espacioCreacion rowHome'>
              <div className='col-4'>
                <p>● Proyecto {favoritos.id}</p>
                <p className='tituloProyecto'><b>{favoritos.nombre}</b></p>
                <p>{favoritos.descripcion}</p>
                <p>Lenguaje: {favoritos.leguaje}</p>
                <p>{favoritos.fecha}</p>
                <a className='linkRepositorio' href={favoritos.respositorio} target="_blank">{favoritos.respositorio}</a>
                <Favorito id={favoritos.id} />
              </div>
              <div className='separacion'>
                <img className='imagen' src={favoritos.imagen ? favoritos.imagen : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} />
              </div>
            </div>
          </section>
        )) : favoritos.length === 1 ? (
          <>
            <section className='creacion'>
              <div className='espacioCreacion rowHome'>
                <div className='col-4'>
                  <p>● Proyecto {favoritos[0].id}</p>
                  <p className='tituloProyecto'><b>{favoritos[0].nombre}</b></p>
                  <p>{favoritos[0].descripcion}</p>
                  <p>Lenguaje: {favoritos[0].leguaje}</p>
                  <p>{favoritos[0].fecha}</p>
                  <a className='linkRepositorio' href={favoritos[0].respositorio} target="_blank">{favoritos[0].respositorio}</a>
                  <Favorito id={favoritos[0].id} />
                </div>
                <div className='separacion'>
                  <img className='imagen' src={favoritos[0].imagen ? favoritos[0].imagen : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} />
                </div>
              </div>
            </section>
          </>) : (
        <><h1>No hay elementos todavía</h1></>
      )
      }
    </div>
  )
}

export default Favoritos