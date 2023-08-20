import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className="text-left">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          <Link className="navbar-brand1" to="/privacy">
            Datenschutz
          </Link>
        </Card.Text>
        <Card.Text>
          <Link className="navbar-brand1" to="/imprint">
            Impressum
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
};

export default Footer;
