import {
  Layout,
  Select,
  Divider,
  Button,
  Pagination,
  Row,
  Col,
  Card
} from "antd";
import { LectureRoominfo } from "../components";
import { SwotMap } from "../containers";

const studyboard = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div>
          <Row>
            <Col span={15}>
              <div style={{ marginBottom: "50px", textAlign: "center" }}>
                <img src="static/images/Reservation_logo.png" />
              </div>
              <Card
                style={{ marginRight: "30px" }}
                title="강의실 예약현황"
                hoverable
              >
                <LectureRoominfo />
              </Card>
              <Pagination
                style={{ marginTop: "30px", textAlign: "center" }}
                defaultCurrent={6}
                total={50}
              />
            </Col>
            <Col span={9}>
              <SwotMap />
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default studyboard;
