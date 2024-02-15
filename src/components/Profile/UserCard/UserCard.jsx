import React from 'react'
import './user-card.css'
import customerService from '../../../services/customerService'

function UserCard({ user, corporate, customer }) {



    let userData = {};


    if (customer) {
        userData.userFullName = `${customer.firstName} ${customer.lastName}`;
        userData.createdDate = customer?.createdDate;


    }
    else {
        userData.userFullName = corporate?.companyName;
        userData.createdDate = corporate?.createdDate;


    }



    return (
        <div className="user-card">
            <div className="profile-img">
                <img src="src\assets\all-images\default-profile.jpg" alt="" className='rounded-circle' />
            </div>

            <div className="user-information">
                <h5 className="user-fullname">{userData.userFullName}</h5>
                <span>Üyelik Tarihi:</span>
                <p>{userData.createdDate}</p>

                <div className="user-information-detail">
                    <p className="user-email">{user?.email}</p>
                    <p className="user-phone">{corporate?.phoneNumber}{customer?.phoneNumber}</p>
                    {(() => {
                        if (customer) {
                            return (
                                <>
                                    <p className="user-birthDate">{customer?.birthDate}</p>
                                    <p className="user-nationalIdentity">{customer?.nationalIdNo}</p>
                                </>)
                        }
                        else {
                            return (
                                <>
                                    <p className="user-taxtNo">{corporate?.taxtNo}</p>
                                </>)
                        }
                    })()}

                </div>

            </div>
        </div>
    )
}

export default UserCard