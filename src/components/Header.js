import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Header</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
