import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';
import {
    Grid,
} from '@material-ui/core';
import moment from 'moment';

import {
    Underline,
    Button,
    Header,
    CustomDatePicker,
    FunkickProfile,
    Footer,
} from '../../components';
import css from './home.module.scss';

const Home = () => {
    const tglBooking = useStoreState((state) => state.tglBooking);
    const setTglBooking = useStoreActions(actions => actions.setTglBooking);
    const [date, changeDate] = useState(moment)

    return (
        <div>
            <Header />
            <div className={css.content}>
                <Grid container direction="row" className={css.heroBanner}>
                    <Grid item md={6} className={css.heroLeft}>
                        <div className={css.heroLeftContent}>
                            <h1>Have Fun with Your</h1>
                            <h1>Team in Our Pitch</h1>
                            <p>Great pitch makes great experience</p>
                        </div>
                    </Grid>
                    <Grid item md={6} className={css.heroRight}>
                        <div className={css.heroRightContent}>
                            <CustomDatePicker 
                                date={date}
                                changeDate={changeDate}
                            />
                            <Button
                                type="primary-outline"
                                size="lg"
                                title={"Cek Lapangan Kosong"}
                                onClick={() => setTglBooking(date)}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <FunkickProfile />
            <Footer />
        </div>
    )
};

export default Home;