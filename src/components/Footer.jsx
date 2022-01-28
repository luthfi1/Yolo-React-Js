import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        display: "Tentang Yolo",
        path: "/about"
    },
    {
        display: "Hak Kekayaan Intelektual",
        path: "/about"
    },
    {
        display: "Karir",
        path: "/about"
    },
    {
        display: "Blog",
        path: "/about"
    },
    {
        display: "Bridestory",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Tagihan & Top Up",
        path: "/about"
    },
    {
        display: "Tukar Tambah Handphone",
        path: "/about"
    },
    {
        display: "Yolo COD",
        path: "/about"
    }
]
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                           Pembayaran & Nomor Telpon
                        </div>
                        <div className="footer__content">
                            <p>
                             Pembayaran <strong>Shopeepay,Dana,Ovo,I.saku,Gopay,Samsung Pay</strong>
                            </p>
                            <p>
                             E-money <strong>E-Toll Card, E-money Mandiri,Bca Flazz  </strong>
                            </p>
                            <p>
                                Nomor Telpon <strong>0123456789</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                          Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                          Beli
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) => (
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img src={logo} className="footer__logo" alt="" />
                            </Link>
                        </p>
                        <p>
                         Yolo adalah perusahaan teknologi Indonesia dengan misi mencapai.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    )
}

export default Footer
