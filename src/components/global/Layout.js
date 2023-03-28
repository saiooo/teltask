import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={3}>
            <Sidebar />
          </Col>
          <Col sm={9}>Contentas kazkoks dinaminis</Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
