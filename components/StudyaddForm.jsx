import React from "react";
import { Modal, Button, Input } from "antd";

// studytitle , studydate , studypurpose, minimum, maximum, time
const StudyaddForm = () => {
  const [visible, setVisible] = useState(false);

  const handleOk = () => {
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="스터디 추가"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default StudyaddForm;
