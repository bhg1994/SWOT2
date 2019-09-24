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
import { ReservationRoominfo, LectureRoominfo } from "../components";
import SwotMap from "../containers/SwotMap";

const studyboard = () => {
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <div style={{ margin: "30px 110px 20px 0", textAlign: "center" }}>
          <img src="static/images/Reservation_logo.png" />
        </div>

        <div
          style={{
            margin: "auto"
          }}
        >
          <div style={{ marginRight: "100px" }}>
            <SwotMap />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default studyboard;
