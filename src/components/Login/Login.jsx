import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import GoogleButton from "react-google-button";
import {
  VisibilityOff,
  Visibility,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useUserAuth } from "../../context/UserAuthContext";
import image2 from "../../assets/img/splash-auth-fr.png";
import { auth } from "../../firebase";
import "../../styles/login.scss";
import "./login.scss";

const Login = ({ passwordRef, id = "password", label = "password" }) => {
  /////////////*/ SET USER LOGIN //*////////

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn, googleSignIn, sigInWithFacebook } = useUserAuth();
  const navigate = useNavigate();

  /////////////*Validation Form*///////////
  const [validated, setValidated] = useState(false);

  /*/////////VISIBILITY PASSWORD*/ ///////

  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  /*///////////////////////*/ ///////////
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    if (form.checkValidity() || auth === false) {
      await logIn();
      setLoading(false);
    }
    setValidated(true);
    setLoading(false);
  };

  const handleFacebookSignIn = (e) => {
    e.preventDefault();
    try {
      sigInWithFacebook();
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    try {
      googleSignIn();
      console.log(googleSignIn);
    } catch (err) {
      console.log(err.message);
    }
  };
  const ReturnHome = () => {
    navigate("/");
  };

  const styles = {
    border: "1px solid",
    width: "40%",
    color: "gray",
    opacity: "0.2",
  };

  return (
    <>
      <div className="h-screen flex">
        <div className="vue-portal-target"></div>
        <div className="font-sans bg-grey-300 relative  lg:flex w-7/12 justify-around items-center hidden ">
          <div className="flex flex-col text-center">
            <div class="container">
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
            <div className="container-2 lg:hidden">
              <h1>wonder trading</h1>
              <div className="gradient"></div>
            </div>
            <br />
            <h2 className="font-sans text-center font-bold text-2xl mb-1">
              Connectez-vous
              <KeyboardArrowUpOutlined className="back" onClick={ReturnHome} />
            </h2>
            <Form
              noValidate
              validated={validated}
              className="form"
              onSubmit={handleSubmit}
            >
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Email
              </label>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control
                  className="bg-grey-200"
                  type="email"
                  placeholder="Votre Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="feedback">
                  Email valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Cela doit être un email valide !
                </Form.Control.Feedback>
              </Form.Group>
              <div className="flex justify-between">
                <label className="mb-2 font-medium text-gray-700 text-sm block">
                  Mot de passe
                </label>
                <Link to="/resetpassword">
                  <span className="text-xs text-gray-500">
                    Mot de passe oublié ?
                  </span>
                </Link>
              </div>
              <Form.Group>
                <span className="babySide">
                  <Form.Control
                    id={id}
                    label={label}
                    type={showPassword ? "text" : "password"}
                    inputref={passwordRef}
                    className="bg-grey-200"
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                    required
                  />
                  <IconButton
                    className="IconVisibility"
                    aria-label="Toggle Password visibility"
                    onClick={handleClick}
                    onMouseDown={handleMouseDown}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                  </IconButton>
              
                </span>

                <Form.Control.Feedback className="feedback" type="invalid">
                  Le mot de passe doit être composé de 8 à 20 caractères et
                  inclure au moins 1 lettre, 1 chiffre et 1 caractère spécial !
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-grid gap-2 ">
                <button
                  disabled={!email || !password}
                  type="submit"
                  className="flex items-center justify-center w-full whitespace-nowrap rounded text-sm font-medium px-2 py-2 bg-blue-500  border-blue-500 text-white"
                >
                  {loading ? "Please Waiting..." : "Se connecter"}
                </button>
              </div>
            </Form>

            <div className=" mt-4 flex items-center justify-between py-4">
              <span style={styles} />
              <a
                href="/"
                className=" hoov text-sm text-center text-gray-800 uppercase font-bold"
              >
                OU
              </a>
              <span style={styles} />
            </div>

            <div>
              <GoogleButton
                className="g-btn text-gray-600 text-center font-medium text-sm"
                type="light"
                label="Continuer avec Google"
                onClick={handleGoogleSignIn}
              ></GoogleButton>
            </div>
            <div>
              <FacebookLoginButton onClick={handleFacebookSignIn}>
                <h2 className="text-white  text-sm text-center font-medium  ">
                  Continuer avec Facebook
                </h2>
              </FacebookLoginButton>
            </div>
            <Link to="/phonesignup">
              <div className="d-grid gap-2">
                <button
                  variant="success"
                  type="Submit"
                  className="flex items-center justify-center w-full whitespace-nowrap rounded text-sm font-medium px-3 py-2 bg-blue-500  border-blue-500 text-white"
                >
                  Se connecter avec Phone
                </button>
              </div>
            </Link>
            <div className="text-center cursor-pointer mt-5 text-sm">
              Pas encore sur Wonder Trading ?
              <Link to="/register" className="text-blue-500 font-medium">
                Créez votre compte
              </Link>
            </div>
            <div className="text-center page-account__footer">
              <p>2022 © Tous Droits réservés</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
