import React from 'react';
import './CardContents.css';

const CardContents = (props) => {
    return (
        <div className='cards-contents'> {props.event
            ? props.event.map((event, id) => {
                return (
                    <Card 
                    key={id}
                    {...event}
                     />
                );
            }
            )
            : null

        }
        </div>
    );
};

export default CardContents;