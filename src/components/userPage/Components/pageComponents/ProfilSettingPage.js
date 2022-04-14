import React from "react";
import "./profilStyle.css";
import TextField from "@mui/material/TextField";
const ProfilSettingPage = () => {
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
                  <img src="/user.jpg" />
                </div>
                <p>User Name</p>
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
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="email"
                  disabled
                  variant="outlined"
                />
                <div className="form_input">
                  <div className="form_left">
                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-basic"
                      label="Telephone number"
                      variant="outlined"
                    />
                  </div>
                  <div className="form_right">
                    <TextField
                      id="outlined-basic"
                      label="Old Password"
                      variant="outlined"
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
