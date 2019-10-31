import React, { useState } from "react";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  TimePicker,
  Divider,
  Modal,
  InputNumber
} from "antd";
import { FormWrapper, Section } from "../components/css/Facilityrental";
import { useDispatch, useSelector } from "react-redux";
import {useInput} from "../pages/login";
import { RESERVATION_REQUEST } from "../reducers/room";



const { Text } = Typography;
const { TextArea } = Input;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function oncontentChange(content) {
  setContent(e.target.value);
}

const Facilityrental = () => {
  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);
  const [maximum, setMaximum] = useState("");

  const [reason, onChangeReason] = useInput("");
  const [phone, onChangePhone] = useInput("");

  const dispatch = useDispatch();
  const {selectedRoom} = useSelector(state => state.room);
  const {startTime} = useSelector(state => state.room);
  const {endTime} = useSelector(state => state.room);
  const {date} = useSelector(state => state.room);

  var start;
  var end; 
  if(!startTime)
    start = "시간을 선택하시오";
  else
    start = startTime+" 시";
    
  if(!endTime)
    end = "시간을 선택하시오";
  else
    end = endTime+" 시";

  




  const oncontentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setVisible(true);
    console.log(content);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChangeMaximum = value => {
    setMaximum(value);
  };

  const reservationRequest = () => {
    const token = localStorage.getItem("accessToken");
    
    dispatch({
      type: RESERVATION_REQUEST,
      data: {
        reason,
        maximum,
        phone,
        selectedRoom,
        token,
        startTime,
        endTime,
        date,
      }
    });
  }
  

  return (
    <>
      <FormWrapper>
        <Section>
          <div style={{ marginTop: "20px" }}>
            <Text strong style={{ marginLeft: "10px", fontSize: "18px" }}>
              시설 대여 신청 : 대여 하고자 하는 양식을 입력해 주세요
            </Text>
          </div>
          <Divider />
          <Form style={{ padding: 10 }} onSubmit={handleSubmit}>
            <Text type="secondary" style={{ fontSize: "18px" }}>
              대여 시간
            </Text>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                justifyContent: "center"
              }}
            >
              <Form.Item style={{ display: "flex" }} label="Start">
                <Text style={{ marginRight: "100px" }}>{start}</Text>
              </Form.Item>
              <Form.Item style={{ display: "flex" }} label="End">
                <Text>{end}</Text>
              </Form.Item>
            </div>

            <Text type="secondary" style={{ fontSize: "18px" }}>
              대여 사유
            </Text>
            <Form.Item style={{ marginTop: "20px" }}>
              <TextArea
                value={reason}
                onChange={onChangeReason}
                autosize={{ minRows: 4, maxRows: 8 }}
                style={{ width: "50%" }}
                rows={4}
                placeholder="강의실 대여 신청자는 학번과 이름을 모두 기재해 주시기 바랍니다. 인원과 차이가 있을 시, 대여 반려의 사유가 됩니다."
              />
            </Form.Item>
            <Text type="secondary" style={{ fontSize: "18px" }}>
              인원 수
            </Text>
            <Form.Item>
              <InputNumber
                id="maximum"
                onChange={onChangeMaximum}
                min={3}
                max={30}
                defaultVAlue={3}
                style={{ width: "130px" }}
              />
            </Form.Item>
            <Divider />
            <Form.Item style={{ marginTop: "20px" }}>
              <Input addonBefore="신청자 전화번호" onChange={onChangePhone} style={{ width: "50%" }} />
            </Form.Item>
            <Form.Item>
              <Text type="secondary">시설물 대여 규정에 동의합니다 : </Text>
              <Checkbox />
            </Form.Item>
            <Form.Item>
              <Button onClick={reservationRequest}>대여 신청</Button>
            </Form.Item>

            <Form.Item>
              <Modal
                title="예약 신청 완료"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>예약신청이 완료 되었습니다.</p>
                <p>
                  예약 현황은 마이페이지에서 확인이 가능하며 3일 이내에 처리가
                  완료될 예정입니다.
                </p>
              </Modal>
            </Form.Item>
          </Form>
        </Section>
      </FormWrapper>
    </>
  );
};
export default Facilityrental;
