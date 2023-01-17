import React, { useState } from "react";
import { Form, Input, FormContainer, LogInButton } from "./styles";
import { Logo } from "../Header/styles";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const isRegister = window.location.pathname.indexOf("register") >= 1;

  const [newRegister, setNewRegister] = useState(isRegister);

  const handleRegister = () => {
    setNewRegister((newRegister) => !newRegister);
  };

  const handleSubmit = async (e) => {
    // const token =
    //   "0a127b1f3817d13e2259a67a0d5b4d4d53d7a924f8bfe319e5cdf13205db88382bf6b017bf04acf7381eb232a49a9acd10f67aa187d4acd9c713a1ea780e5963c9331bdf68369c9a48f9f9b9b4fecd9569b05ec52e2b618d17b6a0366b860138ca8dd40c8f1ceaea5eb1669e072c750cf1b1ce13c42cccd4f54c2f9f7c41ff55";

    const token =
      "83ba35153bb4f1a37913d10f91e6c79c79cd3f3dc819dfd1e9f822147f68524bddf04dcbece34240f4ad567f050da7ce89710312881dceb1adcad60f14e394fe7d2c1e427844d50e6aa4d4611ac76ee310cd343b44f5a952e2fae9829bb34ea78645372e0126193c0b90f4364f476d859a5f57426f50832a4e561543f05f18e8";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        ...(newRegister ? { email: email } : { identifier: email }),

        ...(newRegister ? { username: userName } : {}),
        password: password
      }),
      redirect: "follow"
    };

    e.preventDefault();

    // const url = "http://localhost:1337";
    const url = "https://notes-to-self-mp.herokuapp.com";

    try {
      let endpoint = newRegister ? "/auth/local/register" : "/auth/local";
      var response = await fetch(`${url}/api${endpoint}`, requestOptions);

      const data = await response.json();

      // check if the response was successful
      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        console.log(data.user.username);

        localStorage.setItem("username", data.user.username);

        localStorage.setItem("userId", data.user.id);
        // redirect the user to the protected page
        window.location = "/";
      } else {
        // display an error message
        console.log("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="log-in-form-container w-100 min-h-100-vh flex"
      style={{ backgroundColor: newRegister ? "#A6CAC9" : "" }}
    >
      <FormContainer className="m-auto" newRegister>
        <Logo className="m-auto db" />
        <p className="mb4 tc itc-g f3">
          {newRegister
            ? "Welcome to Notes to Self. "
            : "Log in to continue. Or "}
          <span
            className="underline anchor"
            onClick={handleRegister}
            style={{ color: "#4e6730" }}
          >
            {newRegister ? "I have an account." : "create account "}
          </span>
        </p>

        <Form onSubmit={handleSubmit}>
          <div>
            {newRegister ? (
              <>
                <label className="tc flex flex-column justify-center align-center">
                  Username:
                  <Input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </label>
                <br />
              </>
            ) : (
              ""
            )}

            <label className="tc flex flex-column justify-center align-center">
              Email:
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className="tc flex flex-column justify-center align-center">
              Password:
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
          </div>
          <LogInButton
            newRegister={newRegister}
            type="submit"
            style={{ backgroundColor: newRegister ? "#306764" : "#4e6730" }}
          >
            {newRegister ? "Register" : "Log in"}
          </LogInButton>
        </Form>
      </FormContainer>
    </div>
  );
};

export default LogIn;
