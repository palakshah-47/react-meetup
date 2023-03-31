import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    fetch('https://react-getting-started-d5366-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetUps = [];
      for(const key in data){
        const meetup = {
          id: key,
          ...data[key]
        }
        meetUps.push(meetup);
      }
      setIsLoading(false);
      setMeetupData(meetUps);
    })
  }, []) 

  if(isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
    return <section>
        <h1>All Meet Ups page</h1>
        <MeetupList meetups = {meetupData}/>
    </section>;
}
export default AllMeetUps;