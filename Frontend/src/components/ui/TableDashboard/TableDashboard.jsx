import { Link, useOutletContext } from "react-router-dom";

export default function TableDashboard() {
  const { title, buttonText } = useOutletContext();

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h3>{title}</h3>
        <Link to="add" className="btn btn-primary">
          {buttonText}
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}