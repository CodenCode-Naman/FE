import { React, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { PATCH_BOOKMARK_EVENT_ID } from '../../constants/apiEndPoints';
import { getFormattedDateFromUTCtimestamp } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';

const Card = (prop) => {
    const [isBookmarked, setIsBookmarked] = useState(prop.isBookmarked);
    const [areSeatsAvailable, setAreSeatsAvailable] = useState(prop.areSeatsAvailable);
    const [isRegistered, setIsRegistered] = useState(prop.isRegistered);
    const navigate = useNavigate();
    const date = new Date(prop.datetime).toDateString();

    const handleBookmark =  async () => {
        setIsBookmarked(!isBookmarked);
        makeRequest({...PATCH_BOOKMARK_EVENT_ID(prop.id)}, {
            data: {
                'isBookmarked': !isBookmarked
            }
        }).then(data => {
            console.log(data);
        });
    };

    const handleClickedCard = () => {
        navigate(`/event/${prop.id}`);
    };

    return  (
        <div className="card" onClick={handleClickedCard} >
            <img src={prop.imgUrl} alt={prop.name} />
            <div className="card__content">
                <h1>{prop.name.toUpperCase()}</h1>
                <div className='divider'></div>
                <p className='card-desc'>{prop.description}</p>
                 <span className='card-venue' > <b className='heavy'> VENUE </b> : {prop.venue}</span>
                <span className='card-venue' > <b className='heavy'> DATE </b> : {getFormattedDateFromUTCtimestamp(date)} </span>
                <div className="card-buttons">
                    {
                        isBookmarked ? (
                            <div className='card-bookmark row-wise btn' onClick={handleBookmark}>
                                <i className="fa-regular fa-bookmark fa-2x"></i>
                            </div>
                        ) :(
                            <div className='card-bookmark row-wise btn' onClick={handleBookmark}>
                                <i className="fa-solid fa-bookmark fa-2x"></i>
                            </div>
                        )
                    }
                    {
                        !areSeatsAvailable ? (
                            <div className='card-seatavail row-wise btn'>
                                <i className="fa-solid fa-circle-xmark fa-2x"></i>
                                <span> NO SEATS AVAILABLE</span>
                            </div>
                        ) : (<></>)
                    }
                    {
                        isRegistered ? (
                            <div className='card-register row-wise  btn'>
                                <i className="fa-solid fa-circle-check fa-2x"></i>
                                <span>REGISTERED</span>
                            </div>
                        ) : (<></>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;