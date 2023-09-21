import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoIZ from "../../..//Assets/Pictures/logoIZ.png";

import classes from "./LoginPage.module.css";
import { useEffect, useState } from "react";
import adminService from "../../../Services/adminService";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    if (!adminService.login({ username, password })) {
      setError(true);
    } else {
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/naslovna");
    }
  }, [success]);

  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginContainerHeader}>
        <div>
          <img src={logoIZ} alt="Islamska zajednica u Bosni i Hercegovini" />
        </div>
        <div className={classes.loginContainerHeaderTitleContainer}>
          <p className={classes.loginContainerHeaderTitleBold}>
            Program za vođenje troškova
          </p>
          <p className={classes.loginContainerHeaderTitle}>
            Medžlis islamske zajednice Gračanica
          </p>
          <p className={classes.loginContainerHeaderTitle}>Džemat Golaći</p>
        </div>
      </div>
      <div className={classes.formContainer}>
        <FloatingLabel
          controlId="floatingUsername"
          label="Korisničko ime"
          className="mb-3"
        >
          <Form.Control
            size="sm"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            type="text"
            placeholder="Korisničko ime"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Lozinka"
          className="mb-3"
        >
          <Form.Control
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            type="password"
            placeholder="Lozinka"
          />
        </FloatingLabel>
        <Button onClick={handleFormSubmit} variant="dark">
          PRIJAVA
        </Button>
        {error && (
          <Button variant="outline-danger" disabled>
            Pogrešni kredencijali!
          </Button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
