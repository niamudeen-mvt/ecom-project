import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { sendNotification } from "../utils/notifications";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  setItemsIntoLocalStorage,
  VALIDATE_USER_DETAIL,
} from "../utils/helper";
import { useDispatch } from "react-redux";
import { updateAuthStatus } from "../store/features/authSlice";
import { SERVER_URL } from "../constants";

export default function LoginPage() {
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (userDetail) => {
      const resp = await axios.post(`${SERVER_URL}/auth/login`, userDetail);
      return resp;
    },
    onSuccess: (resp) => {
      if (resp?.status === 200) {
        dispatch(updateAuthStatus(true));
        setItemsIntoLocalStorage("userId", resp?.data?.userId, false);
        navigate("/dashboard");
      }
    },
    onError: (error) => {
      const errors = error?.response?.data?.errors;
      const errorMessage = error?.response?.data?.message;
      if (errorMessage) {
        sendNotification("error", error?.response?.data?.message);
      }
      if (errors && errors.length > 0 && errors[0]?.msg) {
        sendNotification("error", errors[0]?.msg);
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
        <h2 className="mb-14">Sign in</h2>
        <CustomInput
          label="email"
          handleOnChange={handleOnChange}
          value={userDetail.email}
        />
        <CustomInput
          label="password"
          type="password"
          handleOnChange={handleOnChange}
          value={userDetail.password}
        />
        <button type="submit" className="btn w-full" disabled={isPending}>
          {isPending ? "Loading..." : "Submit"}
        </button>

        <p className="text-center">
          Don't have an account ?
          <Link to="/signup" className="ml-2 text-black">
            Sign up
          </Link>
        </p>
      </form>
    </section>
  );
}
