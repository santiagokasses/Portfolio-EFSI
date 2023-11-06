import { useState, useEffect, useContext } from 'react'
import React from "react"
import { Link, Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Formik, Field, Form } from "formik"
import './Layout.css'
import { FavoritosContext } from "../Context/FavoritosContext"
import Badge from '@mui/material/Badge'

const Layout = () => {
    const { favoritos, setFavoritos } = useContext(FavoritosContext)
    return (
        <div className="layout-container">
            <Navbar expand="lg" className="bg-body-tertiary fixed-top">
                <Container>
                    <Navbar.Brand className="espacio">Santiago Kasses</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end">
                            <Link to={'/'} className='linkEstilo espacio'>Home</Link>
                            <Link to={'/InfoMia'} className='linkEstilo espacio'>Información Mia</Link>
                            <Link to={'/MisCreaciones'} className='linkEstilo espacio'>Mis Creaciones</Link>
                            <Badge badgeContent={favoritos.length} color="primary">
                                <Link to={'/Favoritos'} className='linkEstilo'>Favoritos</Link>
                            </Badge>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="content">
                <Outlet />
            </div>
            <footer>
                <div className='horizontal'>
                    <div className="responsiveSiteFooter__socialLinkWrapper col-6">
                        <h5 className="responsiveSiteFooter__heading">Mis redes sociales</h5>
                        <div className='horizontaldos'>
                            <div className='espacioFooter'>
                                <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.facebook.com/">
                                    <img alt="Facebook" src="https://s.gr-assets.com/assets/site_footer/footer_facebook-ea4ab848f8e86c5f5c98311bc9495a1b.svg" />
                                </a>
                                <p className='redPosicion'>Facebook</p>
                            </div>
                            <div className='espacioFooter'>
                                <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://twitter.com/">
                                    <img alt="Twitter" src="https://s.gr-assets.com/assets/site_footer/footer_twitter-126b3ee80481a763f7fccb06ca03053c.svg" />
                                </a>
                                <p className='redPosicion'>Twitter</p>
                            </div>

                            <div className='espacioFooter'>
                                <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.instagram.com/">
                                    <img alt="Instagram" src="https://s.gr-assets.com/assets/site_footer/footer_instagram-d59e3887020f12bcdb12e6c539579d85.svg" />
                                </a>
                                <p className='redPosicion'>Instagram</p>
                            </div>
                            <div className='espacioFooter'>
                                <a className="responsiveSiteFooter__socialLink hjgjuf" href="https://www.linkedin.com/">
                                    <img alt="LinkedIn" src="https://s.gr-assets.com/assets/site_footer/footer_linkedin-5b820f4703eff965672594ef4d10e33c.svg" />
                                </a>
                                <p className='redPosicion'>Likedin</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className='izquierda'>Contact Me</h5>
                        <Formik initialValues={{ name: "", email: "" }} onSubmit={async (values) => {
                                await new Promise((resolve) => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 2));}}>
                            <Form>
                                <Field name="name" type="text" />
                                <Field name="email" type="email" />
                                <button type="submit">Submit</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </footer>

        </div >
    )
}

export default Layout