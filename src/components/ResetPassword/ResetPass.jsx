import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import "../../styles/login.scss";
import "../../styles/logo.scss";
import image2 from "../../assets/img/splash-auth-fr.png";

const ResetPass = () => {
  const [email, setEmail] = useState("");
  const { resetPassword } = useUserAuth();

  const HandleResetPass = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
    } catch{
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
            <br />
            <div>
              <h2 className="text-lg lg:text-xl text-gray-800 text-sm text-center">Réinitialisation du mot de passe</h2>
              <br />
              <Form onSubmit={HandleResetPass}>
                <label className="mb-2 font-medium text-gray-700 text-sm block">Email</label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="bg-grey-200"
                    type="email"
                    placeholder="gerard.dain@gmail.com"
                    onChange={(e) => setEmail(e.target.value)} required
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <button type="submit" className="flex items-center justify-center w-full whitespace-nowrap rounded text-sm font-medium px-3 py-2 bg-blue-500 border border-blue-500 hover:bg-blue-600 text-white">
                    Envoyer le lien de réinitialisation
                  </button>
                </div>
              </Form>
              <div className="p-4 m-2 text-center cursor-pointer mt-5 text-sm">
                Déjà membre Wonder Trading? <Link to="/login" className="text-blue-500 font-medium">Connectez-vous ici</Link>
                <div className="page-account__footer">
                  <p>2022 © Tous Droits réservés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
