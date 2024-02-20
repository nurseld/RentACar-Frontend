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
        <div className='admin-car-list-container'>
            <div className='d-flex justify-content-end'>
                <Link to={"/admin/add-car"} type="button" className="btn btn-success">Ekle</Link>
            </div>
            <div className="car-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th className='text-center' scope="col"></th>
                            <th className='text-center' scope="col">Kilometre</th>
                            <th className='text-center' scope="col">Plaka</th>
                            <th className='text-center' scope="col">Yıl</th>
                            <th className='text-center' scope="col">Vites Tipi</th>
                            <th className='text-center' scope="col">Yakıt Tipi</th>
                            <th className='text-center' scope="col">Kasa Tipi</th>
                            <th className='text-center' scope="col">Günlük Fiyat</th>
                            <th className='text-center' scope="col">Model</th>
                            <th className='text-center' scope="col">Renk</th>
                            <th className='text-center' scope="col table-button-column"></th>
                            <th className='text-center' scope="col table-button-column"></th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        {
                            cars.map((car, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={car.imagePath} style={{ width: '150px' }} alt="" />
                                    </td>
                                    <td className='align-middle text-center' scope="row">{car.kilometer}</td>
                                    <td className='align-middle text-center' >{car.plate}</td>
                                    <td className='align-middle text-center' >{car.year}</td>
                                    <td className='align-middle text-center' >{car.gearType}</td>
                                    <td className='align-middle text-center' >{car.fuelType}</td>
                                    <td className='align-middle text-center' >{car.bodyType}</td>
                                    <td className='align-middle text-center' >{car.dailyPrice}</td>
                                    <td className='align-middle text-center' >{car.modelName}</td>
                                    <td className='align-middle text-center' >{car.colorName}</td>
                                    <td className='table-button-column edit-button align-middle text-center'>
                                        <Link to={"/admin/edit-car/" + car.id}>
                                            <i className="ri-edit-2-fill"></i>
                                        </Link>
                                    </td>
                                    <td className='table-button-column delete-button align-middle text-center'>
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