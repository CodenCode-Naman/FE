import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import makeRequest from "../../utils/makeRequest";
import CardContents from "../../components/CardContents";
import { GET_ALL_EVENTS } from "../../constants/apiEndPoints";

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        makeRequest({...GET_ALL_EVENTS},{}).then(data => {
            setEvents(data);
            console.log(data);
        });

    },[]);  
    return ( 
        <div className="Home">
            <CardContents eventsData={events} />
        </div>
    );
};
 
export default Home;
