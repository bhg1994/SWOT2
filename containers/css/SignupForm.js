import {
    Typography,
    Form
} from 'antd';
import styled from 'styled-components';

const {
    Text
} = Typography;

export const SignupWrapper = styled.section`
position: absolute;
width: 600;
height: 550;
left: 50%;
top: 50%;
margin-left: -200px;
margin-top: -250px;

& > div{
    background-color:white;
    display:inline-block;
    height:100%;
    width:100%;
}
`

export const SignupContainer = styled.section`
    position: absolute;
    margin : 40px;
`

export const SignupTitle = styled(Text)
    `
font-size:25px;
`

export const FirstSection = styled.section`
    display:flex;
    flex-direction: row;
`

export const StudentId = styled.div`
    margin-top: 20px;
    display:flex;
    flex-direction:column;
`

export const SecondSection = styled.section`
    display: flex;
    flex-direction : row;
`

export const Email = styled.div`
    margin-top: 20px;
    display:flex;
    flex-direction: column;
`

export const Duplicate = styled.div`
    margin : 70px 0 0 20px;
    display:flex;
    flex-direction: column;
`

export const ThirdSection = styled.div`
    display:flex;
    flex-direction:row;
`

export const Password = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    flex-direction : column;
`

export const Repassword = styled.div`
    margin: 20px 0 0 20px;
    display:flex;
    flex-direction:column;
`

export const FourthSection = styled.div`
    display:flex;
    flex-direction: row;
`

export const Telephone = styled.div`
    margin: 20px 0 0 0;
    display:flex;
    flex-direction: column;
`

export const Name = styled.div`
    margin: 20px 0 0 20px;
    display:flex;
    flex-direction:column;
`

export const FifthSection = styled.div`
    display:flex;
    flex-direction:row;
`

export const Check = styled.div`
    margin:auto;
`