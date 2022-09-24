import {useHistory} from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUp() {
    const history = useHistory();
    const addMeetUpHandler = (meetupData) => {
        fetch('https://react-getting-started-d5366-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
     ).then(() => {
        history.replace('/');
     })
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
    </section>
}
export default NewMeetUp;