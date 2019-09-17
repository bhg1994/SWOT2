import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const LectureRoomModal = () => {
  console.log("test");
  const [Lectureroom, setLectureroom] = useState("미가엘관");
  const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   setVisible(isvisible);
  // }, [isvisible]);

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div>
      <Modal
        title="강의실 정보"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{Lectureroom}</p>
      </Modal>
    </div>
  );
};

export default LectureRoomModal;
