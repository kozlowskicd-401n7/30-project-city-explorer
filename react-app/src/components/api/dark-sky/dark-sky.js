import React from 'react';

class DarkSkyAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
           <section>
             <h3>Results from the Dark Sky API</h3>
             <ul>
           {this.props.fetchData('weather').map((day) => {
             console.log(day.time, day.forcast);
             return (
               <li>
                 The forcast for {day.time} is: {day.forcast}
               </li>
             );
           })}
         </ul>
           </section>
         );
  }
}

export default DarkSkyAPI;