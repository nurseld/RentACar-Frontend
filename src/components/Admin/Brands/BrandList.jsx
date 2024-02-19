import React, { useEffect, useState } from 'react'
import './brand-list.css'
import brandService from '../../../services/brandService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'


function BrandList() {

    const [brands, setBrands] = useState([])

    const fetchBrands = async () => {
        const brandsResponse = await brandService.getAll();
        setBrands(brandsResponse.data)
    }

    useEffect(() => {
        fetchBrands()
    }, [])



    return (
        <div className='admin-brand-list-container'>
            <div className='d-flex justify-content-end'>
                <Link to={"/admin/add-brand"} type="button" className="btn btn-success">Ekle</Link>
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
                                        <Link to={"/admin/edit-brand/" + brand.id}>
                                            <i className="ri-edit-2-fill"></i>
                                        </Link>
                                    </td>
                                    <td className='table-button-column delete-button'>
                                        <a data-bs-toggle="modal"
                                            data-bs-target={"#id-" + brand.id}>
                                            <i className="ri-delete-bin-fill"></i>
                                        </a>
                                        <DeleteModal
                                            entityService={brandService}
                                            entityId={"id-" + brand.id}
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