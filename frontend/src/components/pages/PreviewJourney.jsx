import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PreviewJourney() {
    const [journey, setJourney] = useState({}); // Change variable name to 'journey'
    const { id } = useParams();

    useEffect(() => {
        function getJourney() {
            axios
                .get(`http://localhost:8000/journey/get/${id}`)
                .then((response) => {
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
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8">Your Journey Preview</h1>
            </div>
            {journey ? (
                <><div>
                    <h2 className='text-5xl text-center text-green-600'>{journey.journeyName}</h2> </div>
                    <div className='cantainer p-4'>
                        <p className='text-xl mr-3 text-gray-500  container' >Welcome to Traval Infinity. Where Every Journey Becomes an Infinite Adventure.
                        Explore the World Without Limits, with Travel Infinity.. In here you can experience best and stress free travel experience</p>
                        </div>
                        
                        
                        <div className='cantainer p-4'>
                        <span className='text-xl mr-3 text-black  container' >Your Journey start on </span>
                        <span>{journey.StartingDate}</span>
                        </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        </>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
