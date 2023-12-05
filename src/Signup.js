import React, { useState } from "react";

const signupStyles = {
  body: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "30px",
    backgroundColor: "rgb(231, 231, 231)",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  heading: {
    color: "green",
  },
  title: {
    fontWeight: 400,
    letterSpacing: "1.5px",
  },
  container: {
    height: "600px",
    width: "500px",
    backgroundColor: "white",
    boxShadow: "8px 8px 20px rgb(128, 128, 128)",
    position: "relative",
    overflow: "hidden",
  },
  btn: {
    height: "60px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "10px 10px 30px rgb(254, 215, 188)",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  login: {
    fontSize: "22px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    position: "relative",
    cursor: "pointer",
  },
  signup: {
    fontSize: "22px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    position: "relative",
    cursor: "pointer",
  },
  slider: {
    height: "60px",
    width: "150px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91))",
    position: "absolute",
    top: "20px",
    left: "100px",
    transition: "all 0.5s ease-in-out",
  },
  moveslider: {
    left: "250px",
  },
  formSection: {
    height: "500px",
    width: "1000px",
    padding: "20px 0",
    display: "flex",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    left: "0px",
  },
  formSectionMove: {
    left: "-500px",
  },
  loginBox: {
    height: "100%",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  signupBox: {
    height: "100%",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
  },
  ele: {
    height: "60px",
    width: "400px",
    outline: "none",
    border: "none",
    color: "rgb(77, 77, 77)",
    backgroundColor: "rgb(240, 240, 240)",
    borderRadius: "50px",
    paddingLeft: "30px",
    fontSize: "18px",
  },
  clkbtn: {
    height: "60px",
    width: "150px",
    borderRadius: "50px",
    backgroundImage:
      "linear-gradient(to right, rgb(255, 195, 110), rgb(255, 146, 91))",
    fontSize: "22px",
    border: "none",
    cursor: "pointer",
  },
};

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleSlider = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={signupStyles.body}>
      <div style={signupStyles.container}>
        <div style={signupStyles.btn}>
          <button
            className="login"
            style={isLogin ? signupStyles.login : {}}
            onClick={toggleSlider}
          >
            Login
          </button>
          <button
            className="signup"
            style={isLogin ? {} : signupStyles.signup}
            onClick={toggleSlider}
          >
            Signup
          </button>
          <div
            className="slider"
            style={{
              ...signupStyles.slider,
              ...(isLogin ? {} : signupStyles.moveslider),
            }}
          ></div>
        </div>
        <div
          className={`form-section${isLogin ? "" : " form-section-move"}`}
          style={{
            ...signupStyles.formSection,
            ...(isLogin ? {} : signupStyles.formSectionMove),
          }}
        >
          <div className="login-box" style={signupStyles.loginBox}>
            <input
              type="email"
              className="email ele"
              placeholder="youremail@email.com"
              style={signupStyles.ele}
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
              style={signupStyles.ele}
            />
            <button className="clkbtn" style={signupStyles.clkbtn}>
              Login
            </button>
          </div>
          <div className="signup-box" style={signupStyles.signupBox}>
            <input
              type="text"
              className="name ele"
              placeholder="Enter your name"
              style={signupStyles.ele}
            />
            <input
              type="email"
              className="email ele"
              placeholder="youremail@email.com"
              style={signupStyles.ele}
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
              style={signupStyles.ele}
            />
            <input
              type="password"
              className="password ele"
              placeholder="Confirm password"
              style={signupStyles.ele}
            />
            <button className="clkbtn" style={signupStyles.clkbtn}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
