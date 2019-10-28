import styled from 'styled-components';
import {
    Button,
    Typography
} from "antd";

const { Text } = Typography;

export const ReservationTimeWrapper = styled.div`
    /* margin-top:50px; */
    width:100%;
    margin: 0 auto;

`

export const Hoursofuse = styled(Text)`
    font-size:20px;
`
export const Availabletime = styled(Text)`
    float:right;
    font-size:20px;
    color: gray;
`

export const SelecttimeWrapper = styled.div`
    margin-top:30px;
`
export const SelecttimeBtn = styled(Button)`
    background-color:white;
    text-align:center;
    width:80px;
    height: 40px;
    margin: 10px 0 0 10px;
    border-radius:5px;
`
