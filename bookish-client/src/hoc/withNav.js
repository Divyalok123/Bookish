import React from 'react';
import { Navbar } from '../components';

const AddNav = OurComp => {
    const NewComp = (props) => {
        return (
            <>
                <Navbar />
                <OurComp {...props} />
            </>
        )
    }
    return NewComp;
}

export default AddNav;