import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {MdPreview } from 'react-icons/md';
import {AiOutlineEdit} from 'react-icons/ai';
import {MdDeleteOutline } from 'react-icons/md';



export default function AllJourneys() {
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    function getJourneys() {
      axios
      .get('http://localhost:8000/journey/')
        .then((response) => {
          setJourneys(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getJourneys();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Your Journeys</h1>
      </div>

      {journeys ? (
        <table className="w-full border-separate border-spacing-2 p-3" >
          <thead> 
            <tr>
              <th className="border border-slate-600 rounded-md text-center">No</th>
              <th className="border border-slate-600 rounded-md text-center">Journey Name</th>
              <th className="border border-slate-600 rounded-md text-center">Starting Date</th>
              <th className="border-none border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>

          <tbody>
            {journeys.map((journey, index) => (
              <tr key={journey._id} className="h-8">
                <td className="border border-slate-600 rounded-md text-center">{index + 1}</td>
                <td className="border border-slate-600 rounded-md text-center">{journey.journeyName}</td>
                <td className="border border-slate-600 rounded-md text-center">{journey.StartingDate}</td>

                <td className='border border-slate-600 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                        <Link to={`/preview/${journey._id}`}><MdPreview className="text-2xl text-green-600"/>

                        </Link>
                        <Link to={"/journey/update/${journey._id}"}><AiOutlineEdit className="text-2xl text-blue-800"/>

                        </Link>
                        <Link to={"/journey/delete/${journey._id}"}><MdDeleteOutline className="text-2xl text-red-800"/>

                        </Link>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
