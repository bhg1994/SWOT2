import styled from 'styled-components';
import {
    Form,
    Button
} from 'antd'

export const MasterEditForm = styled(Form)
`
    margin : 20px 0 20px 0;
    border : 1px solid #d9d9d9;
    padding : 20px;

    & > div {
        display:flex;
    }
`

export const LogoutBtn = styled(Button)
`
    margin-left:30px;
`