import React, { useState } from 'react'
import './Home.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useContext } from 'react'
import { FavoritosContext } from "../Context/FavoritosContext"
import { CreacionesContext } from "../Context/CreacionesContext"
import { UsuarioContext } from "../Context/UsuarioContext"
import Modal from 'react-bootstrap/Modal'

const Favoritos = (props) => {
    const { creaciones } = useContext(CreacionesContext)
    const { favoritos, setFavoritos } = useContext(FavoritosContext);
    const estaEnFavoritos = favoritos.some((element) => element.id === props.id)
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('')
    const [contrasenia, setContrasenia] = useState('')

    const handleClose = () => {
        setShowModal(false);
    }

    const accionBoton = async () => {
        if (usuario.mail != '' && usuario.contrasenia != '') {
            if (estaEnFavoritos) {
                const indice = favoritos.findIndex((element) => (element.id) === props.id)
                console.log(indice)
                const nuev = [...favoritos]
                nuev.splice(indice, 1)
                setFavoritos(nuev)
            }
            else {
                setFavoritos((favoritos) => [...favoritos, creaciones[props.id - 1]])
            }
        } else {
            setShowModal(true)
        }
    }

    
    const HandleSubmit = () => {
        setShowModal(false)
        setUsuario({
            mail: email,
            contrasenia: contrasenia
        })
    }

    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login in</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mail..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                 type="password"
                                 placeholder="Contraseña..."
                                 value={contrasenia}
                                 onChange={(e) => setContrasenia(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={HandleSubmit}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                <button className='estiloBoton' onClick={accionBoton}>{estaEnFavoritos ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
            </div>
        </div>
    )
}

export default Favoritos