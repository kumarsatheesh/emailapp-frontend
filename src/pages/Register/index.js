import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import isEmpty from "../../lib/isEmpty";
import { createUser } from '../../actions/users';
import './style.css';

const initialFormValue = {
    name: "",
    email: "",
    phone: "",
    password: "",
    profileimage: ""

};
function Register() {
    const [formValue, setFormValue] = useState(initialFormValue);
    const [validateError, setValidateError] = useState({});

    const {
        name,
        email,
        phone,
        password,
        profileimage
    } = formValue;

    const handleFile = (event) => {
        event.preventDefault();
        const { id, files } = event.target;
        let formData = { ...formValue, ...{ [id]: files[0] } };
        setFormValue(formData);
    };

    const onChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        let formData = { ...formValue, ...{ [id]: value } };
        setFormValue(formData);
    };

    const register = async (e) => {
        e.preventDefault();
        const reqData = {
            name,
            email,
            mobilenumber: phone,
            password,
            profileimage
        }
        let { error } = await createUser(reqData);
        if (isEmpty(error)) {
            window.location = "/";
        } else {
            setValidateError(error);
        }
    }
    return (
        <Container>
            <Card style={{ width: '30rem', height: "auto" }}>
                <Card.Body>
                    <Card.Title>Registraion Form</Card.Title>
                    <Form onSubmit={register}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name"
                            className="mb-3"
                        >
                            <Form.Control id='name' value={name} onChange={onChange} placeholder="Your Name" />
                            {validateError.name && (
                                <span style={{ color: "red", fontSize: "10px" }}>
                                    {validateError.name}
                                </span>
                            )}
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Phone Number"
                            className="mb-3"
                        >
                            <Form.Control placeholder="Your mobile number" id='phone' onChange={onChange} value={phone} />
                            {validateError.phonenumber && (
                                <span style={{ color: "red", fontSize: "10px" }}>
                                    {validateError.phonenumber}
                                </span>
                            )}
                        </FloatingLabel>
                        <InputGroup className="mb-3">
                            <Form.Label className="sa_filelabel">Profile Image</Form.Label>
                            <Form.Control
                                placeholder="Profile Image"
                                aria-label="Profile Image"
                                aria-describedby="basic-addon2"
                                type="file"
                                onChange={handleFile}
                                id="profileimage"

                            />
                            {validateError.Photofile && (
                                <Form.Text className="text-muted" style={{ color: "red", fontSize: "10px" }}>
                                    {validateError.Photofile}
                                </Form.Text>

                            )}
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="username"
                                aria-label="username"
                                aria-describedby="basic-addon2"

                                id='email' value={email} onChange={onChange}
                            />
                            <InputGroup.Text id="basic-addon2">@email.com</InputGroup.Text>
                            {validateError.email && (
                                <Form.Text className="text-muted" style={{ color: "red", fontSize: "10px" }}>
                                    {validateError.email}
                                </Form.Text>

                            )}
                        </InputGroup>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" id='password' onChange={onChange} value={password} />
                            {validateError.password && (
                                <span style={{ color: "red", fontSize: "10px" }}>
                                    {validateError.password}
                                </span>
                            )}
                        </FloatingLabel>

                        <Button variant="primary" className="register_btn" type="submit" >
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Register;