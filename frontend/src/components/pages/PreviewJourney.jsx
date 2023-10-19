import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PreviewJourney() {
    const [journey, setJourney] = useState({});
    const { id } = useParams();

    useEffect(() => {
        function getJourney() {
            axios
                .get(`http://localhost:8000/journey/get/${id}`)
                .then((response) => {
                    console.log("Journey Data:", response.data);
                    setJourney(response.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        getJourney();
    }, [id]);

    return (
        <div className='p-4'>
           
            {journey && journey.journeyName ? (
                <div>
        <div  className='header'>

        <div className='headerTitle'>
        <h2 className='text-5xl text-center headerTitleLg text-white'>{journey.journeyName}</h2>
        <p className='headerTitleSm'>$500 per person</p>
        </div>
        <img src="/camera.jpg" className='headerImg' alt="C" />


</div>





                  
                    <div className='container p-4'>
                        <p className='text-xl textff text-gray-500'>
                            Welcome to Travel Infinity, where every journey becomes an infinite adventure.
                            Explore the world without limits with Travel Infinity. Here, you can experience the best and stress-free travel experience.
                        </p>
                    </div>
                    <div className='container p-4'>
                        <p className='text-xl textff text-black'>
                            Your journey, spanning {journey.NoOfDates} days, will start on {journey.StartingDate}.
                            You have {journey.NoOfMembers} fellow travelers joining you on this adventure.
                            {journey.Resorts && (
                                <span>
                                    During your journey, you'll be staying at {journey.Resorts}, and your reservations are handled by us.
                                </span>
                            )}
                        </p>
                    </div>
                    {journey.Locations && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected locations for your journey are:  
                                {journey.Locations.map((location, index) => (
                                    <span key={index}>
                                        {index > 0 ? ', ' : ''}
                                        {location}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                    {journey.Events && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected events for your journey are:  
                                {journey.Events.map((event, index) => (
                                    <span key={index}>
                                        {index > 0 ? ', ' : ''}
                                        {event}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                    {journey.Packages && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected packages for your journey are:  
                                {journey.Packages.map((packages, index) => (
                                    <span key={index}>
                                        {index > 0 ? ', ' : ''}
                                        {packages}
                                    </span>
                                ))}
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
