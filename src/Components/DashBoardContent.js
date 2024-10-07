import React from "react";
import "./DashBoardContent.css";

const DashBoardContent = () => {
    const dogs = [
        {
            name: "Ben Kingsley",
            breed: "French Bulldog",
            vaccinationName: "Kennel Cough",
            vaccinationDate: "02 July, 2024",
            expireDate: "02 July, 2026",
            image: "https://utfs.io/f/wY1JPnHeuUdXFrChSO6LTGr8faSlcDvtCqw4sPHJbAIUizop",
        },
        {
            name: "Jamie Foxx",
            breed: "Chihuahua",
            vaccinationName: "Kennel Cough",
            vaccinationDate: "02 July, 2024",
            expireDate: "02 July, 2026",
            image: "https://utfs.io/f/wY1JPnHeuUdXSCtHPFLIsqz1K2WdiwkZjhCLBObaPJo8ERYe",
        },
        {
            name: "Kirk Douglas",
            breed: "Rottweiler",
            vaccinationName: "Kennel Cough",
            vaccinationDate: "02 July, 2024",
            expireDate: "02 July, 2026",
            image: "https://utfs.io/f/wY1JPnHeuUdX5FbOtfcw9gG741IbrMwkv3X6pjNuOciPSAn8",
        },
        {
            name: "Michelle Visage",
            breed: "Poodle",
            vaccinationName: "Kennel Cough",
            vaccinationDate: "02 July, 2024",
            expireDate: "02 July, 2026",
            image: "https://utfs.io/f/wY1JPnHeuUdXSvlJWwdLIsqz1K2WdiwkZjhCLBObaPJo8ERY",
        },
    ];

    return (
        <div className="dashboard-container">
            {dogs.map((dog, index) => (
                <div key={index} className="card">
                    <img
                        src={dog.image}
                        alt={dog.name}
                        className="dog-image"
                    />
                    <div className="card-info">
                        <h2 className="dog-name">{dog.name}</h2>
                        <p className="dog-breed">{dog.breed}</p>
                        <p><strong>Vaccination Name:</strong></p>
                        <p> {dog.vaccinationName}</p>
                    </div>
                    <div className="card-info">
                        <p><strong>Vaccination Date:</strong> </p>
                        <p>{dog.vaccinationDate}</p>
                    </div>
                    <div className="card-info">
                        <p><strong>Expire Vaccination Date:</strong> </p>
                        <p>{dog.expireDate}</p>
                    </div>
                    <div className="card-buttons">
                        <button className="approve-btn">Approval</button>
                        <button className="decline-btn">Decline</button>
                        <button className="certificate-btn">View Certificate 👁️</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashBoardContent;
