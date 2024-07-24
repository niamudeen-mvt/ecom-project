import { Link } from "react-router-dom";
import BrandImage from "../assets/images/FASCO.png";

const _footerMenu = [
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

export default function Footer() {
  return (
    <footer className="customContainer py-10 space-y-10 mt-10">
      <section className="flex flex-col sm:flex-row sm:justify-between  gap-8">
        <Link to={"/"}>
          <img src={BrandImage} alt="Brand Logo" className="w-40 h-9" />
        </Link>
        <nav>
          <ul className="flex flex-col sm:flex-row justify-start sm:justify-between gap-4 sm:gap-14 capitalize ">
            {_footerMenu.map((menu) => (
              <li key={menu.id}>{menu.name}</li>
            ))}
          </ul>
        </nav>
      </section>
      <div></div>
      <p className="capitalize mx-auto">
        copyright@ 2024 FASCO. All rights reserved
      </p>
    </footer>
  );
}
