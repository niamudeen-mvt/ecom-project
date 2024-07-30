import React, { useState } from "react";
import CustomInput from "../components/shared/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { sendNotification } from "../utils/notifications";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { setItemsIntoLocalStorage } from "../utils/helper";
import { useDispatch } from "react-redux";
import { updateAuthStatus } from "../store/features/authSlice";

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
      const resp = await axios.post(
        "https://ecommerce-backend-jy6t.onrender.com/api/v1/auth/login",
        userDetail
      );
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
      if (error?.response?.status === 400) {
        sendNotification("error", error?.response?.data?.message);
      } else if (errors && errors.length > 0 && errors[0]?.msg) {
        sendNotification("error", errors[0]?.msg);
      }
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const IS_ANY_FIELD_EMPTY = Object.keys(userDetail).some(
      (key) => userDetail[key] === ""
    );

    if (IS_ANY_FIELD_EMPTY) {
      return sendNotification("warning", "Please fill all the fields");
    }

    mutate(userDetail);
  };

  return (
    <section className="customContainer min-h-[80vh] flexCenter">
      <form
        className="max-w-[36rem] min-h-[50rem] mx-auto text-lg p-14 rounded-lg space-y-10 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2>Sign in</h2>
        <CustomInput
          label="email"
          handleOnChange={handleOnChange}
          value={userDetail.email}
        />
        <CustomInput
          label="password"
          handleOnChange={handleOnChange}
          value={userDetail.password}
        />
        <button type="submit" className="btn w-full">
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
