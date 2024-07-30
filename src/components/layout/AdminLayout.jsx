import { SidebarItem } from "./SideNavigation";
import { RxDashboard } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import SideNavigation from "./SideNavigation";

const MENU_ITEMS = [
  {
    id: "dashboard",
    title: "Dashboard",
    url: "/dashboard",
    icon: <RxDashboard size={18} />,
  },
];

export default function AdminLayout({ children }) {
  const route = useLocation().pathname;

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
          <section className="h-full w-full flexCenter flex-col  p-5 sm:p-10">
            {children}
          </section>
        </main>
      </section>
    </>
  );
}
