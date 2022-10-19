import { useState } from "react";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";

function RegisterAdmin() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [key, setKey] = useState("");
    const handleRegister = async () => {
        alert(userName)
    };
    return (
        <div id="admin_register">
            <Container>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-userName">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-userName"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-passworld">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        placeholder="Passworld"
                        aria-label="Passworld"
                        aria-describedby="basic-passworld"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-email">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="basic-email"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-phone">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        placeholder="Email"
                        aria-label="email"
                        aria-describedby="basic-phone"
                    />
                </InputGroup>

                <InputGroup>
                    <InputGroup.Text id="basic-key">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setKey(e.target.value)}
                        value={key}
                        placeholder="KeyAdmin"
                        aria-label="KeyAdmin"
                        aria-describedby="basic-key"
                    />
                    <Button onClick={() => handleRegister()} variant="outline-primary">
                        Register
                    </Button>
                    <Button variant="outline-danger">
                        <Nav.Link href="/admin">Cancle</Nav.Link>
                    </Button>
                </InputGroup>
            </Container>
        </div>
    )
};

export default RegisterAdmin;