import React from 'react';
import {Link} from 'react-router-dom';

import {
    Header,
} from '../../components';
import './event.module.scss';

const Event = () => (
    <div>
        <Header active={'Event'} />
        <h1>Hallo ini Event</h1>
        <Link to='/'>Home</Link>
    </div>
);

export default Event;