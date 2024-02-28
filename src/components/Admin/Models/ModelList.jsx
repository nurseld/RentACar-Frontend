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

function ModelList() {
  const [models, setModels] = useState([]);

  const fetchModels = async () => {
    const modelsResponse = await modelService.getAll();
    setModels(modelsResponse.data);
  };

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Model en az 2 karakterden oluşmalıdır."),
    brandId: Yup.number().required("Marka numarası sayı olmalıdır."),
  });

  return (
    <div className="admin-brand-list-container">
      <div className="d-flex justify-content-end">
        <a
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={"#addBrandModal"}
        >
          Ekle
        </a>
        <AddModal
          entityService={modelService}
          modalId="addModelModal"
          initialValues={{ name: "", brandId: 0 }}
          validationSchema={validationSchema}
        />
      </div>
      <div className="brand-list">
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
            {models.map((model, index) => (
              <tr key={index}>
                <th scope="row">{model.id}</th>
                <td>{model.name}</td>
                <td className="table-button-column edit-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#editBrandId-" + model.id}
                  >
                    <i className="ri-edit-2-fill"></i>
                  </a>
                  <EditModal
                    entityService={modelService}
                    entity={model}
                    modalId={"editBrandId-" + model.id}
                    initialValues={{ name: model.name }}
                    validationSchema={validationSchema}
                  />
                </td>
                <td className="table-button-column delete-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteBrandId-" + model.id}
                  >
                    <i className="ri-delete-bin-fill"></i>
                  </a>
                  <DeleteModal
                    entityService={modelService}
                    entityId={"deleteBrandId-" + model.id}
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

export default ModelList;
