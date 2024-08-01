import { SidebarItem } from "./SideNavigation";
import { Navigate, useLocation } from "react-router-dom";
import SideNavigation from "./SideNavigation";

import { useAuth } from "../../store/features/authSlice";
import UserMenu from "./UserMenu";
import { PRIVATE_ROUTES } from "../../constants";

export default function AdminLayout({ children }) {
  const authUser = useAuth();

  const route = useLocation().pathname;

  if (!authUser?.isLoggedIn) return <Navigate to="/" />;

  return (
    <>
      <section className="min-h-screen w-full flex relative">
        <SideNavigation>
          {PRIVATE_ROUTES &&
            PRIVATE_ROUTES.length > 0 &&
            PRIVATE_ROUTES.filter((menu) => menu?.private)?.map((menu) => {
              return (
                <SidebarItem
                  key={menu?.id}
                  icon={menu?.icon}
                  text={menu?.title}
                  alert
                  url={menu?.path}
                  active={route === menu?.path ? true : false}
                />
              );
            })}
        </SideNavigation>

        <main className="w-full max-h-screen px-4 hide-scrollbar bg-gray-100 border overflow-y-auto relative">
          <div className="absolute top-0 w-full flex items-center justify-end p-10">
            <UserMenu />
          </div>
          <section className="w-full flexCenter flex-col  p-5 sm:p-10 ">
            {children}
          </section>
        </main>
      </section>
    </>
  );
}
