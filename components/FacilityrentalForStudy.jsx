import React, { useState, useCallback, useEffect } from "react";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Divider,
  Modal,
  InputNumber
} from "antd";
import { FormWrapper, Section, ErrorMessage } from "./css/Facilityrental";
import { useDispatch, useSelector } from "react-redux";
import { RESERVATION_REQUEST } from "../reducers/room";
import { STUDY_CONFIRM_REQUEST } from "../reducers/study";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const { Text } = Typography;
const { TextArea } = Input;

var me;

const FacilityrentalForStudy = () => {
  const { selectedRoom, studyReservationData } = useSelector(
    state => state.room
  );

  const userparser = (applications, users) => {
    let names = [];
    let content = "";
    applications.forEach(application => {
      for (let i = 0; i < users.length; i++) {
        if (application.userId === users[i].id) {
          let name = users[i].studentId + " " + users[i].name;
          names.push(name);
        }
      }
    });
    names.forEach(name => {
      content = content + name + "\n";
    });
    return content;
  };

  let names = userparser(
    studyReservationData.applications,
    studyReservationData.users
  );

  const [content, setContent] = useState("");
  const [visible, setVisible] = useState(false);
  const [maximum, setMaximum] = useState(
    studyReservationData.applications.length + 1
  );
  const [phone, setPhone] = useState(0);
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);
  const [reason, onChangeReason] = useInput(
    names + studyReservationData.boards.body
  );

  const dispatch = useDispatch();

  const { sTime } = useSelector(state => state.room);
  const { eTime } = useSelector(state => state.room);
  const { date } = useSelector(state => state.room);

  var start;
  var end;
  if (!sTime) start = "시간을 선택하시오";
  else start = sTime + " 시";

  if (!eTime) end = "시간을 선택하시오";
  else end = eTime + " 시";

  var stId;
  var stName;

  useEffect(() => {
    me = JSON.parse(localStorage.getItem("myInfo"));
    setPhone(me.phone);
  }, []);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChangeMaximum = value => {
    setMaximum(value);
  };

  const onChangePhone = e => {
    setPhone(e.target.value);
  };

  const oncheckChange = e => {
    // e.target -> 내가 체크박스를 눌렀을 때 checked가 true로 됨
    if (e.target.checked) setCheck(true);
    else setCheck(false);
  };

  const reservationRequest = () => {
    if ([reason, phone].includes("") || !check) {
      setError("빈칸을 모두 채워주세요.");
      return;
    }
    setError(null);
    setVisible(true);

    const token = localStorage.getItem("accessToken");
    stId = JSON.parse(localStorage.getItem("myInfo")).studentId;
    stName = JSON.parse(localStorage.getItem("myInfo")).name;
    dispatch({
      type: STUDY_CONFIRM_REQUEST,
      data: {
        id: studyReservationData.boards.id,
        token: token
      }
    });
    dispatch({
      type: RESERVATION_REQUEST,
      data: {
        reason,
        maximum,
        phone,
        selectedRoom,
        token,
        startTime: sTime,
        endTime: eTime,
        date,
        stId,
        stName
      }
    });
  };

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
          <Form>
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
                min={1}
                max={30}
                defaultValue={studyReservationData.boards.total}
                style={{ width: "130px" }}
              />
            </Form.Item>
            <Divider />
            <Form.Item style={{ marginTop: "20px" }}>
              <Input
                addonBefore="신청자 전화번호"
                onChange={onChangePhone}
                style={{ width: "50%" }}
                value={phone}
              />
            </Form.Item>
            <Form.Item>
              <Text type="secondary">시설물 대여 규정에 동의합니다 : </Text>
              <Checkbox checked={check} onChange={oncheckChange} />
            </Form.Item>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Form.Item>
              <Button onClick={reservationRequest}>대여 신청</Button>
            </Form.Item>

            {/* <Form.Item>
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
            </Form.Item> */}
          </Form>
        </Section>
      </FormWrapper>
    </>
  );
};
export default FacilityrentalForStudy;
