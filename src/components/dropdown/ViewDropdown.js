import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewDropdown() {

    return(
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="https://unsplash.com/">Action</Dropdown.Item>
            <Dropdown.Item href="https://unsplash.com/">Another action</Dropdown.Item>
            <Dropdown.Item href="https://unsplash.com/">Something else</Dropdown.Item>
        </DropdownButton>
    )
}

export default ViewDropdown