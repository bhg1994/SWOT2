import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Table,
  Pagination
} from "antd";

const { Column, ColumnGroup } = Table;
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
    title: "이름",
    dataIndex: "name"
  },
  {
    title: "날짜",
    dataIndex: "date"
  },
  {
    title: "조회수",
    dataIndex: "views"
  },
  {
    title: "삭제",
    dataIndex: "button",
    render: text => <a>{text}</a>
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
    button: "삭제"
  },
  {
    key: "2",
    number: "2",
    title: "제목2",
    name: "방효근",
    date: "2019년 9월 24일",
    views: "24",
    button: "삭제"
  },
  {
    key: "3",
    number: "3",
    title: "제목3",
    name: "박혜린",
    date: "2019년 9월 26일",
    views: "14",
    button: "삭제"
  },
  {
    key: "4",
    number: "4",
    title: "제목4",
    name: "서주은",
    date: "2019년 9월 29일",
    views: "29",
    button: "삭제"
  }
];

function handleChange(value) {
  console.log(`selected ${value}`);
}

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

const studyboard = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ marginRight: "110px", textAlign: "center" }}>
          <img src="static/images/notification_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div>
            <Icon type="bell" />
            <Text strong> 전체 30건</Text>
            <Text>(1/5)페이지</Text>
            <Button type="danger" size="large" style={{ marginLeft: "20px" }}>
              공지사항 추가
            </Button>
          </div>
          <div
            style={{
              width: 1200,
              textAlign: "right"
            }}
          >
            <Select
              defaultValue="검색조건"
              style={{ width: 120 }}
              onChange={handleChange}
            >
              <Option value="name">이름</Option>
              <Option value="lectureroom">강의실</Option>
              <Option value="date">날짜</Option>
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

export default studyboard;
