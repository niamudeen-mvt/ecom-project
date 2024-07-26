import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getItemsFromLocalStorage } from "../../utils/helper";
import { useDispatch } from "react-redux";
import { updateCart } from "../../store/features/cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainerNotification } from "../../utils/notifications";

export default function AppLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cart = getItemsFromLocalStorage("cart", true);
    if (cart) {
      dispatch(updateCart(cart));
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainerNotification />
    </>
  );
}
