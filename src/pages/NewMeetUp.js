import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      `https://react-meetup-list-5e5c3-default-rtdb.firebaseio.com/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUp;
