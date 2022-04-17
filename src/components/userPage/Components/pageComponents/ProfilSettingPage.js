import React, { useEffect } from "react";
import "./profilStyle.css";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { getUserApi } from "../../../../store/actions";
const ProfilSettingPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user.data);
  useEffect(() => {
    dispatch(getUserApi());
  }, []);
  return (
    <>
      <div className="About_container">
        <div className="about_box">
          <div className="about_person">
            <div className="person_picture">
              <div className="pecture_navbar">
                <h2>Profile Picture</h2>
              </div>
              <div className="person_img_doc">
                <div>
                  <img src="/user.jpg" alt="" />
                </div>
                <p>{user.username}</p>
                <button type="button" className="btn btn-primary">
                  Upload Avater
                </button>
              </div>
            </div>
            <div className="person_registir">
              <div className="pecture_navbar">
                <h2> Edit Account Details</h2>
              </div>
              <form>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  value={user.username}
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label={user.email}
                  disabled
                  variant="outlined"
                />
                <div className="form_input">
                  <div className="form_left">
                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      value={user.addres}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Telephone number"
                      variant="outlined"
                      value={user.phone}
                    />
                  </div>
                  <div className="form_right">
                    <TextField
                      id="outlined-basic"
                      label="Old Password"
                      variant="outlined"
                      value={user.password}
                    />
                    <TextField
                      id="outlined-basic"
                      label="New Password"
                      variant="outlined"
                    />
                  </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilSettingPage;
