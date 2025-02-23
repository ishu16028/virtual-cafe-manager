
import { Coffee, Users, ChartBar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", icon: Coffee, label: "Menu" },
    { path: "/staff", icon: Users, label: "Staff" },
    { path: "/admin", icon: ChartBar, label: "Admin" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen pt-16">
      <nav className="mt-5 px-3">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-cafe-100 text-cafe-900"
                    : "text-gray-600 hover:bg-cafe-50 hover:text-cafe-900"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 transition-colors duration-200 ${
                    isActive ? "text-cafe-800" : "text-gray-400 group-hover:text-cafe-800"
                  }`}
                />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
