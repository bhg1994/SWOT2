import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "absolute",
    width: 600,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -300,
    marginTop: -250
  },
  registerWrap: {
    backgroundColor: "white",
    display: "inline-block",
    height: "100%",
    width: "100%"
  },
  registerContainer: {
    position: "absolute",
    margin: 40
  },
  textRegister: {
    fontSize: 20
  },
  firstSection: {
    textAlign: "center",
    marginBottom: 20
  },
  profile: {
    marginTop: 20
  },
  profileLabel: {
    marginRight: 20
  },
  secondSection: {
    display: "flex",
    flexDirection: "row"
  },
  email: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  name: {
    marginTop: 20,
    marginLeft: 70,
    display: "flex",
    flexDirection: "column"
  },
  thirdSection: {
    display: "flex",
    flexDirection: "row"
  },
  password: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column"
  },
  repassword: {
    marginTop: 20,
    marginLeft: 70
  },
  registerBtn: {
    marginTop: 30,
    width: 225,
    height: 50,
    color: "white",
    backgroundColor: "#a0522d"
  },
  input: {
    marginTop: 20,
    width: 225,
    height: 50
  }
});

export default function Registerscreen() {
  const classes = useStyles();

  const registerBoxes = (
    <section className={classes.wrapper}>
      <div className={classes.registerWrap}>
        <section className={classes.registerContainer}>
          <div className={classes.textRegister}>CREATE AN ACCOUNT</div>
          <div className={classes.firstSection}>
            <div className={classes.profile}>
              <label className={classes.profileLabel}>Profile</label>
              <input
                className={classes.input}
                name="register_profile"
                type="text"
                placeholder="Add to Profile"
              />
            </div>
          </div>
          <div className={classes.secondSection}>
            <div className={classes.email}>
              <label className={classes.emailLabel}>EMAIL ADDRESS</label>
              <input
                className={classes.input}
                name="register_email"
                type="text"
                placeholder="YOUR EMAIL ADDRESS"
              />
            </div>
            <div className={classes.name}>
              <label className={classes.nameLabel}>NAME</label>
              <input
                className={classes.input}
                name="register_name"
                type="text"
                placeholder="YOUR NAME"
              />
            </div>
          </div>
          <div className={classes.thirdSection}>
            <div className={classes.password}>
              <label className={classes.passwordLabel}>PASSWORD</label>
              <input
                className={classes.input}
                name="register_password"
                type="text"
                placeholder="ENTER VALID PASSWORD"
              />
            </div>
            <div className={classes.repassword}>
              <label className={classes.rePasswordLabel}>
                RE-ENTER PASSWORD
              </label>
              <input
                className={classes.input}
                name="register_password2"
                type="text"
                placeholder="ENTER VALID PASSWORD"
              />
            </div>
          </div>
          <button className={classes.registerBtn} type="submit">
            CONTINUE & CONFIRM EMAIL
          </button>
        </section>
      </div>
    </section>
  );

  const registerView = (
    <div>
      <div>
        <div>{registerBoxes}</div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div>{registerView}</div>
      </div>
    </>
  );
}
