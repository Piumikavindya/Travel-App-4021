import React from 'react'
import Select from 'react-select';

export default function JourneyForm() {

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


  return (
    <div className="container flex w-1000">
  <form>
    <div className="row">
      <div className="col-md-6 w-600 p-6">
        <div className="mb-3">
          <label For="JourneyName" className="form-label"> Journey Name</label>
          <input
            type="text"
            className="form-control"
            id="JourneyName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label For="NoOfDates" className="form-label w-200">
            No of Dates
          </label>
          <input type="text" className="form-control  w-600" id="NoOfDates" />
        </div>
        <div className="mb-3">
          <label For="NoOfMembers" className="form-label">
            No of Members
          </label>
          <input
            type="text"
            className="form-control"
            id="NoOfMembers"
            aria-describedby="NoOfMembers"
          />
        </div>
        <div className="mb-3">
          <label For="StartingDate" className="form-label">
            Starting date
          </label>
          <input
            type="date"
            className="form-control"
            id="StartingDate"
            aria-describedby="StartingDate"
          />
        </div>
      </div> 

      <div className="col-md-6 p-10 w-400" >
        <div className="mb-3">
          <label For="Locations" className="form-label">
            Choose Locations (Multiple Selection)
          </label>
          <Select
                isMulti
                options={options}
                name="Locations"
                className="basic-multi-select"
                classNamePrefix="select"
              />
        </div>
        <div className="mb-3">
          <label For="Events" className="form-label">
           Choose Events (Multiple Selection)
          </label>
          <Select
                isMulti
                options={options1}
                name="Events"
                className="basic-multi-select"
                classNamePrefix="select"
              />
        </div>
        </div>

        <div className="col-md-6 p-1" >
        <div className="mb-3">
          <label For="Resorts" className="form-label">
           Choose Resorts (Multiple Selection)
          </label>
          <select
            multiple
            className="form-control"
            id="Resorts"
            name="Resorts"
          >
             <option value="Galle Fort">Rich Palace</option>
            <option value="Pasikuda">RK Resort</option>
            <option value="Hikkaduwa">Chamaya Inn</option>
            <option value="Hikkaduwa">CD Resotrs</option>
            <option value="Hikkaduwa">Hikkaduwa Inn</option>
          </select>
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

