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

    @media(max-width: 1024px) {
    margin-left:-200px;
    width:600px;
    }
`

export const LoginWrap = styled.div`
    background-color:white;
    display: inline-block;
    width:70%;
    height:100%;
    margin: auto;

    @media(max-width: 1024px) {
    margin-left:100px;
    width:50%;
    }
    
    @media(max-width: 768px){
    width:40%;
}
`

export const LoginContainer = styled.div`
    position: absolute;
    margin:40px;

`

export const Logintext = styled.label`
    font-size:20px;
    margin-bottom:20px;

    @media(max-width: 768px){
    font-size:15px;
}
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
    @media(max-width: 1024px) {
    width:200px;
    }
    @media(max-width: 768px){
    width: 150px;
}
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
    @media(max-width: 1024px) {
    width:200px;
    }
        
    @media(max-width: 768px){
    width:150px;
}
`

export const LoginButton = styled(Button)`
    margin-top:60px;
    width:150px;
    height:50px;
    color:white;
    background-color:black;

    @media(max-width: 1024px) {
    width:100px;
    }
        
    @media(max-width: 768px){
        margin-top:30px;
        width:80px;
}

`

export const RegisterWrapper = styled.div`
    background:gray;
    display: inline-block;
    width:30%;
    height:100%;
    
    @media(max-width: 768px){
    width:25%;
}

`

export const RegisterContainer = styled.div`
    position:absolute;
    margin:40px;
`

export const TextRegister = styled.label`
    font-size:20px;
    color:white;
    margin-top:20px;

        
    @media(max-width: 768px){
    font-size:15px; 
}
`

export const Article = styled.article`
    font-size:15px;
    margin-top:20px;
    @media(max-width: 1024px) {
    display:none;
    }
`

export const RegisterButton = styled(Button)`
    margin-top:30px;
    width:150px;
    height:50px;
    color:white;
    background-color:gray;
    @media(max-width: 1024px) {
    width:120px;
    font-size:12px;
    }   
        
    @media(max-width: 768px){
    width: 100px;   
    font-size:10px;
}
`

export const ChangePwButton = styled(Button)`
    margin-left: 20px;
    width:150px;
    height:50px;
    color:black;
    background-color:white;

    @media(max-width: 1024px) {
    width:120px;
    font-size:10px;
    }   
        
    @media(max-width: 768px){
    width: 100px;
    font-size:8px;
}
`
