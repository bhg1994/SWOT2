import React, { useState, useCallback } from "react";
import {
  Tabs,
  Button,
  Modal,
  Form,
  Typography,
  Upload,
  Icon,
  message
} from "antd";
import LectureRoomList from "./LectureRoomList";
import {
  InputClassroom,
  InputClassroomCode,
  BuildingNumber,
  InputMaximum,
  AddBtn,
  CancelBtn,
  BuildingTabs,
  BuildingAddBtn
} from "../components/css/BuildingList";
import { useDispatch, useSelector } from "react-redux";
import { CREATEROOM_REQUEST } from "../reducers/room";

const { TabPane } = Tabs;
const { Text } = Typography;


export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const BuildingList = () => {

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");

  const [groupName, onChangegroupName] = useInput("");
  const [groupNo, setChangegroupNo] = useState("");
  const [roomNo, onChangeroomNo] = useInput("");
  const [total, setChangeTotal] = useState("");

  const onChangegroupNo = (value) => {
    setChangegroupNo(value);
  }

  const onChangeTotal = (value) => {
    setChangeTotal(value);
  }


  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: CREATEROOM_REQUEST,
      data: {
        groupName: groupName,
        groupNo: groupNo,
        roomNo: roomNo,
        total: total
      }
    })
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    headers: {
      authorization: "authorization-text"
    },
    onChange(info) {
      setImage(info.file.name);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList); ``
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    }
  };

  return (
    <>
      <Modal title="강의실 추가" visible={visible} footer={null}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Text type="secondary">건물 번호 : </Text>
            <BuildingNumber min={1} max={13}
              onChange={onChangegroupNo} />
          </Form.Item>
          <Form.Item>
            <InputClassroomCode addonBefore="강의실 코드" onChange={onChangeroomNo} />
          </Form.Item>
          <Form.Item>
            <InputClassroom addonBefore="강의실명" onChange={onChangegroupName} />
          </Form.Item>
          <Form.Item>
            <Text type="secondary" >최대 인원수 : </Text>
            <InputMaximum onChange={onChangeTotal} min={3} max={30} />
          </Form.Item>
          <Form.Item>
            <AddBtn htmlType="submit">추가</AddBtn>
            <CancelBtn type="danger" onClick={handleCancel}>
              취소
            </CancelBtn>
          </Form.Item>
        </Form>
      </Modal>
      <BuildingTabs defaultActiveKey="11">
        <TabPane tab="승연관" key="1">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가
          </BuildingAddBtn>
        </TabPane>
        <TabPane tab="일만관" key="2"></TabPane>
        <TabPane tab="월당관" key="3"></TabPane>
        <TabPane tab="나눔관" key="5"></TabPane>
        <TabPane tab="이천환관" key="6"></TabPane>
        <TabPane tab="새천년관" key="7"></TabPane>
        <TabPane tab="성미가엘성당" key="9"></TabPane>
        <TabPane tab="미가엘관" key="11">
          <BuildingAddBtn type="primary" onClick={showModal}>
            강의실 추가
          </BuildingAddBtn>
          <LectureRoomList />
        </TabPane>
      </BuildingTabs>
    </>
  );
};
export default BuildingList;
