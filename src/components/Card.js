import React from 'react';

const Card = ({ path, title }) => {
    // console.log(props);
    return (

        <div className="col g-4">
            <div class="card" style={{ width: "18rem", background: "orange" }}>
                <img src={path} class="card-img-top" alt={title} />
                <strong className='py-2'>{title}</strong>
            </div>

        </div>

    );
};

export default Card;