import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Table,
  Row,
  Col,
  Card,
  Pagination,
  Tag
} from "antd";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: "글번호",
    dataIndex: "number"
  },
  {
    title: "제목",
    dataIndex: "title",
    render: text => <a>{text}</a>
  },
  {
    title: "작성자",
    dataIndex: "name"
  },
  {
    title: "등록일",
    dataIndex: "date"
  },
  {
    title: "조회수",
    dataIndex: "views"
  },
  {
    title: "상태",
    key: "status",
    dataIndex: "status",
    render: status => (
      <span>
        {status.map(status => {
          let color = status === "답변완료" ? "geekblue" : "green";
          if (status === "답변대기") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={status}>
              {status}
            </Tag>
          );
        })}
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    number: "1",
    title: "제목1",
    name: "김성진",
    date: "2019년 9월 20일",
    views: "20",
    status: ["답변대기"]
  },
  {
    key: "2",
    number: "2",
    title: "제목2",
    name: "방효근",
    date: "2019년 9월 24일",
    views: "24",
    status: ["답변완료"]
  },
  {
    key: "3",
    number: "3",
    title: "제목3",
    name: "박혜린",
    date: "2019년 9월 26일",
    views: "14",
    status: ["답변완료"]
  },
  {
    key: "4",
    number: "4",
    title: "제목4",
    name: "서주은",
    date: "2019년 9월 29일",
    views: "29",
    status: ["답변대기"]
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};

const questionAnswer = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginRight: "110px", textAlign: "center" }}>
          <img src="static/images/Q&A_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div style={{ width: "150px" }}>
            <Icon type="bell" />
            <Text strong> 전체20건</Text>
            <Text>(1/4)페이지</Text>
          </div>
          <Button type="primary" style={{ marginLeft: "20px" }}>
            글쓰기
          </Button>
          <div
            style={{
              width: 1200,
              textAlign: "right"
            }}
          >
            <Select
              defaultValue="검색조건"
              style={{ width: 120 }}
              //   onChange={handleChange}
            >
              <Option value="name">제목</Option>
              <Option value="lectureroom">작성자</Option>
            </Select>
            <Search style={{ width: 200, marginLeft: "10px" }} enterButton />
          </div>
        </header>
        <Divider />
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={false}
        ></Table>
        <Pagination
          style={{ textAlign: "center", marginTop: "50px" }}
          defaultCurrent={6}
          total={50}
        />
      </Layout>
    </>
  );
};

export default questionAnswer;
