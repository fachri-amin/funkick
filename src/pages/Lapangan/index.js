import React, { useState, useEffect } from 'react';
import {
    Grid,
} from '@material-ui/core';
import { useStoreState, useStoreActions } from 'easy-peasy';

import {
    CustomDatePicker,
    Button,
    CustomSelect,
    CekLapangan,
    Header,
    Underline,
    Footer,
} from '../../components';
import css from './lapangan.module.scss';

let jam = [
    {
        jam: '07.00-08.00',
        status: 'kosong',
    },
    {
        jam: '08.00-09.00',
        status: 'kosong',
    },
    {
        jam: '09.00-10.00',
        status: 'kosong',
    },
    {
        jam: '10.00-11.00',
        status: 'kosong',
    },
    {
        jam: '11.00-12.00',
        status: 'booked',
    },
    {
        jam: '12.00-13.00',
        status: 'kosong',
    },
    {
        jam: '13.00-14.00',
        status: 'booked',
    },
    {
        jam: '14.00-15.00',
        status: 'kosong',
    },
    {
        jam: '15.00-16.00',
        status: 'booked',
    },
    {
        jam: '16.00-17.00',
        status: 'kosong',
    },
    {
        jam: '17.00-18.00',
        status: 'booked',
    },
    {
        jam: '18.00-19.00',
        status: 'booked',
    },
    {
        jam: '19.00-20.00',
        status: 'booked',
    },
    {
        jam: '20.00-21.00',
        status: 'booked',
    },
    {
        jam: '21.00-22.00',
        status: 'booked',
    },
    {
        jam: '22.00-23.00',
        status: 'booked',
    },
    {
        jam: '23.00-24.00',
        status: 'booked',
    },
];

const nomorLapangan = [
    {
        value: '1',
        label: 'Lapangan 1'
    },
    {
        value: '2',
        label: 'Lapangan 2'
    },
    {
        value: '3',
        label: 'Lapangan 3'
    },
    {
        value: '4',
        label: 'Lapangan 4'
    },
]

const Lapangan = () => {

    const tglBooking = useStoreState((state) => state.tglBooking);
    const setTglBooking = useStoreActions(actions => actions.setTglBooking);
    const [lapanganTerpilih, setLapanganTerpilih] = useState('1');
    const [date, changeDate] = useState(tglBooking);

    return (
        <div>
            <Header active={'Lapangan'} />
            <div class={css.lapanganTitleContainer}>
                <h1 className={css.lapanganTitle}>Lapangan</h1>
                <div class={css.underline}>
                    <Underline />
                </div>
            </div>
            <div class={css.lapanganContainer}>
                <Grid container spacing={10}>
                    <Grid item md={6}>
                        <div className={css.select}>
                            <CustomSelect 
                                label="Pilih Lapangan"
                                value={lapanganTerpilih}
                                listItem={nomorLapangan}
                                onChange={(event) => setLapanganTerpilih(event.target.value)}
                            />
                        </div>
                        <div class={css.datePickerContainer}>
                            <CustomDatePicker
                                date={date}
                                changeDate={changeDate}
                            />
                        </div>
                        <div class={css.buttonCekLapanganContainer}>
                            <Button 
                                type="primary-outline-text"
                                title="Cek Lapangan"
                                onChange={() => setTglBooking(date)}
                            />
                        </div>
                    </Grid>
                    <Grid item md={6}>
                        <CekLapangan data={jam} />
                    </Grid>
                </Grid>

                
            </div>
            <Footer />
        </div>
    )
}

export default Lapangan;