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
  `
  width: 55px;
  `

export const BuildingTabs = styled(Tabs)
  `
    margin-top:70px;
    text-align:center;
  `

export const BuildingAddBtn = styled(Button)
  `
  width: 100px;
  margin-bottom:20px;
   text-align:right;
  `

export const FileWrapper =styled.div`
  label{
    display: inline-block; 
    padding: .5em .75em; 
    color: #fff; 
    font-size: inherit; 
    line-height: normal; 
    vertical-align: middle; 
    background-color: #5cb85c; 
    cursor: pointer; 
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2; 
    border-radius: .25em;
    transition: background-color 0.2s;

    &:hover{
      background-color: #6ed36e;
    }
    &:active{
      background-color: #367c36;
    }
  }

    input[type="file"] { /* 파일 필드 숨기기 */ 
    position: absolute;
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip:rect(0,0,0,0); 
    border: 0;
    }
`