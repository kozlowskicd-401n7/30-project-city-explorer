import React from 'react';

const MeetupAPI = (props) => {
  return (
    <section>
      <h3>Results from the Meetup API</h3>
      <ul className="meetups-results">
      {
        Object.keys(props.meetupData).map(key => {
          return(
         <li>
         <a href={props.meetupData[key].link}>{props.meetupData[key].name}</a>
         <p>Hosted by: {props.meetupData[key].host}</p>
         <p>Created on: {props.meetupData[key].creation_date}</p>
       </li>
          )
      })
    }
      </ul>
    </section>
  )
  }

export default MeetupAPI;