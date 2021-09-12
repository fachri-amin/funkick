import React from 'react';
import { Grid } from '@material-ui/core';

import { EmptyImg } from '../../../assets';
import css from './emptyState.module.scss';

const EmptyState = ({label}) => {

    return (
        <Grid container justifyContent="center" alignItems="center" className={css.emptyStateContainer}>
            <Grid item>
                <img src={EmptyImg} alt="Gambar kosong" />
                <h1>{label}</h1>
            </Grid>
        </Grid>
    )
}

export default EmptyState;