import React, { useEffect, useState } from 'react'
import './profile.css'
import PersonalInformation from '../../components/Profile/Individual/PersonalInformation/PersonalInformation';
import CorporateInformation from '../../components/Profile/Corporate/CorporateInformation/CorporateInformation';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/CommonSection/CommonSection';
import UserCard from '../../components/Profile/UserCard/UserCard';
import OrderList from '../../components/Profile/Order/OrderList';
import userService from '../../services/userService';
import corporateCustomerService from '../../services/corporateCustomerService';
import customerService from '../../services/customerService';
import { useSelector } from 'react-redux';



const Profile = () => {

    const authState = useSelector((store) => store.auth);

    const [user, setUser] = useState();
    const [corporate, setCorporate] = useState();
    const [customer, setCustomer] = useState();
    const isIndividual = customer !== undefined;

    const fetchUser = async () => {
        // Handle form submission logic here

        try {

            const response = await userService.getById(authState.id);
            setUser(response.data)
            console.log('Response:', response);

        }

        catch (error) {
            console.error('Veri çekme hatası:', error);
        }

    };


    const fetchCorporate = async () => {

        try {

            const response = await corporateCustomerService.getByUserId(authState.id);
            setCorporate(response.data)
            console.log('Response:', response);

        }

        catch (error) {
            console.error('Veri çekme hatası:', error);
        }

    };

    const fetchCustomer = async () => {

        try {

            const response = await customerService.getByUserId(authState.id);
            setCustomer(response.data)
            console.log('Response:', response);

        }

        catch (error) {
            console.error('Veri çekme hatası:', error);
        }

    };

    useEffect(() => {

        fetchUser();
        fetchCustomer();
        fetchCorporate();

    }, [])

    useEffect(() => {
        console.log(corporate);
        console.log(customer);

    }, [corporate, customer])


    return (
        <Helmet title="Profile">
            <CommonSection title="Profile" />
            <div className='profile-page-container'>

                <UserCard user={user} customer={customer} corporate={corporate} />

                <div className="profile-page-content">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="my-profile-tab" data-bs-toggle="tab" data-bs-target="#my-profile" type="button" role="tab" aria-controls="home" aria-selected="true">Profilim</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="active-rentals-tab" data-bs-toggle="tab" data-bs-target="#active-rentals" type="button" role="tab" aria-controls="profile" aria-selected="false">Aktif Kiralamalarım</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="bookings-tab" data-bs-toggle="tab" data-bs-target="#bookings" type="button" role="tab" aria-controls="profile" aria-selected="false">Rezervasyonlarım</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="past-rentals-tab" data-bs-toggle="tab" data-bs-target="#past-rentals" type="button" role="tab" aria-controls="profile" aria-selected="false">Geçmiş Kiralamalarım</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="my-profile" role="tabpanel" aria-labelledby="my-profile-tab">
                            {
                                (() => {
                                    if (isIndividual) {
                                        return (<PersonalInformation customer={customer} />);
                                    } else {
                                        return (<CorporateInformation corporate={corporate} />);
                                    }
                                })()
                            }
                        </div>
                        <div className="tab-pane fade" id="active-rentals" role="tabpanel" aria-labelledby="active-rentals-tab">
                            <OrderList />
                        </div>
                        <div className="tab-pane fade" id="bookings" role="tabpanel" aria-labelledby="bookings-tab">
                            <OrderList />
                        </div>
                        <div className="tab-pane fade" id="past-rentals" role="tabpanel" aria-labelledby="past-rentals-tab">
                            <OrderList />
                        </div>
                    </div>
                </div>







            </div>

        </Helmet>

    )
}

export default Profile