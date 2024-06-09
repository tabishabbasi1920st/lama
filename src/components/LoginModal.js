import { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import { LamaContext } from "../context/lamaContext";

const LoginModal = () => {
  const [errorTxt, setErrorTxt] = useState("");
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
  });

  const { setUserInfo } = useContext(LamaContext);
  const mainContainerRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    if (mainContainerRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formValidation = () => {
    const { username, email } = loginForm;

    if (username === "") {
      setErrorTxt("Please fill form properly.");
      return false;
    } else if (email === "") {
      setErrorTxt("Please fill form properly.");
      return false;
    }

    setErrorTxt("");
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formValidation()) {
      const { username, email } = loginForm;
      const userInfo = {
        username,
        email,
        projectList: [],
      };

      setUserInfo(userInfo);
    }
  };

  return (
    <MainContainer ref={mainContainerRef}>
      <Card onSubmit={handleFormSubmit}>
        <div className="input-field-holder">
          <Label>Username</Label>
          <Input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div className="input-field-holder">
          <Label>Email</Label>
          <Input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <ErrorTxt>{errorTxt}</ErrorTxt>

        <Button type="submit">Login</Button>
      </Card>
    </MainContainer>
  );
};

export default LoginModal;

const MainContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.form`
  height: 260px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  font-family: "Roboto";

  .input-field-holder {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const Label = styled.label`
  display: block;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #3c3c3c;
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const ErrorTxt = styled.p`
  color: red;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  border: none;
  background-color: #7e22ce;
  color: #fff;
  font-weight: 400;
  border-radius: 5px;
  font-size: 16px;
  margin-top: auto;
  margin-left: auto;
  cursor: pointer;
`;
