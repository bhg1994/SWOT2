import styled from 'styled-components';
import {
    Typography,
    Icon
} from 'antd';

const { Text } = Typography;

export const FormWrapper = styled.div`
    margin: auto;
    width:60%;
`

export const Section = styled.section`
    margin-top:50px;
    border:1px solid gray;
    text-align:center;
`

export const InspectionIcon = styled(Icon)` 
    margin-top:46.5px;
    margin-right:30px;
    font-size: 25px;
`

export const MainTitle = styled(Text)`
    margin-left:10px;
    font-size:18px;
`

export const SubTitle = styled(Text)`
    font-size:18px;
    color:gray;
`

export const FormItemWrapper = styled.div`
    display:flex;
    margin-top:20px;
    justify-content:center;
`

/** 에러 컴포넌트 스타일*/
export const ErrorMessage = styled.div`
    color:red;
    font-size: 15px;
    margin-bottom:10px;
`

export const DesTimeWrapper = styled.div`
    width:20px;
    display:flex;

    &:hover div{
        display:inline-block;
    }

    .arrow_box {
    display: none;
    position: absolute;
    width: 730px;
    height:170px;
    margin:-120px 0 0 -730px;
	background-image: url("static/images/gif/dateSelect.gif");
	border: 4px solid #c2e1f5;
    }
`

export const DesReasonWrapper = styled.div`
    width:20px;
    margin-top:60px;
    display:flex;

    &:hover div{
        display:inline-block;
    }

    .arrow_box {
    display: none;
    position: absolute;
    width: 300px;
    height:200px;
    margin: -50px 0 0 30px;
	background-image: url("static/images/gif/reasonSelect.png");
    }
`

export const TotalWrapper = styled.div`
     width:20px;
    margin-top:60px;
    display:flex;

    &:hover div{
        display:inline-block;
    }

    .arrow_box {
    display: none;
    position: absolute;
    width: 250px;
    height:105px;
    margin: 10px 0 0 30px;
	background-image: url("static/images/gif/totalSelect.gif");
	border: 4px solid #c2e1f5;
    }
`