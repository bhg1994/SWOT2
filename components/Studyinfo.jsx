import React from "react";
import { Card } from "antd";
const Studyinfo = ({ studyInfo }) => {
  return (
    <>
      <Card style={{ marginBottom: "30px" }} hoverable>
        <p>studyimg</p>
        <p>lectureroom</p>
        <p>studytitle</p>
        <p>roominfo</p>
        <p>studytitle</p>
        <p>studydate</p>
        <p>minimum</p>
        <p>maximum</p>
        <p>time</p>
        <p>studypurpose</p>
      </Card>
    </>
  );
};

export default Studyinfo;
