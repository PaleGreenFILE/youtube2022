import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes , } from "firebase/storage";
import  setUsers  from "../components/Register/Signup";


const userAuthContext = createContext();

/*/// Get Storage//////*/ //
const storage = getStorage();
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, "/gallery/" + currentUser.uid + ".png");

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file).then(() => {
    console.log("Uploaded a File");
  });
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });
  setUsers();
  setLoading(false);
}
/*///////////DeleteUser///*/ ////

/*/////// Firebase Login //////////////*/
export function UserAuthContextProvider({ children }) {
  const [currentUser, setUser] = useState({});
  const navigate = useNavigate();

  async function logIn(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      console.log("Connexion Autorisée");
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/wrong-password") {
        toast.error("Mot de passe Incorrect !");
        console.log("Mot de passe Incorrect !");
      }
      if (err.code === "auth/too-many-requests") {
        toast.error(
          "Compte Temporairement Suspendu ! Veuillez réessayer plus tard !"
        );
        console.log("Compte Temporairement Suspendu !");
      }
      if (err.code === "auth/user-not-found") {
        toast.error("Utilisateur Non Inscrit !");
        console.log("Utilisateur Non Inscrit !");
      }
      if (err.code === "auth/network-request-failed") {
        toast.error("Network Failed, please check ur internet !");
        console.log("Network Failed, please check ur internet !");

      }
    }
  }

  /*/////// Firebase Register //////////////*/

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      if (auth) {
        toast.success("Inscription Réussie");
        navigate("/login");
        console.log("Inscription Réussie");
      }
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/email-already-in-use") {
        toast.error("Utilisateur déja Inscrit !");
        console.log("Utilisateur déja Inscrit !");
      }
      if (err.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters !");
        console.log("Password should be at least 6 characters !");
      }
      if (err.code === "auth/internal-error") {
        toast.error("Merci de remplir tous les champs !");
        console.log("Merci de remplir tous les champs !");
      }
      if (err.code === "auth/invalid-email") {
        toast.error("Merci de rentrer un email valide !");
        console.log("Merci de rentrer un email valide !");
      }
    }
  }

  /*/////// Firebase Reset Password //////////////*/

  async function resetPassword(email) {
    try {
      const re = await sendPasswordResetEmail(auth, email);
      console.log(re);
      if (auth) {
        toast.success("Email envoyé ! \n Veuillez vérifiez votre boite mail !");
        console.log("Email envoyé ! \n Veuillez vérifiez votre boite mail !");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/user-not-found") {
        toast.error(" Email non trouvé !");
        console.log(" Email non trouvé !");
      }
    }
  }

  /*/////// Firebase Logout //////////////*/

  async function logOut() {
    try {
      const re = await signOut(auth);
      console.log(re);
    } catch (err) {
      console.log(err.message);
    }
  }

  /*/////// Firebase Login GOOGLE //////////////*/

  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      const re = await signInWithPopup(auth, googleAuthProvider);
      if (auth ,re) {
        toast.success("Inscription Réussie");
        navigate("/home");
        console.log("Inscription Réussie");
      }
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/cancelled-popup-request") {
        toast.error("Pop-Up Cancelled !");
        console.log("Pop-Up Cancelled !");
      }
      if (err.code === "auth/internal-error") {
        toast.error("Erreur Interne !");
        console.log("Erreur Interne !");
        navigate("/login");
      }
    }
  }

  /*/////// Firebase Login FACEBOOK //////////////*/

  async function sigInWithFacebook() {
    const facebookAuthProvider = new FacebookAuthProvider();
    try {
    const re = await signInWithPopup(auth, facebookAuthProvider);
    if (auth ,re) {
      toast.success("Inscription Réussie");
      navigate("/home");
      console.log("Inscription Réussie");
    }
  } catch (err) {
    console.log(err.message);
    if (err.code === "auth/cancelled-popup-request") {
      toast.error("Pop-Up Cancelled !");
      console.log("Pop-Up Cancelled !");
    }
    if (err.code === "auth/internal-error") {
      toast.error("Erreur Interne !");
      console.log("Erreur Interne !");
      navigate("/login");
    }
  }
}

  /*/////// Firebase rECAPTCHA  pHONE Number//////////////*/

  async function setUpRecaptha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    try {
      const re = await signInWithPhoneNumber(auth, number, recaptchaVerifier);
      console.log(re);
    } catch (err) {
      console.log(err.message);
      if (err.code === "auth/invalid-phone-number") {
        toast.error(" Numéro non valide !");
        console.log(" Numéro non valide !");
        navigate("/");
      }
      if (err.code === "auth/too-many-requests") {
        toast.error("Trop de tentatives, veuillez réessayer plus tard.");
        console.log("Trop de tentatives, veuillez réessayer plus tard.");
        navigate("/");
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        currentUser,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        sigInWithFacebook,
        setUpRecaptha,
        resetPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
