import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Form } from "react-bootstrap";
import "../../styles/login.scss";
import image2 from "../../assets/img/splash-auth-fr.png";
import { auth } from "../../firebase";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [user, setUsers] = useState([]);
  const [pseudo, setPseudo] = useState("");
  const [prenom, setPrenom] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [password, setPassword] = useState("");
  /*Validation Form*/
  const [validated, setValidated] = useState(false);
  // Set Register a Photo Profile //////////////////////////////////
  const [photoURL] = useState(
    "https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"
  );
  /*///// FONCTION REGISTER*/
  const { signUp } = useUserAuth();
  /*/COLLECTION STORAGE DB*/
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    try {
      if (form.checkValidity() && auth === false) {
        const res = await signUp(email, password);
        await setDoc(doc(db, "users", res.user.uid),{
          email: email,
          pseudo: pseudo,
          prenom: prenom,
          name: name,
          number: number,
          photoURL: photoURL,
          timestamp: serverTimestamp(),
        });
      }
    } catch (error) {}
    setValidated(true);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(doc(db, "users"));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

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
              <div className="gradient"></div>
            </div>
            <h2 className="font-sans font-bold text-center text-2xl mb-6">
              Créer un compte
            </h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Pseudo
              </label>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Control
                  className="bg-grey-200"
                  type="name"
                  placeholder="Entrez votre Pseudo"
                  pattern="[A-Za-z0-9]{3,16}"
                  onChange={(e) => setPseudo(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="feedback">
                  Pseudo valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Le nom d'utilisateur doit être composé de 3 à 16 caractères et
                  ne doit comporter aucun caractère spécial !
                </Form.Control.Feedback>
              </Form.Group>
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Email
              </label>
              <Form.Group className="mb-3" controlId="validationCustom02">
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
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Prénom
              </label>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Control
                  className="bg-grey-200"
                  type="name"
                  pattern="[A-Za-z0-9]{3,16}"
                  placeholder="Entrez votre Prénom"
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="feedback">
                  Prénom valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Cela doit être un prénom valide !
                </Form.Control.Feedback>
              </Form.Group>
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Nom
              </label>
              <Form.Group className="mb-3" controlId="validationCustom04">
                <Form.Control
                  className="bg-grey-200"
                  type="name"
                  pattern="[A-Za-z0-9]{3,16}"
                  placeholder="Entrez votre Nom"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Form.Control.Feedback className="feedback">
                  Nom valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Cela doit être un nom valide !
                </Form.Control.Feedback>{" "}
              </Form.Group>
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Téléphone
              </label>
              <Form.Group className="mb-3" controlId="validationCustom05">
                <PhoneInput
                  className="bg-grey-200"
                  defaultCountry="FR"
                  value={number}
                  onChange={setNumber}
                  required
                  placeholder="Entrez votre Numéro"
                />
                <Form.Control.Feedback className="feedback">
                  Numéro valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Cela doit être un numéro valide !
                </Form.Control.Feedback>
              </Form.Group>
              <label className="mb-2 font-medium text-gray-700 text-sm block">
                Mot de passe
              </label>
              <Form.Group className="mb-3" controlId="validationCustom06">
                <Form.Control
                  className="bg-grey-200"
                  styles={{ color: "#fff" }}
                  type="password"
                  placeholder="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                  required
                />
                <Form.Control.Feedback className="feedback">
                  Mot de passe valid !
                </Form.Control.Feedback>
                <Form.Control.Feedback className="feedback" type="invalid">
                  Le mot de passe doit être composé de 8 à 20 caractères et
                  inclure au moins 1 lettre, 1 chiffre et 1 caractère spécial !
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Accepter les termes et conditions"
                  feedback="Vous devez accepter les terms et conditions."
                  feedbackType="invalid"
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full whitespace-nowrap rounded text-sm font-medium px-3 py-2 bg-blue-500 border border-blue-500 hover:bg-blue-600 text-white"
                >
                  S'inscrire
                </button>
              </div>
            </Form>
            <div className="mt-5 text-sm">
              <span>Déjà membre Wonder Trading?</span>
              <Link to="/login" className="text-blue-500 font-medium connect">
                Connectez-vous ici
              </Link>
              <div className="page-account__footer">
                <p>2022 © Tous Droits réservés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
