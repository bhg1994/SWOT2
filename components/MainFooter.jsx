import { Layout, Row, Col } from "antd";
const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Row>
        <Col span={12}>
          전화번호 02-2610-4114 <br /> SWOT, 서울특별시 구로구 오류2동 연동로
          320 <br /> Seoul, KR 08359
        </Col>
        <Col span={12}>
          <br />
          저작권 보호 © SWOT Companies Inc. 모든 권리 유보
        </Col>
      </Row>
    </Footer>
  );
};

export default MainFooter;
