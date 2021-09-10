import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
} from '@material-ui/core';

import {
    Button,
} from '../../../components';
import { EventImg } from '../../../assets';
import css from './itemEvent.module.scss';

const ItemEvent = ({
    title,
    desc,
    image,
    reverse,
}) => {
    
    return (
        <Grid container direction={reverse ? "row-reverse" : "row"} justifyContent="space-between" className={css.itemEventContainer}>
            <Grid item md={6} className={css.itemEventLeft}>
                <img src={image} alt="Gambar Event" />
            </Grid>
            <Grid item md={6} className={css.itemEventRight}>
                <h1>{title}</h1>
                <p>
                    {desc}
                </p>
                <Button 
                    title="Lihat selengkapnya"
                    type="primary-outline-text"
                />
            </Grid>
        </Grid>
    )
}

ItemEvent.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.any,
    reverse: PropTypes.bool,
};

ItemEvent.defaultProps = {
    reverse: false,
    image: EventImg,
};

export default ItemEvent;