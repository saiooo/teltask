import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar bg="light" className="mt-5">
        <Container>
          <Navbar.Brand>Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
