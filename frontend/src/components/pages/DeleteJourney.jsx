import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function DeleteJourney() {
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDeleteJourney = ()=>{
        axios.delete(`http://localhost:8000/journey/delete/${id}`)
        .then(() =>{
            navigate('/');
            
        }).catch((err) =>{
            console.log(err);
        });
    };
  return (
    <div className="p-4">
    <div className="flex flex-col items-center border-2 border-red-300 rounded-xl w-[600px] p-8 mx-auto">
      <h3 className="text-2xl">Are you sure you want to delete this journey?</h3>
      <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteJourney}>
        Yes, Delete Journey
      </button>
    </div>
  </div>
  )
}
