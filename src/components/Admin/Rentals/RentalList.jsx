import React, { useEffect, useState } from "react";
//import "./brand-list.css";
import brandService from "../../../services/brandService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import EditModal from "../Modals/EditModal/EditModal";
import * as Yup from "yup";
import AddModal from "../Modals/AddModal/AddModal";
import modelService from "../../../services/modelService";
import rentalService from "../../../services/rentalService";

function RentalList() {
  const [rentals, setRentals] = useState([]);

  const fetchRentals = async () => {
    const rentalsResponse = await rentalService.getAll();
    setRentals(rentalsResponse.data);
  };

  useEffect(() => {
    fetchRentals();
  }, [fetchRentals]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Model en az 2 karakterden oluşmalıdır."),
    userId: Yup.number().required("Marka numarası sayı olmalıdır."),
    carId: Yup.number().required("Marka numarası sayı olmalıdır."),
  });

  return (
    <div className="admin-brand-list-container">
      <div className="d-flex justify-content-end">
        <a
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={"#addRentalModal"}
        >
          Ekle
        </a>
        <AddModal
          entityService={rentalService}
          modalId="addRentalModal"
          initialValues={{ name: "", rentalId: 0 }}
          validationSchema={validationSchema}
        />
      </div>
      <div className="rental-list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Return Date</th>
              <th scope="col">Start Kilometer</th>
              <th scope="col">End Kilometer</th>
              <th scope="col">Total Price</th>
              <th scope="col">User ID</th>
              <th scope="col">Car ID</th>

              <th scope="col table-button-column"></th>
              <th scope="col table-button-column"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {rentals.map((rental, index) => (
              <tr key={index}>
                <th scope="row">{rental.id}</th>
                <td>{rental.startDate}</td>
                <td>{rental.endDate}</td>
                <td>{rental.returnDate}</td>
                <td>{rental.startKilometer}</td>
                <td>{rental.endKilometer}</td>
                <td>{rental.totalPrice}</td>
                <td>{rental.userId}</td>
                <td>{rental.carId}</td>

                <td className="table-button-column edit-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#editRentalId-" + rental.id}
                  >
                    <i className="ri-edit-2-fill"></i>
                  </a>
                  <EditModal
                    entityService={rentalService}
                    entity={rental}
                    modalId={"editRentalId-" + rental.id}
                    initialValues={{ name: rental.startDate }}
                    validationSchema={validationSchema}
                  />
                </td>
                <td className="table-button-column delete-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteBrandId-" + rental.id}
                  >
                    <i className="ri-delete-bin-fill"></i>
                  </a>
                  <DeleteModal
                    entityService={rentalService}
                    entityId={"deleteRentalId-" + rental.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RentalList;
