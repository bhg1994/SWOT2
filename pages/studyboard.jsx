import {
  Layout,
  Icon,
  Typography,
  Input,
  Select,
  Divider,
  Button,
  Row,
  Col,
  Card,
  Pagination
} from "antd";

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const studyboard = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ margin: "0 110px 50px 0", textAlign: "center" }}>
          <img src="static/images/studyboard_logo.png" />
        </div>
        <header style={{ display: "flex" }}>
          <div>
            <Icon type="bell" />
            <Text strong> 전체25건</Text>
            <Text>(1/5)페이지</Text>
            <Button type="primary" style={{ marginLeft: "20px" }}>
              스터디 추가
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
        <div style={{ marginLeft: "130px", padding: "30px" }}>
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="September 16, 2019"
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="September 17, 2019"
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="September 18, 2019"
              >
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <div
          style={{
            marginLeft: "130px",
            padding: "30px"
          }}
        >
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Card style={{ width: 300, height: 300 }} title="October 23,2019">
                Card content
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="October 24, 2019"
              >
                Card content
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{ width: 300, height: 300 }}
                title="October 25, 2019"
              >
                Card content
              </Card>
            </Col>
          </Row>
        </div>
        <Pagination
          style={{ textAlign: "center" }}
          defaultCurrent={6}
          total={50}
        />
      </Layout>
    </>
  );
};

export default studyboard;
