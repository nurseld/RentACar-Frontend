import React, { useEffect, useState } from 'react'
import './car-list.css'
import carService from '../../../services/carService'
import { Link } from 'react-router-dom'
import DeleteModal from '../Modals/DeleteModal/DeleteModal'

function CarList() {

    const [cars, setCars] = useState([])

    const fetchCars = async () => {
        const carsResponse = await carService.getAll();
        setCars(carsResponse.data)
    }

    useEffect(() => {
        fetchCars()
    }, [])

    return (
        <div className='admin-brand-list-container'>
            <div className='d-flex justify-content-end'>
                <Link to={"/admin/add-car"} type="button" className="btn btn-success">Ekle</Link>
            </div>
            <div className="car-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Kilometre</th>
                            <th scope="col">Plaka</th>
                            <th scope="col">Yıl</th>
                            <th scope="col">Vites Tipi</th>
                            <th scope="col">Yakıt Tipi</th>
                            <th scope="col">Kasa Tipi</th>
                            <th scope="col">Günlük Fiyat</th>
                            <th scope="col">Model</th>
                            <th scope="col">Renk</th>
                            <th scope="col table-button-column"></th>
                            <th scope="col table-button-column"></th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            cars.map((car, index) => (
                                <tr key={index}>
                                    <td scope="row">{car.kilometer}</td>
                                    <td>{car.plateNumber}</td>
                                    <td>{car.year}</td>
                                    <td>{car.gearType}</td>
                                    <td>{car.fuelType}</td>
                                    <td>{car.bodyType}</td>
                                    <td>{car.dailyPrice}</td>
                                    <td>{car.modelName}</td>
                                    <td>{car.colorName}</td>
                                    <td className='table-button-column edit-button'>
                                        <Link to={"/admin/edit-car/" + car.id}>
                                            <i className="ri-edit-2-fill"></i>
                                        </Link>
                                    </td>
                                    <td className='table-button-column delete-button'>
                                        <a data-bs-toggle="modal"
                                            data-bs-target={"#carId-" + car.id}>
                                            <i className="ri-delete-bin-fill"></i>
                                        </a>
                                        <DeleteModal
                                            entityService={carService}
                                            entityId={"carId-" + car.id}
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

export default CarList