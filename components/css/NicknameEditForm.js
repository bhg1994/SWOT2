import styled from 'styled-components';
import {
    Form,
    Button,
    Input
} from "antd";

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
    margin-left:30px;
`

export const InputNickname = styled(Input)
`
    margin-top:50px;
`

export const UpdateBtn = styled(Button)
`
    margin-top:20px;
    width:100px;
`