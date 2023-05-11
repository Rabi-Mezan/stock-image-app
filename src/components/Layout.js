
import React, { useContext, useMemo } from 'react';
import UploadForm from './uploadform';
import Navbar from './Navbar';
import { Context } from '../context';

const Layout = ({ children, count }) => {
    const { state, dispatch } = useContext(Context)
    const toggle = (bool) => dispatch({ type: "collapse", payload: { bool } })

    return (
        <>
            <Navbar />
            <div className="App">
                <h1 className='bg-dark py-4 text-light display-6 '>Stock Photo Gallery <br />
                    <span className='fs-5'>{count}</span>
                </h1>
                <button className="btn btn-success mt-3 " onClick={() => toggle(!state.isCollapsed)}>{state.isCollapsed ? 'Close' : '+ Add Photo'}</button>
                <div className="clearfix mb-4"></div>

                {/* //image upload form with image preview*/}
                <div className='my-5'>
                    <UploadForm />
                    {children}
                </div>
            </div>

        </>
    );
};

export default Layout;