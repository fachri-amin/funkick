import React from 'react';
import {
    Grid,
} from '@material-ui/core';

import css from './tentangKami.module.scss';
import { AboutUsImg } from '../../../../assets';

const TentangKami = () => (
    <div className={css.tentangKamiContainer} >
        <Grid container direction="row">
            <Grid item md={6} className={css.leftAboutUs}>
                <div className={css.leftAboutUsContent}>
                    <img src={AboutUsImg} alt="gambar" />
                </div>
            </Grid>
            <Grid item md={6} className={css.rightAboutUs}>
                <div className={css.rightAboutUsContent}>
                    <h1>Funkick</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Sed molestie cursus urna ac scelerisque. Quisque 
                        eget condimentum nisl. Pellentesque ultrices diam 
                        risus, et eleifend purus finibus ut. In non vulputate 
                        tortor, quis lacinia mi. Praesent fringilla scelerisque 
                        porta. Nam nec metus vel turpis pretium interdum at 
                        sit amet enim. Donec vulputate sed metus vel efficitur. 
                        Etiam nec imperdiet tortor. Duis sollicitudin 
                        consectetur quam vel facilisis. Cras vestibulum urna 
                        eu massa sagittis, ut pulvinar est sollicitudin. Etiam 
                        enim ipsum, dictum in lacinia id, porttitor in ligula.</p>
                </div>
            </Grid>
        </Grid>
    </div>
)

export default TentangKami;