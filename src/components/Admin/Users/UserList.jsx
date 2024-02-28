import React, { useEffect, useState } from "react";
//import "./brand-list.css";
import brandService from "../../../services/brandService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../Modals/DeleteModal/DeleteModal";
import EditModal from "../Modals/EditModal/EditModal";
import * as Yup from "yup";
import AddModal from "../Modals/AddModal/AddModal";
import userService from "../../../services/userService";

function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersResponse = await userService.getAll();
    setUsers(usersResponse.data);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Marka en az 2 karakterden oluşmalıdır."),
  });

  return (
    <div className="admin-user-list-container">
      <div className="d-flex justify-content-end">
        <a
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target={"#addUserModal"}
        >
          Ekle
        </a>
        <AddModal
          entityService={userService}
          modalId="addUsersModal"
          initialValues={{ email: "" }}
          validationSchema={validationSchema}
        />
      </div>
      <div className="brand-list">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Created Date</th>

              <th scope="col table-button-column"></th>
              <th scope="col table-button-column"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.createdDate}</td>
                <td className="table-button-column edit-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#editUserId-" + user.id}
                  >
                    <i className="ri-edit-2-fill"></i>
                  </a>
                  <EditModal
                    entityService={brandService}
                    entity={user}
                    modalId={"editUserId-" + user.id}
                    initialValues={{
                      email: user.email,
                    }}
                    validationSchema={validationSchema}
                  />
                </td>
                <td className="table-button-column delete-button">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteUserId-" + user.id}
                  >
                    <i className="ri-delete-bin-fill"></i>
                  </a>
                  <DeleteModal
                    entityService={userService}
                    entityId={"deleteUserId-" + user.id}
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

export default UserList;
