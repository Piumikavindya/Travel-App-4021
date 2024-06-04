import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../../styles/PreviewJourney.css";
import IList from '../../components/form/IList';

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

    const formattedStartingDate = journey.StartingDate
    ? new Date(journey.StartingDate).toLocaleDateString()
    : '';


    return (
        <div className='p-4'>
           
           {journey && journey.journeyName && formattedStartingDate ? (
                <div>
        <div  className='header'>

        <div className='headerTitle'>
        <h2 className='text-5xl text-center headerTitleLg text-white'>{journey.journeyName}</h2>
        <p className='headerTitleSm'>$500 per person</p>
        </div>
        <img src="/camera.jpg" className='headerImg' alt="C" />


</div>





                  
                    <div className='container p-4'>
                        <p className='text-xl  text-gray-500'>
                            Welcome to Travel Infinity, where every journey becomes an infinite adventure.
                            Explore the world without limits with Travel Infinity. Here, you can experience the best and stress-free travel experience.
                        </p>
                    </div>
                    <div className='container p-4'>
                        <p className="textff" >Lets Start Your Journey</p>
                        <p className='text-xl p-4 container text-black'>
                            Your journey of {journey.NoOfDates} days, will start on {formattedStartingDate}  . <br /> 
                            You have {journey.NoOfMembers} fellow travelers joining you on this adventure. 
                          
                        </p>
                        <p className="textff" >Your Accomodations</p>
                        <p className='text-xl p-4 container text-black'>
            
                            {journey.Resorts && (
                                <span>
                                    During your journey, you'll be staying at {journey.Resorts}, and your reservations are handled by us.
                                </span>
                            )}
                        </p>
                        <IList className="image-list image-list-item"></IList>


                        <p className="textff p-5" >Destinations your going to Visit</p>
                        <p className='text-xl p-4 container text-black'>
            
                        {journey.Locations && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected locations for your journey are <br />  
                                {journey.Locations.map((location, index) => (
                                   <React.Fragment key={location}>
                                   {index > 0 && <span>  </span>}
                                   {location} <br />
                                 </React.Fragment>
                                ))}
                            </p>
                        </div>
                    )}
                        </p>
                    </div>
                    
                    <p className="textff p-5" >Events your going to Participate</p>

                    {journey.Events && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected events for your journey are <br /> 
                                {journey.Events.map((event, index) => (
                                    <React.Fragment key={event}>
                                    {index > 0 && <span>  </span>}
                                    {event} <br />
                                  </React.Fragment>
                                 
                                ))}
                            </p>
                        </div>
                    )}

<p className="textff p-5" >Packages you choose</p>
                    {journey.Packages && (
                        <div className='container p-6'>
                            <p className='text-xl text-black'>
                                The selected packages for your journey are<br /> 
                                {journey.Packages.map((packages, index) => (
                                     <React.Fragment key={packages}>
                                     {index > 0 && <span>  </span>}
                                     {packages} <br />
                                   </React.Fragment>
                                ))}
                            </p>
                           
                        </div>
                    )}

<p className='text-xl text-gray-500'>You can decide which day which time you want to visit thses places during your journey. Transpotaions will be provided when you nessary</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
