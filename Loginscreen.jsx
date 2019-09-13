import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "absolute",
    width: 800,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -400,
    marginTop: -250
  },
  loginwrap: {
    backgroundColor: "white",
    display: "inline-block",
    width: "70%",
    height: "100%",
    margin: "auto"
  },
  textLogin: {
    fontSize: 20,
    marginBottom: 20
  },
  textRegister: {
    fontSize: 20,
    color: "white",
    marginTop: 20
  },
  registerwrap: {
    background: "gray",
    display: "inline-block",
    width: "30%",
    height: "100%"
  },
  email: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  password: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  loginContainer: {
    position: "absolute",
    margin: 40
  },
  registerContainer: {
    position: "absolute",
    margin: 40
  },
  article: {
    marginTop: 20
  },
  loginBtn: {
    marginTop: 60,
    width: 150,
    height: 50,
    color: "white",
    backgroundColor: "black"
  },
  registerBtn: {
    marginTop: 30,
    width: 150,
    height: 50,
    color: "white",
    backgroundColor: "gray"
  },
  input: {
    marginTop: 20,
    width: 300,
    height: 40
  }
});

const Loginscreen = () => {
  const classes = useStyles();

  const loginBoxes = (
    <section className={classes.wrapper}>
      <div className={classes.loginwrap}>
        <div className={classes.loginContainer}>
          <label className={classes.textLogin}>LOGIN</label>
          <div className={classes.email}>
            <label className={classes.emailLabel}>EMAIL ADDRESS</label>
            <input
              className={classes.input}
              name="login_email"
              type="text"
              placeholder="YOUR EMAIL ADDRESS"
            />
          </div>
          <div className={classes.password}>
            <label className={classes.passwordLabel}>PASSWORD</label>
            <input
              className={classes.input}
              name="login_password"
              type="password"
              placeholder="ENTER VALID PASSWORD"
            />
          </div>
          <button className={classes.loginBtn} type="submit">
            Login
          </button>
        </div>
      </div>
      <div className={classes.registerwrap}>
        <div className={classes.registerContainer}>
          <label className={classes.textRegister}>NOT A MEMBER?</label>
          <article className={classes.article}>
            If you are using SWOT as a member, you can experience a wider
            variety of services.
            <br /> <br />
            Classroom reservation system, study collection board, and various
            services are available.
          </article>
          <button className={classes.registerBtn} type="submit">
            REGISTER NOW
          </button>
        </div>
      </div>
    </section>
  );

  const loginView = (
    <div>
      <div>
        <div>{loginBoxes}</div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div>{loginView}</div>
      </div>
    </>
  );
};

export default Loginscreen;
