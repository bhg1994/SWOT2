import React, { useState, useCallback, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  Modal,
  InputNumber,
  Typography
} from "antd";
import {
  FormWrapper,
  Section,
  InspectionIcon,
  MainTitle,
  SubTitle,
  FormItemWrapper,
  ErrorMessage,
  DesTimeWrapper,
  DesReasonWrapper,
  TotalWrapper
} from "../components/css/Facilityrental";
import { useDispatch, useSelector } from "react-redux";
import { RESERVATION_REQUEST } from "../reducers/room";

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const { Text } = Typography;
const { TextArea } = Input;

const Facilityrental = () => {
  const [visible, setVisible] = useState(false);
  const [maximum, setTotal] = useState("");
  const [phone, setPhone] = useState(0);
  const [reason, onChangeReason] = useInput("");
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const { selectedRoom } = useSelector(state => state.room);
  const { startTime } = useSelector(state => state.room);
  const { endTime } = useSelector(state => state.room);
  const { date } = useSelector(state => state.room);

  let me;
  let start = "시간을 선택하시오";
  let end = "시간을 선택하시오";
  let stId = 0;
  let stName = "";

  if (!startTime) start = "시간을 선택하시오";
  else start = startTime + " 시";

  if (!endTime) end = "시간을 선택하시오";
  else end = endTime + " 시";

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

  const onChangeTotal = value => {
    setTotal(value);
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
    if ([reason, startTime, endTime, maximum, phone].includes("") || !check) {
      setError("빈칸을 모두 채워주세요.");
      return;
    }
    setError(null);
    setVisible(true);
    const token = localStorage.getItem("accessToken");
    stId = JSON.parse(localStorage.getItem("myInfo")).studentId;
    stName = JSON.parse(localStorage.getItem("myInfo")).name;

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
            <MainTitle strong>
              시설 대여 신청 : 대여 하고자 하는 양식을 입력해 주세요
            </MainTitle>
          </div>
          <Divider />

          <Form>
            <section style={{ display: "flex" }}>
              <section style={{ width: "100%" }}>
                <SubTitle>대여 시간</SubTitle>
                <FormItemWrapper>
                  <Form.Item style={{ display: "flex" }} label="Start">
                    <Text style={{ marginRight: "100px" }}>{start}</Text>
                  </Form.Item>
                  <Form.Item style={{ display: "flex" }} label="End">
                    <Text>{end}</Text>
                  </Form.Item>
                </FormItemWrapper>
                <SubTitle>대여 사유</SubTitle>
                <Form.Item>
                  <TextArea
                    value={reason}
                    onChange={onChangeReason}
                    autosize={{ minRows: 4, maxRows: 8 }}
                    rows={4}
                    placeholder="강의실 대여 신청자는 학번과 이름을 모두 기재해 주시기 바랍니다. 인원과 차이가 있을 시, 대여 반려의 사유가 됩니다."
                    style={{ marginTop: "20px", width: "50%" }}
                  />
                </Form.Item>
                <SubTitle>인원 수</SubTitle>

                <Form.Item>
                  <InputNumber
                    id="maximum"
                    onChange={onChangeTotal}
                    min={3}
                    max={30}
                    defaultVAlue={3}
                    style={{ width: "130px" }}
                  />
                </Form.Item>

                <Form.Item>
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
              </section>
              <section>
                {startTime && endTime ? (
                  <div>
                    <InspectionIcon
                      type="check-circle"
                      theme="twoTone"
                      twoToneColor="#52c41a"
                    />
                  </div>
                ) : (
                  <DesTimeWrapper>
                    <div className="arrow_box" />
                    <InspectionIcon
                      type="close-circle"
                      theme="twoTone"
                      twoToneColor="#eb2f96"
                    />
                  </DesTimeWrapper>
                )}
                {reason ? (
                  <div>
                    <InspectionIcon
                      type="check-circle"
                      theme="twoTone"
                      twoToneColor="#52c41a"
                    />
                  </div>
                ) : (
                  <DesReasonWrapper>
                    <div className="arrow_box"></div>
                    <InspectionIcon
                      type="close-circle"
                      theme="twoTone"
                      twoToneColor="#eb2f96"
                    />
                  </DesReasonWrapper>
                )}
                {maximum ? (
                  <div>
                    <InspectionIcon
                      type="check-circle"
                      theme="twoTone"
                      twoToneColor="#52c41a"
                      style={{ marginTop: "100px" }}
                    />
                  </div>
                ) : (
                  <TotalWrapper>
                    <InspectionIcon
                      type="close-circle"
                      theme="twoTone"
                      twoToneColor="#eb2f96"
                    />
                    <div className="arrow_box"></div>
                  </TotalWrapper>
                )}
                {phone ? (
                  <div>
                    <InspectionIcon
                      type="check-circle"
                      theme="twoTone"
                      twoToneColor="#52c41a"
                    />
                  </div>
                ) : (
                  <div>
                    <InspectionIcon
                      type="close-circle"
                      theme="twoTone"
                      twoToneColor="#eb2f96"
                    />
                  </div>
                )}
              </section>
            </section>

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
