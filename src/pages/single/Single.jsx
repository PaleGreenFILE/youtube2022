import React, { useEffect, useState } from 'react';
import { useUserAuth , upload} from "../../context/UserAuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./single.scss";



function Profile() {

  const { logOut, currentUser } = useUserAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png");
  const navigate = useNavigate();

  const handleClick = () => {
    upload(photo, currentUser, setLoading);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  
  useEffect(() => { 
    if (currentUser?.photoURL) {   
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser])
  



  return (
    <>

      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        <h2>Name: {currentUser.displayName}</h2>
        <h2>Email: {currentUser && currentUser.email}</h2>
      </div>
      <div className="fields">
        <input type="file" onChange={handleChange} />
        <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
        <img src={photoURL} alt="Avatar" className="avatar" />"
      </div>
      <div className=" py-4 mt-4 gap-2">
      
        
      </div>
    </>
  );
};

export default Profile;    