import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../context/UserAuthContext";
import image2 from "../../assets/img/splash-auth-fr.png";
import  '../../styles/login.scss';
import "../../styles/logo.scss";



const PhoneSignUp = () => {
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const { setUpRecaptha } = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        if (number === "" || number === undefined)
            return toast.warning("Merci de rentrez un numéro valide!");
        try {
            const response = await setUpRecaptha(number);
            setResult(response);
            setFlag(true);
        } catch {
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            toast.success("Inscription réussie");
            console.log("Inscription réussie");
            navigate("/home");
        } catch (err) {
            toast.error("Code non valide !");
        }
    };

    return (
        <>
            <div className="h-screen flex">
                <div className="vue-portal-target"></div>
                <div className="font-sans bg-grey-300 relative overflow-hidden lg:flex w-7/12 justify-around items-center hidden ">
                    <div className="flex flex-col text-center">
                        <div className="container">
                            <h1>wonder trading</h1>
                            <div className="gradient"></div>
                        </div>
                        <h2 className="font-bold text-4 leading-snug mb-4">
                            Votre nouveau Bot Algo Trading
                            <br />
                            sur les marchés financiers.
                        </h2>
                        <p className="text-gray-700 leading-tight leading-relaxed block">
                            Aucune instalattion requise , tout est automatisé
                            <br />
                            avec des experts reconnus en investissement et trading
                            <br />
                            ainsi que une communauté d'investisseurs engagés.
                        </p>
                        <div className="w-5/12 pt-12 mx-auto">
                            <img src={image2} alt="hello" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-5/12 justify-center py-10 items-center bg-white ">
                    <div className="flex flex-col w-2/3 lg:w-1/2">
                        <div class="container-2 lg:hidden">
                            <h1>wonder trading</h1>
                            <div className="gradient">
                            </div>
                        </div>
                        <h2 className="font-bold text-center text-4 leading-snug mb-4">Connexion par Téléphone</h2>
                        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                                <PhoneInput
                                    defaultCountry="FR"
                                    value={number}
                                    onChange={setNumber}
                                    placeholder="Entrez votre Numéro"
                                />
                                <div id="recaptcha-container"></div>
                            </Form.Group>
                            <div className="button-right">
                                <Link to="/login">
                                    <Button variant="secondary">Annuler</Button>
                                </Link>
                                &nbsp;
                                <Button class="flex items-center justify-center w-full whitespace-nowrap rounded text-sm font-medium px-3 py-2 bg-blue-500  border-blue-500 text-white" type="submit" variant="primary">
                                    Envoyer Code OTP
                                </Button>
                            </div>
                        </Form>

                        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                            <Form.Group className="mb-3" controlId="formBasicOtp">
                                <Form.Control
                                    type="otp"
                                    placeholder="Entrez OTP"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </Form.Group>
                            <div className="button-right">
                                <Link to="/login">
                                    <Button variant="secondary">Annulez</Button>
                                </Link>
                                &nbsp;
                                <Button type="submit" variant="primary">
                                    Vérifiez
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhoneSignUp;