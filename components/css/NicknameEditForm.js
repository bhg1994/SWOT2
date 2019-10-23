import styled from 'styled-components';
import {
    Form,
    Button,
    Input,
    Typography
} from "antd";


const { Text } = Typography;

export const NickEditForm = styled(Form)
    `
    margin: 40px 0 40px 0;
    border: 1px solid #d9d9d9;
    padding: 30px;

    & > div {
        display:flex;
    }
`
export const LogoutBtn = styled(Button)
    `
    margin-left:20px;
`

export const UpdateBtn = styled(Button)
    `
    margin-top: 30px;
    width:120px;
`

export const ChangePWBtn = styled(Button)
    `
 text-align:center;
 margin: 30px 0 0 30px;
 width:120px;
`
export const Status = styled(Text)
    `
    
    margin-top: 20px;
    font-size:25px;
`
export const WithdrawalBtn = styled(Button)
    `
    text-align:center;
    margin: 30px 0 0 30px;
    width:120px;
`

