import styled from 'styled-components';
import {
  Input,
  InputNumber,
  Button,
  Tabs
} from 'antd';

const {
  TabPane
} = Tabs;


export const BuildingNumber = styled(InputNumber)
  `
width:37%;
`

export const InputClassroomCode = styled(Input)
  `
   width:50%;
  `

export const InputClassroom = styled(Input)
  `
   width:50%;
  `

export const InputMaximum = styled(InputNumber)
  `
    width: 50%;
  `

export const AddBtn = styled(Button)
  `
    margin-right:20px;
    background-color:black;
    color:white;
  `

export const CancelBtn = styled(Button)
  ``

export const BuildingTabs = styled(Tabs)
  `
    margin-top:70px;
    text-align:center;
  `

export const BuildingAddBtn = styled(Button)
  `margin-bottom:20px;
   text-align:right;
  `