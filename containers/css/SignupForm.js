import {
    Typography,
    Form
} from 'antd';
import styled from 'styled-components';

const {
    Text
} = Typography;

export const SignupWrapper = styled.section `
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

export const SignupContainer = styled.section `
    position: absolute;
    margin : 40px;
`

export const SignupTitle = styled(Text)
`
font-size:25px;
`