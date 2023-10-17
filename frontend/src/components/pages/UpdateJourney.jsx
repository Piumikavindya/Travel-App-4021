import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function UpdateJourney() {

    const [journeyName, setJourneyName] = useState('');
    const [NoOfDates, setNoOfDates] = useState('');
    const [NoOfMembers, setNoOfMembers] = useState('');
    const [StartingDate, setStartingDate] = useState('');
    const [ContactNO, setContactNO] = useState('');
    const [Locations, setLocations] = useState([]);
    const [Events, setEvents] = useState([]);
    const [Resorts, setResorts] = useState([]);
    const [Packages, setPackages] = useState([]);
    const {id} = useParams();
   
    useEffect(() => {
      // Fetch the journey data when the component mounts
      axios
        .get(`http://localhost:8000/journey/get/${id}`)
        .then((response) => {
          const journeyData = response.data; // Assuming response.data has the journey details
          setJourneyName(journeyData.journeyName);
          setNoOfDates(journeyData.NoOfDates);
          setNoOfMembers(journeyData.NoOfMembers);
          setStartingDate(journeyData.StartingDate);
          setContactNO(journeyData.ContactNO);
          setLocations(journeyData.Locations.map((value) => ({ value, label: value })));
          setEvents(journeyData.Events.map((value) => ({ value, label: value })));
          setResorts(journeyData.Resorts.map((value) => ({ value, label: value })));
          setPackages(journeyData.Packages.map((value) => ({ value, label: value })));
        })
        .catch((err) => {
          console.error(err);
        });
    }, [id]);


    function sendData(e){
        e.preventDefault();

        const locationValues = Locations.map((location) => location.value);
        const eventValues = Events.map((event) => event.value);
        const resortValues = Resorts.map((resort) => resort.value);
        const packageValues = Packages.map((packages) => packages.value);
        const newJourney = {
            journeyName,
            NoOfDates,
            NoOfMembers,
            StartingDate,
            ContactNO,
            Locations: locationValues,
            Events: eventValues,
            Resorts: resortValues,
            Packages: packageValues
        }
        axios.put(`http://localhost:8000/journey/update/${id}`,newJourney).then(()=>{
            alert("Journey Updated");
            setJourneyName('');
            setNoOfDates('');
            setNoOfMembers('');
            setStartingDate('');
            setContactNO('');
            setLocations([]);
            setEvents([]);
            setResorts([]);
            setPackages([]);
          }).catch((err)=>{
            alert(err)
          })
          console.log(newJourney)
    }
    const options = [
        { value: 'Galle Fort', label: 'Galle Fort' },
        { value: 'Pasikuda', label: 'Pasikuda' },
        { value: 'Hikkaduwa', label: 'Hikkaduwa' },
        { value: 'AnotherLocation', label: 'Another Location' },
        { value: 'YetAnotherLocation', label: 'Yet Another Location' },
      ];

      const options1 = [
        { value: 'Galle Night', label: 'Galle Night' },
        { value: 'Cultural fes', label: 'Cultural fes' },
        { value: 'Hikkaduwa', label: 'Hikkaduwa' },
        { value: 'AnotherEvent', label: 'Another Event' },
        { value: 'Musical', label: 'Musical' },
      ];

      const options2 = [
        { value: 'Galle Palace', label: 'Galle Palace' },
        { value: 'Chamaya Inn', label: 'Chamaya Inn' },
        { value: 'Hikkaduwa', label: 'Hikkaduwa' },
        { value: 'Another Inn', label: 'Another Inn' },
        { value: 'Musical', label: 'Musical' },
      ];

      const options3 = [
        { value: 'Adventure Package', label: 'Adventure Package' },
        { value: 'Cultural Package', label: 'Cultural Package' },
        { value: 'Beach Package', label: 'Beach Package' },
        { value: 'Diving Package', label: 'Diving Package' },
       
      ];

  return (
    <div className="container flex w-4000">
    <form onSubmit={sendData}>
      <div className="row">
        <div className="col-md-6 w-600 p-6">
          <div className="mb-4">
            <label For="journeyName" className="form-label custom-label">Journey Name</label>
            <input
              type="text"
              className="form-control custom-input "
              id="journeyName"
              aria-describedby="journeyName"
              onChange={(e)=>{
                setJourneyName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label For="NoOfDates" className="form-label  custom-label w-200">
              No of Dates
            </label>
            <input type="text" className="form-control custom-input  w-600" id="NoOfDates"
            onChange={(e)=>{
                setNoOfDates(e.target.value);
              }} />
          </div>
          <div className="mb-4">
            <label For="NoOfMembers" className="form-label custom-label">
              No of Members
            </label>
            <input
              type="text"
              className="form-control custom-input "
              id="NoOfMembers"
              aria-describedby="NoOfMembers"
              onChange={(e)=>{
                setNoOfMembers(e.target.value);
              }}
            />
          </div>
          <div className="mb-4"> 
            <label For="StartingDate" className="form-label custom-label">
              Starting date
            </label>
            <input
              type="date"
              className="form-control custom-input "
              id="StartingDate"
              aria-describedby="StartingDate"
              onChange={(e)=>{
                setStartingDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label For="ContactNO" className="form-label custom-label">Contact NO</label>
            <input
              type="text"
              className="form-control custom-input "
              id="ContactNO"
              aria-describedby="ContactNO"
              onChange={(e)=>{
                setContactNO(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="col-md-6 p-10 w-800">
          <div className="mb-4 w-800">
            <label For="Locations" className="form-label w-1000 custom-label ">
              Choose Locations (Multiple Selection)
            </label>
            <Select
              isMulti
              options={options}
              name="Locations"
              className="basic-multi-select custom-select"
              classNamePrefix="select"
              onChange={(selectedOptions) => {
                setLocations(selectedOptions);
              }}
            />
          </div>
          <div className="mb-4">
            <label For="Events" className="form-label custom-label">
              Choose Events (Multiple Selection)
            </label>
            <Select
              isMulti
              options={options1}
              name="Events"
              className="basic-multi-select custom-select"
              classNamePrefix="select"
              onChange={(selectedOptions)=>{
                setEvents(selectedOptions);
              }}
            />
          </div>
          <div className="mb-4">
            <label For="Resorts" className="form-label custom-label">
              Choose Resorts (Multiple Selection)
            </label>
            <Select
              isMulti
              options={options2}
              name="Resorts"
              className="basic-multi-select custom-select"
              classNamePrefix="select"
              onChange={(selectedOptions)=>{
                setResorts(selectedOptions);
              }}
            />
          </div>
          <div className="mb-4 w-800">
            <label For="Packages" className="form-label custom-label">
              Choose Packages (Multiple Selection)
            </label>
            <Select
              isMulti
              options={options3}
              name="Packages"
              className="basic-multi-select custom-select"
              classNamePrefix="select"
              onChange={(selectedOptions)=>{
                setPackages(selectedOptions);
              }}
            />
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary bg-black">
        Submit
      </button>
    </form>
</div>

  )
}

