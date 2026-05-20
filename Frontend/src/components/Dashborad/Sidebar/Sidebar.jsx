
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";
function Sidebar({isTyping}) {
  const links = [
    { icon: "fa-chart-line", title: "Status",path: "/" },
    { icon: "fa-users", title: "Users Management", path: "/users" },
    { icon: "fa-building", title: "Projects Management", path :"/projects" },
    { icon: "fa-building", title: "Developers Management", path :"/developers" },
    { icon: "fa-globe", title: "CMS" },
    { icon: "fa-message", title: "Live Chat" },
  ];
  return (
    <aside className={`min-vh-100 py-4 ${styles.sidebar}`}>
      <div className="title fw-semibold px-3 fs-1 mb-2">Dashboard</div>
      <nav>
        {isTyping && (
          <div className="px-3 mb-3 text-warning fw-bold"> Typing...</div>
        )}


        {links.map((item,index) => (
          <NavLink to={item.path} className={`${styles.navItem} align-items-center gap-3 d-flex`} key={index}>
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span className="fs-5">{item.title}</span>  
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
