import { useState, useEffect } from "react";
import classes from "./AllMeetUps.module.css";

import MeetupList from "../components/meetups/MeetupList";

const AllMeetUps = () => {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://react-meetup-list-5e5c3-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <section className={classes.loader}>
        <p>Loading...</p>
        <div></div>
        <div></div>
        <div></div>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetUps;
