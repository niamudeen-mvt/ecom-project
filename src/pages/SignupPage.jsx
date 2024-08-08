import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { sendNotification } from "../utils/notifications";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URL } from "../constants";
import { VALIDATE_USER_DETAIL } from "../utils/helper";

export default function SignupPage() {
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (userDetail) => {
      const resp = await axios.post(`${SERVER_URL}/auth/register`, userDetail);
      return resp;
    },
    onSuccess: (resp) => {
      if (resp?.status === 201 || resp?.status === 200) {
        sendNotification("success", "Registration Successfull");
        navigate("/login");
      }
    },
    onError: (error) => {
      console.log("error: ", error);
      const errors = error?.response?.data?.errors;

      if (error?.response?.data?.code === "EMAIL_ALREADY_EXIST") {
        sendNotification("warning", "Email already exists");
      } else if (errors && errors.length > 0 && errors[0]?.msg) {
        sendNotification("error", errors[0]?.msg);
      } else if (error?.response?.data?.code === "ERROR") {
        sendNotification("warning", "Something went wrong. Please try again");
      }
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { ERRORS, IS_EMPTY } = VALIDATE_USER_DETAIL(userDetail);

    if (IS_EMPTY) {
      return sendNotification("warning", "Please fill all the fields");
    }

    if (ERRORS && ERRORS.length > 0) {
      return sendNotification("error", ERRORS[0]);
    }

    mutate(userDetail);
  };

  return (
    <section className="customContainer min-h-[80vh] flexCenter">
      <form
        className="max-w-[36rem] min-h-[40rem] mx-auto text-lg p-14 rounded-xl space-y-10 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-14">Signup</h2>
        <CustomInput
          label="username"
          handleOnChange={handleOnChange}
          value={userDetail.username}
        />
        <CustomInput
          label="email"
          handleOnChange={handleOnChange}
          value={userDetail.email}
        />
        <CustomInput
          label="phone"
          handleOnChange={handleOnChange}
          value={userDetail.phone}
        />
        <CustomInput
          label="password"
          handleOnChange={handleOnChange}
          value={userDetail.password}
        />
        <button type="submit" className="btn w-full" disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </button>

        <p className="text-center">
          Already have an account?
          <Link to="/login" className="ml-2 text-black">
            Sign in
          </Link>
        </p>
      </form>
    </section>
  );
}
