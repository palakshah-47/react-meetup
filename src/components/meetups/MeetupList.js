import MeetupItem from './MeetupItem';
import classes from './MeetupItem.module.css';

const MeetupList = (props) => {
    return <ul className={classes.list}>
        {props.meetups.map((meetup, index) => 
        <MeetupItem 
         key ={`${meetup.id} - ${index}`}
         id = {meetup.id}
         image = {meetup.image}
         title = {meetup.title}
         address = {meetup.address}
         description = {meetup.description}
        />
        )}
    </ul>
}

export default MeetupList;