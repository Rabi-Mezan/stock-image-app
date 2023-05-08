import React from 'react';

const Card = (props) => {
    console.log(props);
    return (

        <div className="col g-4">
            <div class="card" style={{ width: "18rem" }}>
                <img src={props.src} class="card-img-top" alt="img" />
            </div>

        </div>

    );
};

export default Card;