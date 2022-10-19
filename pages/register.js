import React, { useState } from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ApiClients } from '../ApiConfig/apiClients';

function RegisterPage(props) {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const Register = async () => {
        await ApiClients.Clients.Register(userName, pass, email, phone)
    }

    return (
        <div id='registerPage'>
            <Container>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-userName">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setUserName(e.target.value)} value={userName}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-userName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-pass">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setPass(e.target.value)} value={pass}
                        placeholder="Passworld"
                        aria-label="Username"
                        aria-describedby="basic-pass"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-pass">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)} value={email}
                        placeholder="Email"
                        aria-label="Username"
                        aria-describedby="basic-pass"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-pass">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)} value={phone}
                        placeholder="Passworld"
                        aria-label="Username"
                        aria-describedby="basic-pass"
                    />
                </InputGroup>

                <Button onClick={() => Register()}>Register</Button>
            </Container>

        </div >
    );
}

export default RegisterPage;