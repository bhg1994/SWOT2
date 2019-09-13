import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wrapper: {
    position: "absolute",
    width: 600,
    height: 500,
    left: "50%",
    top: "50%",
    marginLeft: -300,
    marginTop: -250,
    border: "1px solid gray"
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
    margin: "20px 0 0 20px",
    display: "flex",
    flexDirection: "column"
  },
  thirdSection: {
    display: "flex",
    flexDirection: "row"
  },
  password: {
    margin: "20px 0 0 0",
    display: "flex",
    flexDirection: "column"
  },
  repassword: {
    margin: "20px 0 0 20px",
    display: "flex",
    flexDirection: "column"
  }
});

/* custom Hooks */

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [id, setId] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const { Text } = Typography;
  const classes = useStyles();
  // useCallback으로 감쌀때 함수 내부에서 쓰는 state를 deps배열로 넣는다.
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }
      console.log({
        id,
        nick,
        password,
        passwordCheck,
        term
      });
    },
    [password, passwordCheck, term]
  );

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangeNick = e => {
    setNick(e.target.value);
  };

  const onChangePassword = e => {
    setPasswordError(e.target.value !== passwordCheck);
    setPassword(e.target.value);
  };

  const onChangePasswordChk = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <section className={classes.wrapper}>
        <div className={classes.registerWrap}>
          <section className={classes.registerContainer}>
            <Text strong style={{ fontSize: "25px" }}>
              CREATE AN ACCOUNT
            </Text>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
              <div className={classes.secondSection}>
                <div className={classes.email}>
                  <label className={classes.emailLabel} htmlFor="emailLabel">
                    EMAIL ADDRESS
                  </label>
                  <br />
                  <Input
                    name="register_email"
                    value={id}
                    required
                    onChange={onChangeId}
                    placeholder="YOUR EMAIL ADDRESS"
                    style={{ width: 225, height: 50 }}
                  />
                </div>
                <div className={classes.name}>
                  <label htmlFor="nameLabel">NAME</label>
                  <br />
                  <Input
                    name="register_name"
                    value={nick}
                    required
                    onChange={onChangeNick}
                    placeholder="YOUR NAME"
                    style={{ width: 225, height: 50 }}
                  />
                </div>
              </div>
              <div className={classes.thirdSection}>
                <div className={classes.password}>
                  <label htmlFor="passwordLabel">PASSWORD</label>
                  <br />
                  <Input
                    name="register_password"
                    type="password"
                    value={password}
                    required
                    onChange={onChangePassword}
                    placeholder="ENTER VALID PASSWORD"
                    style={{ width: 225, height: 50 }}
                  />
                </div>
                <div className={classes.repassword}>
                  <label htmlFor="rePasswordLabel">RE-ENTER PASSWORD</label>
                  <br />
                  <Input
                    name="register_password2"
                    type="password"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordChk}
                    placeholder="ENTER VALID PASSWORD"
                    style={{ width: 225, height: 50 }}
                  />
                </div>
              </div>
              {passwordError && (
                <div style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
              <div>
                <Checkbox
                  name="user-term"
                  checked={term}
                  onChange={onChangeTerm}
                  style={{ marginTop: "20px" }}
                >
                  회원가입 약관에 동의합니다.
                </Checkbox>
                {termError && (
                  <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
                )}
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button type="primary" htmlType="submit">
                  가입하기
                </Button>
              </div>
            </Form>
          </section>
        </div>
      </section>
    </>
  );
};
export default Signup;
