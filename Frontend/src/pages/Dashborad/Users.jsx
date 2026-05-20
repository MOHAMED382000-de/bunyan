import { Outlet } from "react-router-dom"
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard"
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard"

export default function Users() {
  return (
    <section className="py-4">
      <Outlet context={{ title: "Users", buttonText: "Add New User" }} />
    </section>
  );
}