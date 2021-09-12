import React from 'react';
import {Link} from 'react-router-dom';

import {
    Header,
    Underline,
    ItemEvent,
    Footer,
    Button,
    EmptyState,
} from '../../components';
import css from './event.module.scss';
import {
    EventImg,
} from '../../assets';

// const data = [
//     {
//         title: "Timnas selection",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
//         image: EventImg,
//     },
//     {
//         title: "Timnas selection",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
//         image: EventImg,
//     },
//     {
//         title: "Timnas selection",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
//         image: EventImg,
//     },
//     {
//         title: "Timnas selection",
//         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
//         image: EventImg,
//     },
// ]

const data = [];

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
            {data.length < 1 && 
                <EmptyState label="Tidak ada Event" />
            }
            {data.length >= 1 && 
                <>
                    <div class={css.listEvent}>
                        {data.map((item, index) => {
                            if(index%2 === 0) {
                                return (
                                    <ItemEvent 
                                        title={item.title}
                                        desc={item.desc}
                                        image={item.image}
                                    />
                                )
                            } else {
                                return (
                                    <ItemEvent 
                                        title={item.title}
                                        desc={item.desc}
                                        image={item.image}
                                        reverse
                                    />
                                )
                            }
                        })}
                    </div>
                    <div class={css.buttonContainer}>
                        <Button 
                            title="Muat Lebih Banyak"
                            type="secondary"
                            size="xl"
                        />
                    </div>
                </>
            }
        </div>
        <Footer />
    </div>
);

export default Event;