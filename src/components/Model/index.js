import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import isEmpty from "../../lib/isEmpty";
import { sendMail } from "../../actions/users";
const initialFormValue = {
  to: "",
  subject: "",
  message: "",
};
export default function Model({ show, handleClose, onMailsend }) {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [validateError, setValidateError] = useState({});

  const { to, subject, message } = formValue;

  const onChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    let formData = { ...formValue, ...{ [id]: value } };
    setFormValue(formData);
  };

  const sendMailTrigger = async (e) => {
    e.preventDefault();
    const reqData = {
      to,
      subject,
      message,
    };
    let { error } = await sendMail(reqData);
    console.log("error", error);
    if (isEmpty(error)) {
      onMailsend();
      handleClose();
      setFormValue([]);
    } else {
      setValidateError(error);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compose</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendMailTrigger}>
            <Form.Group className="smb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>To</Form.Label>
              <Form.Control id='to' value={to} onChange={onChange} type="email" placeholder="username@email.com" />
              {validateError.to && (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {validateError.to}
                </span>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Subject</Form.Label>
              <Form.Control id='subject' value={subject} onChange={onChange} type="text" placeholder="Subject" />
              {validateError.subject && (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {validateError.subject}
                </span>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Compose email</Form.Label>
              <Form.Control id='message' value={message} onChange={onChange} as="textarea" rows={3} />
              {validateError.message && (
                <span style={{ color: "red", fontSize: "10px" }}>
                  {validateError.message}
                </span>
              )}
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">Send</Button>
          </Form>
        </Modal.Body>
        \
      </Modal>
    </>
  );
}
