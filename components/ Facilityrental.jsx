import React, { useState } from "react";
import SuccessResult from './SuccessResult'

import {
  Form,
  Comment,
  Input,
  Button,
  Checkbox,
  Typography,
  TimePicker,
  Divider
} from "antd";

const { Text } = Typography;
const { TextArea } = Input;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function oncontentChange(content){
  setContent(e.target.value);
}


const Facilityrental = () => {
  const [content,setContent] = useState('');

  const oncontentChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  }
  

  return (
    <>
      <section style={{ width:"50%", marginTop: "50px", border: "1px solid gray" }}>
        <div style={{marginTop:"20px"}}>
        <Text strong style={{ fontSize: "18px" }}>
          시설 대여 신청 : 대여 하고자 하는 양식을 입력해 주세요
        </Text>
        </div>
        <Divider />
        <Form style={{ padding: 10 }} onSubmit={handleSubmit}>
          <Text type="secondary" style={{ fontSize: "18px" }}>
            대여 시간
          </Text>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <Form.Item
              style={{ display: "flex" }}
              // validateStatus="error"
              label="Start"
            >
              <TimePicker style={{ marginRight: "20px" }} />
            </Form.Item>
            <Form.Item
              style={{ display: "flex" }}
              // validateStatus="error"
              label="End"
            >
              <TimePicker />
            </Form.Item>
          </div>

          <Text type="secondary" style={{ fontSize: "18px" }}>
            대여 사유 / 대유 인원 목록
          </Text>
          <Form.Item style={{ marginTop: "20px" }}>
            <TextArea  value={content} onChange={oncontentChange} autosize={{ minRows: 4, maxRows: 8 }} style={{ width: "50%" }} rows={4} placeholder="강의실 대여 신청자는 학번과 이름을 모두 기재해 주시기 바랍니다. 인원과 차이가 있을 시, 대여 반려의 사유가 됩니다." />
          </Form.Item>

          <Divider />
          <Form.Item style={{ marginTop: "20px" }}>
          <Input addonBefore="신청자 전화번호" style={{width:"50%"}} />
          </Form.Item>
          <Form.Item >
          <Text type="secondary">시설물 대여 규정에 동의합니다 : </Text><Checkbox /> 
          </Form.Item>
          <Form.Item style={{marginLeft:"30px"}}>
          <Button htmlType="submit">대여 신청</Button>
          </Form.Item>
        </Form>
      </section> 
    </>
  );
};
export default Facilityrental;
