import React, { useEffect, useState } from "react";
//import "./brand-list.css";
import brandService from "../../../services/brandService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import EditModal from "../Modals/EditModal/EditModal";
import * as Yup from "yup";
import AddModal from "../Modals/AddModal/AddModal";
import colorService from "../../../services/colorService";

function ColorList() {
  const [colors, setColors] = useState([]);

  const fetchColors = async () => {
    const colorsResponse = await colorService.getAll();
    setColors(colorsResponse.data);
  };

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Renk en az 2 karakterden oluşmalıdır."),
  });

  return (
    <div className="admin-color-list-container">
      <div className="d-flex justify-content-end">
        <a
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={"#addColorModal"}
        >
          Ekle
        </a>
        <AddModal
          entityService={colorService}
          modalId="addColorModal"
          initialValues={{ name: "" }}
          validationSchema={validationSchema}
        />
      </div>
      <div className="color-list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>

              <th scope="col">Name</th>
              <th scope="col table-button-column"></th>
              <th scope="col table-button-column"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {colors.map((color, index) => (
              <tr key={index}>
                <th scope="row">{color.id}</th>
                <td>{color.name}</td>
                <td className="table-button-column edit-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#editColorId-" + color.id}
                  >
                    <i className="ri-edit-2-fill"></i>
                  </a>
                  <EditModal
                    entityService={colorService}
                    entity={color}
                    modalId={"editColorId-" + color.id}
                    initialValues={{ name: color.name }}
                    validationSchema={validationSchema}
                  />
                </td>
                <td className="table-button-column delete-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteColorId-" + color.id}
                  >
                    <i className="ri-delete-bin-fill"></i>
                  </a>
                  <DeleteModal
                    entityService={colorService}
                    entityId={"deleteColorId-" + color.id}
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

export default ColorList;
