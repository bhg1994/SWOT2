import React, { useState } from "react";
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
  InputMaximum,
  AddBtn,
  CancelBtn,
  BuildingTabs,
  BuildingAddBtn
} from "../components/css/BuildingList";

const { TabPane } = Tabs;
const { Text } = Typography;

const BuildingList = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");

  const showModal = () => {
    setVisible(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setVisible(false);
    console.log(image);
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
        console.log(info.file, info.fileList);
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
            <InputClassroomCode addonBefore="강의실 코드" />
          </Form.Item>
          <Form.Item>
            <InputClassroom addonBefore="강의실명" />
          </Form.Item>
          <Form.Item>
            <Text type="secondary">최대 인원수 : </Text>
            <InputMaximum min={3} max={30} defaultVAlue={3} />
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
        <TabPane tab="승연관" key="1"></TabPane>
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
