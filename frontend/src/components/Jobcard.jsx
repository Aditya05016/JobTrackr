function Jobcard({company,position,status,location,date}) {

    return (
        <div>
            <div>
                  <h1>Your <b>Jobcard</b></h1>
                  <p>This is comapny name {company}</p>
                  <p>This is position {position}</p>
                  <p>This is status {status}</p>
                  <p>This is location {location}</p>
                  <p>This is date {date}</p>
            </div>
          

        </div>


    )
}

export default Jobcard;