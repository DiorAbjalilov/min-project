import React, { useEffect, useState } from "react";
import "./profilStyle.css";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import postFetchApi, { getUserApi } from "../../../../store/actions";

const ProfilSettingPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserApi());
  }, []);
  const user = useSelector((state) => state.user.user.data);
  const [userValue, setUserValue] = useState({
    username: user.username,
    addres: user.addres,
    phone: user.phone,
    image: user.image,
    password: null,
  });
  if (user) {
    // console.log(userValue);
    const changUserValue = (e) => {
      const clone = { ...userValue };
      if (e.target.name == "image") {
        clone[e.target.name] = e.target.files;
      }
      clone[e.target.name] = e.target.value;
      setUserValue(clone);
    };
    const changUserValueImg = (e) => {
      const clone = { ...userValue };
      clone[e.target.name] = e.target.files;
      setUserValue(clone);
    };
    console.log(userValue);
    return (
      <>
        {user && (
          <div className="About_container">
            <div className="about_box">
              <div className="about_person">
                <div className="person_picture">
                  <div className="pecture_navbar">
                    <h2>Profile Picture</h2>
                  </div>
                  <div className="person_img_doc">
                    <div>
                      <img src={user.image ? user.image : "/user.jpg"} alt="" />
                    </div>
                    <p>{user.username}</p>
                    <input
                      type="file"
                      className="btn btn-primary"
                      name="image"
                      onChange={(e) => changUserValueImg(e)}
                    />
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
                      name="username"
                      value={userValue.username}
                      onChange={(e) => changUserValue(e)}
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
                          name="addres"
                          value={userValue.addres}
                          onChange={(e) => changUserValue(e)}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Telephone number"
                          variant="outlined"
                          value={userValue.phone}
                          name="phone"
                          onChange={(e) => changUserValue(e)}
                        />
                      </div>
                      <div className="form_right">
                        <TextField
                          id="outlined-basic"
                          label="Old Password"
                          variant="outlined"
                          disabled
                          value={user.password}
                        />
                        <TextField
                          id="outlined-basic"
                          label="New Password"
                          variant="outlined"
                          name="password"
                          onChange={(e) => changUserValue(e)}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() =>
                        dispatch(
                          postFetchApi(
                            "putUser",
                            "http://localhost:5000/api/user/mePut",
                            userValue
                          )
                        )
                      }
                    >
                      Primary
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  return <div>not foun</div>;
};

export default ProfilSettingPage;
