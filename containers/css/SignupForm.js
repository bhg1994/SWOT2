import {
    Typography,
    Form
} from 'antd';
import styled from 'styled-components';

const {
    Text
} = Typography;


export const SignupWrapper = styled.section`
    margin:auto;
    width:60%;
    @media(max-width: 1024px) {
    margin :0;
}
`


export const SignupContainer = styled.section`
    padding:40px;
`

export const SignupTitle = styled(Text)`
margin:auto;
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
    flex-direction:column;
`

export const Check = styled.div`
    margin:auto;
`