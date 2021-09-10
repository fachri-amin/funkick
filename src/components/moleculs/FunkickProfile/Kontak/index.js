import React from 'react';
import { 
    Grid,
} from '@material-ui/core';

import { 
    Button,
    InputText,
} from '../../../../components';
import { AboutUsImg, Instagram, Whatsapp } from '../../../../assets';
import css from './kontak.module.scss';

const Kontak = () => {

    return (
        <div className={css.kontakContainer}>
            <Grid container direction="row">
                <Grid item md={6} className={css.leftKontak}>
                    <div className={css.leftKontakContent}>
                        <img src={AboutUsImg} alt="gambar" />
                    </div>
                </Grid>
                <Grid item md={6} className={css.rightKontak}>
                    <div className={css.rightKontakContent}>
                        <form>
                            <InputText label="Nama" />
                            <InputText label="Subject" />
                            <InputText label="Message" multiline />
                            <Button title="kirim" type="secondary" size="xl" />
                        </form>
                        <div className={css.orBorder}>
                            <div className={css.orContainer}>
                                <p>or</p>
                            </div>
                        </div>
                        <div className={css.social}>
                            <a href="#">
                                <img src={Whatsapp} alt="whatsapp" />
                            </a>
                            <a href="#">
                                <img src={Instagram} alt="instagram" />
                            </a>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Kontak;