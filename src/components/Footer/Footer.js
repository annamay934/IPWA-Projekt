import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./../../index.css";

const Footer = () => {
  return (
    <Card className="my-footer">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <Link to="/privacy">Datenschutz</Link>
        </Card.Text>
        <Card.Text>
          <Link to="/imprint">Impressum</Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
};

export default Footer;
