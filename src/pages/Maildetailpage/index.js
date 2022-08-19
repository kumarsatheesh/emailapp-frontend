import React, { useState, useEffect } from 'react';
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { mailDetail } from '../../actions/users';
import { useParams } from "react-router-dom";
import config from '../../lib/config';
import Sidebar from '../../components/Sidebar';
import Moment from 'react-moment';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
export default function MaildetailPage() {
    const [emailDetail, setEmailDetail] = useState({});
    let { id } = useParams();
    const userData = async () => {
        const emails = await mailDetail(id);
        if (emails.success) {
            setEmailDetail(emails.userdata)
        }
    }

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

    useEffect(() => {
        userData(id);
    }, [])
    return (
        <>
            <Sidebar />
            <Row className="justify-content-md-center" style={{ background: "white" }}>
                <Col xs lg="1"></Col>
                <Col xs lg="9">
                    {emailDetail ? <div className="detailId" style={{ background: "white" }}>
                        <h1>{emailDetail.subject}</h1>
                        <Card>
                            <Card.Body>
                                <Image
                                    width="50"
                                    rounded
                                    src={emailDetail.fromimage ? config.API + "/images/user/" + emailDetail.fromimage : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                />
                                {"  "}{emailDetail.fromuser}
                                <span class="hi">{dateFormater(emailDetail.createdate)}</span>
                                <div>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={"bottom"}
                                        placement={"bottom"}
                                        overlay={
                                            <Popover id={`popover-positioned-${"bottom"}`}>
                                                <Popover.Header as="h3">More Details</Popover.Header>
                                                <Popover.Body>
                                                    <p><strong>from:</strong> {emailDetail.fromuser + "  " + emailDetail.from}</p>
                                                    <p><strong>to:</strong> {emailDetail.touser + "  " + emailDetail.to}</p>
                                                    <p><strong>Date:</strong> {dateFormater(emailDetail.createdate)}</p>
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Button className="popoverbtn">more...</Button>
                                    </OverlayTrigger>
                                </div>
                            </Card.Body>
                        </Card>
                        <p className="sa_message">{emailDetail.message}</p>
                    </div> : <h1>Something Went Wrong</h1>
                    }
                </Col>
            </Row >
        </>
    );
}
