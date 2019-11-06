import React, { useState } from "react";
import { Button, Typography, Divider, Comment, Avatar, Form, List, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_COMMENT_REQUEST, CREATE_COMMENT_REQUEST } from "../reducers/comment";


const { TextArea } = Input;
const { Text, Title } = Typography;

const studyapply = () => {

    return (
        <>
            <div style={{ margin: "50px" }}>
                <Divider style={{ border: "20px" }} />
                <Text type="danger" style={{ fontSize: "25px" }}>
                    SWOT &nbsp; &nbsp;
                    </Text>

                <div style={{ marginTop: "20px" }}>
                    <Title level={2}>[제목] : </Title>
                    <Text style={{ fontSize: "15px" }}>Date</Text>
                </div>
                <Divider />
            </div>
        </>
    )
}

export default studyapply;