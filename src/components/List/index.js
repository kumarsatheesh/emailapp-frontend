import "./styles.css";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

import Moment from 'react-moment';
export default function List({ emailList, type }) {
  const navigate = useNavigate();
  const dateFormater = (date) => {
    let start = new Date((new Date(date)).setHours(0, 0, 0, 0));
    if (new Date() > start) {
      return (<Moment format="HH:mm">
        {date}
      </Moment>)
    } else {
      return (<Moment format="MMM D">
        {date}
      </Moment>)
    }
  }
  return (
    <Row className="justify-content-md-center" style={{ background: "white" }}>
      <Col xs lg="1"></Col>
      <Col xs lg="9">
        {emailList.length ? <ListGroup variant="flush">
          {emailList.map(e => <ListGroup.Item key={e._id} onClick={() => navigate("/maildetail/" + e._id)}>
            <Row>
              <Col className="listname">
                {type == "sent" ? "To:" + e.touser : e.fromuser}
              </Col>
              <Col className="listname">
                {e.subject > 15 ? e.subject : e.subject.substring(0, 15) + "..."}
              </Col>
              <Col className="listname">
                {e.message > 15 ? e.message : e.message.substring(0, 15) + "..."}
              </Col>
              <Col className="listname">
                {dateFormater(e.createdate)}
              </Col>
            </Row>
          </ListGroup.Item>)}

        </ListGroup> : <h1>Empty </h1>}
      </Col>
    </Row >
  );
}
