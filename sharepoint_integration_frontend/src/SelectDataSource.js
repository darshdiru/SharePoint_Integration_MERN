import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SelectDataSource.css';

const SelectDataSource = () => {
    const [listValue, setListValue] = useState('Choose from the dropdown');
    const history = useHistory();

    const handleChange = (event) => {
        setListValue(event.target.value);
    };

    const handleClick = () => {
        history.push('/configuration-page');
    };

    return <div id="dataSource">
        <h2>Welcome to SharePoint Integration App</h2>
        <h3>Select Data Source from the list</h3>
        <div id="select"><select value={listValue} onChange={handleChange}>
        <option value='choose'>Choose from the dropdown</option>
            <option value='sharepoint'>SharePoint</option>
            <option value='aem'>AEM</option>
            <option value='onedrive'>One Drive</option>
        </select>
            </div>
        <button type='submit' onClick={handleClick} id='proceedButton'>Proceed</button>
        </div>

};

export default SelectDataSource;