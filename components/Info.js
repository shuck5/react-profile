import React from 'react'

export default function Info() {
    return (
        <div className="info-container">
            <img 
            className="profile-image"
            src="https://storage.googleapis.com/msgsndr/qW0pdiwI2uTVIN9e2gMV/media/64651991a781d2650d6f9653.jpeg" />
            <h1>Kadie Ford</h1>
            <h3>Frontend Developer</h3>
            <h4>kadieford.com</h4>
            <div className="button-container">
                <button className="item-btn-1"><i className="fa fa-envelope"></i>Email</button>
                <button className="item-btn-2"><i className="fa fa-linkedin-square" aria-hidden="true"></i>LinkedIn</button>
            
            </div>
        </div>
    )
}