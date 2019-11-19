import React, { useState, useCallback } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST, EMAIL_DUPLICATE_REQUEST } from "../reducers/user";
import {
  SignupWrapper,
  SignupContainer,
  SignupTitle,
  FirstSection,
  StudentId,
  SecondSection,
  Email,
  Duplicate,
  ThirdSection,
  Password,
  Repassword,
  FourthSection,
  Telephone,
  Name,
  FifthSection,
  Check
} from "../containers/css/SignupForm";

const SignupForm = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [telephone, setTelephone] = useState("");

  const dispatch = useDispatch();

  const { isSigningUp, me } = useSelector(state => state.user);

  const onDuplicateBtn = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: EMAIL_DUPLICATE_REQUEST,
      data: {
        email
      }
    });
  }, []);

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
      console.log(email, id, name, password, telephone);

      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          email,
          id,
          name,
          password,
          telephone
        }
      });
    },
    [email, id, name, password, passwordCheck, telephone, term]
  );

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangeId = useCallback(
    e => {
      setId(e.target.value);
    },
    [id]
  );

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangePassword = e => {
    setPasswordError(e.target.value !== passwordCheck);
    setPassword(e.target.value);
  };

  const onChangeTelephone = e => {
    setTelephone(e.target.value);
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
      <SignupWrapper>
        <div>
          <SignupContainer>
            <SignupTitle strong>CREATE AN ACCOUNT</SignupTitle>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
              <FirstSection>
                <Email>
                  <label htmlFor="emailLabel">EMAIL ADDRESS</label>
                  <br />
                  <Input
                    name="register_email"
                    value={email}
                    required
                    onChange={onChangeEmail}
                    placeholder="YOUR EMAIL ADDRESS"
                    style={{ width: 225, height: 50 }}
                  />
                </Email>
                <Duplicate>
                  <Button onClick={onDuplicateBtn}>중복 확인</Button>
                </Duplicate>
              </FirstSection>
              <SecondSection>
                <StudentId>
                  <label htmlFor="studentIdLabel">STUDENTID</label>
                  <br />
                  <Input
                    name="studentId"
                    value={id}
                    required
                    onChange={onChangeId}
                    placeholder="YOUR STUDENT ID"
                    style={{ width: 470, height: 50 }}
                  />
                </StudentId>
              </SecondSection>

              <ThirdSection>
                <Password>
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
                </Password>
                <Repassword>
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
                </Repassword>
              </ThirdSection>
              {passwordError && (
                <div style={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
              <FourthSection>
                <Telephone>
                  <label htmlFor="TELEPHONE">TELEPHONE</label>
                  <br />
                  <Input
                    name="register_telephone"
                    type="text"
                    value={telephone}
                    required
                    onChange={onChangeTelephone}
                    placeholder="ENTER VALID TELEPHONE"
                    style={{ width: 225, height: 50 }}
                  />
                </Telephone>
                <Name>
                  <label htmlFor="nameLabel">NAME</label>
                  <br />
                  <Input
                    name="register_name"
                    value={name}
                    required
                    onChange={onChangeName}
                    placeholder="YOUR NAME"
                    style={{ width: 225, height: 50 }}
                  />
                </Name>
              </FourthSection>
              <FifthSection>
                <Check>
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
                      <div style={{ color: "red" }}>
                        약관에 동의하셔야 합니다.
                      </div>
                    )}
                  </div>
                  <div style={{ margin: "20px 0 0 50px" }}>
                    <Button type="primary" htmlType="submit">
                      가입하기
                    </Button>
                  </div>
                </Check>
              </FifthSection>
            </Form>
          </SignupContainer>
        </div>
      </SignupWrapper>
    </>
  );
};
export default SignupForm;
