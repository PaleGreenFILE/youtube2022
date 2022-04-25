import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./userprofile.scss";
import Avatar from "@mui/material/Avatar";
import { useUserAuth, upload } from "../../context/UserAuthContext";
import { toast } from "react-toastify";

const UserProfile = () => {
  const { currentUser } = useUserAuth();
  const [/*name,*/ setName] = useState("");
  const [/*pseudo,*/ setPseudo] = useState("");
  const [/*adress,*/ setAdress] = useState("");
  const [/*phone,*/ setPhone] = useState("");
  const [/*country,*/ setCountry] = useState("");
  const [/*email,*/ setEmail] = useState("");
  /*const [file, setFile] = useState("");*/
  /*const [data, setData] = useState([]);*/

  /*const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
  };

  /*const handleUpDate = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(collection(db, "users"), {
        name: "LOS ANGELES",
        email: "charlyangels@gmail.com",
        phoneNumber: "+33062547851",
        country: "USA",
        adress: "AV. marechal jUIN3",
        pseudo: "Angels2a",
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };*/

  // Set Update Photo Profile //////////////////////////////////
  const [photoURL, setPhotoURL] = useState(
    "https://vetref.fr/wp-content/uploads/2021/02/blank-profile-picture-973460_640.png"
  );
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const  handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    upload(photo, currentUser, setLoading);

    setTimeout(() => {
      window.location.reload(false);
    }, 3000);
    e.stopPropagation();
    console.log("Profil Updated Successfully");
    toast.success("Profil Updated ! " + currentUser.displayName);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      console.log(currentUser.photoURL);
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);
  /*////////////////////////////////////////*/ ///////////////////////////////
  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <h2 className="title">Information</h2>
              <div className="item">
                <label htmlFor="profilePhoto">
                  <input
                    accept="image/*"
                    type="file"
                    id="profilePhoto"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                  <Avatar className="itemImg" src={photoURL} />
                </label>
                <div className="details">
                  <h2 className="itemTitle">{currentUser.displayName}</h2>
                  <div className="detailItem">
                    <span className="itemKey">Email:{currentUser.email}</span>
                    <span className="itemValue"></span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue"></span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adresse:</span>
                    <span className="itemValue"></span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue"></span>
                  </div>
                </div>
                <div className="buttonDelete">
                  <button variant="primary" onClick={handleDelete}>
                    Delete My Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <h2 className="title">Update Information</h2>
            <div className="right">
              <form>
                <div className="formInput">
                  <label>Username :</label>
                  <input
                    type="text"
                    onChange={(e) => setPseudo(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Name and surname :</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Email :</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Phone</label>
                  <input
                    type="phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Country :</label>
                  <input
                    type="text"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Adress :</label>
                  <input
                    type="text"
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
                <button disabled={loading || !photo} onClick={handleClick}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
