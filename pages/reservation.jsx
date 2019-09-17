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
        <div>
          <div style={{ marginBottom: "50px", textAlign: "center" }}>
            <img src="static/images/Reservation_logo.png" />
          </div>
        </div>
        <div
          style={{
            margin: "0 auto"
          }}
        >
          <SwotMap />
        </div>
      </Layout>
    </>
  );
};

export default studyboard;
