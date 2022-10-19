import { useState } from "react";
import { Button, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { ApiAdmin } from "../../ApiConfig/apiAdmin";
import { useRouter } from 'next/router';

function AdminLogin() {
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [key, setKey] = useState("");

    const router = useRouter();

    const handleLoginAdmin = async () => {
        await ApiAdmin.Authen.Login(userName, pass, key, router);
    };

    return (
        <div id="adminLogin" className="mt-5 mb-5" >
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

                <InputGroup>
                    <InputGroup.Text id="basic-key">@</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setKey(e.target.value)}
                        value={key}
                        placeholder="KeyAdmin"
                        aria-label="KeyAdmin"
                        aria-describedby="basic-key"
                    />
                    <Button variant="outline-primary">
                        <Nav.Link href="/admin/register">Register</Nav.Link>
                    </Button>
                    <Button onClick={() => handleLoginAdmin()} variant="outline-primary">Login</Button>
                </InputGroup>
            </Container>

        </div>
    )
};

export default AdminLogin;