import React, { useMemo } from 'react';

const Card = ({ path, title, createdAt }) => {
    // console.log(props);

    const timeStamp = useMemo(() => {
        const date = `${new Date(createdAt.seconds * 1000)}`.split(" ")
        return `${date[1]} ${date[2]}, ${date[3]}`
    }, [])

    return (

        <div class="col">
            <div class="card" >
                <img style={{ height: "350px", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} src={path} class="card-img-top" alt={title} />
                <div class="card-body ">
                    <div className='d-flex justify-content-between align-items-center my-3'>
                        <h5 class="card-title text-start display-6 fs-4">{title}</h5>
                        <a className='' style={{ width: "100px" }} href={path} download>
                            <button className='btn btn-sm btn-success' style={{ fontSize: ".8rem" }}  >Downloand</button>
                        </a>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <small>@userInfo</small>
                        <small class="card-text">{timeStamp}</small>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;