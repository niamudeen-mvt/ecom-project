import { SidebarItem } from "./SideNavigation";
import { RxDashboard } from "react-icons/rx";
import { Navigate, useLocation } from "react-router-dom";
import SideNavigation from "./SideNavigation";

import { useAuth } from "../../store/features/authSlice";
import UserMenu from "./UserMenu";

const MENU_ITEMS = [
  {
    id: "dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: <RxDashboard size={18} />,
  },
];

export default function AdminLayout({ children }) {
  const authUser = useAuth();

  const route = useLocation().pathname;

  if (!authUser?.isLoggedIn) return <Navigate to="/" />;

  return (
    <>
      <section className="min-h-100 w-full flex relative">
        <SideNavigation>
          {MENU_ITEMS?.map((menu) => {
            return (
              <SidebarItem
                key={menu?.id}
                icon={menu?.icon}
                text={menu?.title}
                alert
                url={menu?.url}
                active={route === menu?.url ? true : false}
              />
            );
          })}
        </SideNavigation>

        <main className="w-full min-h-screen px-4 overflow-y-auto  bg-gray-100">
          <div className="flex items-center justify-end p-10">
            <UserMenu />
          </div>
          <section className="h-full w-full flexCenter flex-col  p-5 sm:p-10 ">
            {children}
          </section>
        </main>
      </section>
    </>
  );
}
