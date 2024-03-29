import React, { useEffect, useState } from 'react'
import './brand-list.css'
import brandService from '../../../services/brandService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'
import EditModal from '../Modals/EditModal/EditModal'
import * as Yup from "yup";
import AddModal from '../Modals/AddModal/AddModal'


function BrandList() {

    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        const brandsResponse = await brandService.getAll();
        setBrands(brandsResponse.data)
    }

    useEffect(() => {
        fetchBrands()
    }, [])

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Marka en az 2 karakterden oluşmalıdır.")
    })


    return (
        <div className='admin-brand-list-container'>
            <div className='d-flex justify-content-end'>
                <a className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target={"#addBrandModal"}>
                    Ekle
                </a>
                <AddModal
                    entityService={brandService}
                    modalId="addBrandModal"
                    initialValues={{ name: "" }}
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
                    <tbody className='table-group-divider'>
                        {
                            brands.map((brand, index) => (
                                <tr key={index}>
                                    <th scope="row">{brand.id}</th>
                                    <td>{brand.name}</td>
                                    <td className='table-button-column edit-button'>
                                        <a data-bs-toggle="modal"
                                            data-bs-target={"#editBrandId-" + brand.id}>
                                            <i className="ri-edit-2-fill"></i>
                                        </a>
                                        <EditModal
                                            entityService={brandService}
                                            entity={brand}
                                            modalId={"editBrandId-" + brand.id}
                                            initialValues={{ name: brand.name }}
                                            validationSchema={validationSchema}
                                        />
                                    </td>
                                    <td className='table-button-column delete-button'>
                                        <a data-bs-toggle="modal"
                                            data-bs-target={"#deleteBrandId-" + brand.id}>
                                            <i className="ri-delete-bin-fill"></i>
                                        </a>
                                        <DeleteModal
                                            entityService={brandService}
                                            entityId={"deleteBrandId-" + brand.id}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default BrandList