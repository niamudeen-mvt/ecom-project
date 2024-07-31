import FirstSlideImgae from "../assets/images/logo (1).png";
import SecondSlideImgae from "../assets/images/logo (2).png";
import ThirdSlideImgae from "../assets/images/logo (3).png";
import FourthSlideImgae from "../assets/images/logo(4).png";
import FifthSlideImgae from "../assets/images/logo (5).png";
import img_1 from "../assets/images/products/img_1.png";
import img_2 from "../assets/images/products/img_2.png";
import img_3 from "../assets/images/products/img_3.png";
import img_4 from "../assets/images/products/img_4.png";
import img_5 from "../assets/images/products/img_5.png";

export const NAV_ROUTES = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Deals",
    path: "#deals",
  },
  {
    name: "New Arrivals",
    path: "#newArrivals",
  },
  {
    name: "Sign in",
    path: "/login",
  },
  {
    name: "Sign up",
    path: "/signup",
    isButton: true,
  },
];

export const SLIDES_MENU = [
  {
    id: 1,
    img: FirstSlideImgae,
  },
  {
    id: 2,
    img: FourthSlideImgae,
  },
  {
    id: 3,
    img: FifthSlideImgae,
  },
  {
    id: 4,
    img: SecondSlideImgae,
  },
  {
    id: 5,
    img: ThirdSlideImgae,
  },
];

export const COMMON_SLIDES = [
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_2,
  },
  {
    id: 3,
    img: img_3,
  },
  {
    id: 4,
    img: img_4,
  },
  {
    id: 5,
    img: img_5,
  },
];
export const FOOTER_LINKS = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "Contact",
  },
  {
    id: 3,
    name: "FAQ",
  },
];

export const POPULAR_CATEGORIES = [
  "mens-shoes",
  "mens-watches",
  "womens-bags",
  "womens-shoes",
];
