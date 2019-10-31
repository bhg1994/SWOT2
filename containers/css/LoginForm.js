import { Form, Input, Button, Typography, Card } from "antd";
import styled from 'styled-components';

const {
    Text
} = Typography;

export const SectionWrapper = styled.section`
    position: absolute;
    width:800px;
    height:500px;
    left:50%;
    top:50%;
    margin-left:-300px;
    margin-top:-250px;
`

export const LoginWrap = styled.div`
    background-color:white;
    display: inline-block;
    width:70%;
    height:100%;
    margin: auto;
    
`

export const LoginContainer = styled.div`
    position: absolute;
    margin:40px;
`

export const Logintext = styled.label`
    font-size:20px;
    margin-bottom:20px;
`

export const Email = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction: column;
`

export const Label = styled.label`
    font-size:15px;
`

export const InputAddress = styled(Input)`
    margin-top:20px;
    width:300px;
    height:40px;
`

export const Password = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
`

export const InputPassword = styled(Input)`
    margin-top:20px;
    width:300px;
    height:40px;
`

export const LoginButton = styled(Button)`
    margin-top:60px;
    width:150px;
    height:50px;
    color:white;
    background-color:black;
`

export const RegisterWrapper = styled.div`
    background:gray;
    display: inline-block;
    width:30%;
    height:100%;
`

export const RegisterContainer = styled.div`
    position:absolute;
    margin:40px;
`

export const TextRegister = styled.label`
    font-size:20px;
    color:white;
    margin-top:20px;
`

export const Article = styled.article`
    font-size:15px;
    margin-top:20px;
`

export const RegisterButton = styled(Button)`
    margin-top:30px;
    width:150px;
    height:50px;
    color:white;
    background-color:gray;
`

export const ChangePwButton = styled(Button)`
    margin-left: 20px;
    width:150px;
    height:50px;
    color:black;
    background-color:white;
`

// ["@media (max-width:1080px)"]: {
//     wrapper: {
//       position: "absolute",
//       width: 600,
//       height: 500,
//       left: "50%",
//       top: "50%",
//       marginLeft: -300,
//       marginTop: -250
//     },
//     loginwrap: {
//       width: "60%",
//       height: "100%"
//     },
//     registerwrap: {
//       width: "40%",
//       height: "100%"
//     }
//   },
//   ["@media (max-width:780px)"]: {
//     wrapper: {
//       position: "absolute",
//       width: 400,
//       height: 500,
//       left: "50%",
//       top: "50%",
//       marginLeft: -200,
//       marginTop: -250
//     },
//     loginwrap: {
//       width: "50%",
//       height: "100%"
//     },
//     registerwrap: {
//       width: "50%",
//       height: "100%"
//     },
//     input: {
//       width: 150
//     }
//   },
//   ["@media (max-width:600px)"]: {
//     wrapper: {
//       position: "absolute",
//       width: 200,
//       height: 500,
//       left: "50%",
//       top: "50%",
//       marginLeft: -100,
//       marginTop: -250
//     },
//     input: {
//       width: 120
//     },
//     registerwrap: {
//       display: "none"
//     }
//   }