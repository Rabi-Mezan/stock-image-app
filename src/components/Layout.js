import React from 'react';
import UploadForm from './uploadform';
import Navbar from './Navbar';

const Layout = ({ children, onChange, onSubmit, toggle, state, count }) => {
    return (
        <>
            <Navbar />
            <div className="App">
                <h1 className='bg-warning py-4 display-6 fs-2'>Stock Photo Gallery <br />
                    <span className='fs-6'> {count}</span></h1>
                <button className="btn btn-success mt-3 " onClick={() => toggle(!state.isCollapsed)}>{state.isCollapsed ? 'Close' : '+ Add Photo'}</button>
                <div className="clearfix mb-4"></div>

                {/* //image upload form */}
                <div className='my-5'>
                    <UploadForm
                        inputs={state.inputs}
                        isVisible={state.isCollapsed}
                        onChange={onChange}
                        onSubmit={onSubmit}
                    />
                    {children}
                </div>
            </div>

        </>
    );
};

export default Layout;