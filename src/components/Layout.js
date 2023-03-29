import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import "./../assets/css/Utils.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col sm={3}>
            <Sidebar />
          </Col>
          <Col sm={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
