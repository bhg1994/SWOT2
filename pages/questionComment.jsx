import React, { useState, useEffect } from "react";
import { Button, Typography, Divider, Comment, Avatar, Form, List, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
const { TextArea } = Input;

const { Text, Title } = Typography;


const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
);

const Editor = ({ onChange, onSubmit, value }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" onClick={onSubmit} type="primary">
                댓글 작성
        </Button>
        </Form.Item>
    </div>
);

const questionComment = () => {

    const [input, setInput] = useState("");
    const [comments, setComments] = useState([]);
    const [me, setMe] = useState([]);
    const { selectedQuestion } = useSelector(state => state.question);

    useEffect(() => {
        let myInfo = JSON.parse(localStorage.getItem("myInfo"));
        setMe(myInfo);
    }, [])


    console.log(selectedQuestion);


    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        console.log(e);
    }

    return (
        <>
            <Divider style={{ border: "20px" }} />
            <Text type="danger" style={{ fontSize: "25px" }}

            >
                SWOT &nbsp; &nbsp;
            </Text>
            <div style={{ marginTop: "20px" }}>
                <Title level={2}>[제목] : {selectedQuestion.title}</Title>
                <Text style={{ fontSize: "15px" }}>{selectedQuestion.createdDate}</Text>
            </div>
            <Divider />
            <div style={{ height: "400px" }}>{selectedQuestion.body}</div>

            <Divider />

            <div>
                <Comment
                    avatar={
                        <Avatar style={{ backgroundColor: "red" }}>{me.name}</Avatar>
                    }
                    content={
                        <Editor
                            onChange={handleChange}
                            value={input}
                            onSubmit={handleSubmit}
                        />
                    }
                />
            </div>

        </>
    )
}

export default questionComment;