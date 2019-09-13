import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import Link from "next/Link";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  },
  ["@media (max-width:1080px)"]: {
    wrapper: {
      position: "absolute",
      width: 600,
      height: 500,
      left: "50%",
      top: "50%",
      marginLeft: -300,
      marginTop: -250
    },
    loginwrap: {
      width: "60%",
      height: "100%"
    },
    registerwrap: {
      width: "40%",
      height: "100%"
    }
  },
  ["@media (max-width:780px)"]: {
    wrapper: {
      position: "absolute",
      width: 400,
      height: 500,
      left: "50%",
      top: "50%",
      marginLeft: -200,
      marginTop: -250
    },
    loginwrap: {
      width: "50%",
      height: "100%"
    },
    registerwrap: {
      width: "50%",
      height: "100%"
    },
    input: {
      width: 150
    }
  },
  ["@media (max-width:600px)"]: {
    wrapper: {
      position: "absolute",
      width: 200,
      height: 500,
      left: "50%",
      top: "50%",
      marginLeft: -100,
      marginTop: -250
    },
    input: {
      width: 120
    },
    registerwrap: {
      display: "none"
    }
  }
});

const Loginscreen = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  const loginBoxes = (
    <section className={classes.wrapper}>
      <div className={classes.loginwrap}>
        <div className={classes.loginContainer}>
          <label className={classes.textLogin}>LOGIN</label>
          <div className={classes.email}>
            <label htmlFor="emailLabel">EMAIL ADDRESS</label>
            <Input
              className={classes.input}
              name="login_email"
              type="text"
              placeholder="YOUR EMAIL ADDRESS"
            />
          </div>
          <div className={classes.password}>
            <label htmlFor="passwordLabel">PASSWORD</label>
            <Input
              className={classes.input}
              name="login_password"
              type="password"
              placeholder="ENTER VALID PASSWORD"
            />
          </div>
          <Button className={classes.loginBtn} htmlType="submit">
            Login
          </Button>
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
          <Link href="/signup">
            <a>
              <Button className={classes.registerBtn} htmlType="submit">
                REGISTER NOW
              </Button>
            </a>
          </Link>
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

  return <>{loginView}</>;
};

export default Loginscreen;
