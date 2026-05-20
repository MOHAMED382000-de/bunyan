import { Outlet } from "react-router-dom";

export default function Developers() {
  return ( 
    <section className="py-4 px-5">
      <Outlet
        context={{ title: "Developers", buttonText: "Add New Developer" }}
      />
    </section>
  );
}
