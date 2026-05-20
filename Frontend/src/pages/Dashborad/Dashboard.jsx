import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/Sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import Developers from "./Developers";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";

function Dashboard() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      <Navbar adminName="mohamed elsafy" />
      <div className="d-flex">
        <Sidebar isTyping={isTyping} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />

            <Route path="users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="projects" element={<Projects />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>

            <Route path="developers" element={<Developers />}>
              <Route index element={<TableDashboard />} />
              <Route path="add" element={<FormDashboard />} />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;