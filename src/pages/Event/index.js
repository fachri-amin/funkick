import React from 'react';
import {Link} from 'react-router-dom';

import {
    Header,
    Underline,
    ItemEvent,
    Footer,
    Button,
} from '../../components';
import css from './event.module.scss';
import {
    EventImg,
} from '../../assets';

const Event = () => (
    <div>
        <Header active={'Event'} />
        <div class={css.eventContainer}>
            <div class={css.eventTitleContainer}>
                <h1 className={css.eventTitle}>Event</h1>
                <div class={css.underline}>
                    <Underline />
                </div>
            </div>
            <div class={css.listEvent}>
                <ItemEvent 
                    title="Timnas selection"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus..."
                    image={EventImg}
                />
                <ItemEvent 
                    title="Timnas selection"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus..."
                    image={EventImg}
                    reverse
                />
                <ItemEvent 
                    title="Timnas selection"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus..."
                    image={EventImg}
                />
                <ItemEvent 
                    title="Timnas selection"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus..."
                    image={EventImg}
                    reverse
                />
            </div>
            <div class={css.buttonContainer}>
                <Button 
                    title="Muat Lebih Banyak"
                    type="secondary"
                    size="xl"
                />
            </div>
        </div>
        <Footer />
    </div>
);

export default Event;