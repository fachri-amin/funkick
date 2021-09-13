import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import {
    Header,
    Underline,
    ItemEvent,
    Footer,
    Button,
    EmptyState,
    Loading,
} from '../../components';
import css from './event.module.scss';
import {
    EventImg,
} from '../../assets';

let data = [
    {
        title: "Timnas selection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
        image: EventImg,
    },
    {
        title: "Timnas selection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
        image: EventImg,
    },
    {
        title: "Timnas selection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
        image: EventImg,
    },
    {
        title: "Timnas selection",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate consequat nibh, non lacinia nisi iaculis malesuada. Aenean sit amet risus velit. Nullam lacus sem, dignissim quis est condimentum, cursus fringilla ex. Sed vehicula, diam ac eleifend tristique, lacus est placerat metus, id consectetur orci nibh gravida erat. Proin ut dictum ex, ut sodales leo. Etiam malesuada tortor sed blandit porta. Integer semper et massa ut mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur luctus orci ac purus aliquet cursus...",
        image: EventImg,
    },
]

// const data = [];

const Event = () => {

    const [listEvent, setListEvent] = useState(data);
    const [isFetching, setIsFetching] = useState(false);
    const loadMore = () => {
        setIsFetching(true);

        setTimeout(() => {
            setListEvent([...listEvent, ...listEvent]);
            setIsFetching(false);
        }, 2000);
    }

    return (

        <div>
            <Header active={'Event'} />
            <div class={css.eventContainer}>
                <div class={css.eventTitleContainer}>
                    <h1 className={css.eventTitle}>Event</h1>
                    <div class={css.underline}>
                        <Underline />
                    </div>
                </div>
                {listEvent.length < 1 && 
                    <EmptyState label="Tidak ada Event" />
                }
                {listEvent.length >= 1 && 
                    <>
                        <div class={css.listEvent}>
                            {listEvent.map((item, index) => {
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
                            {isFetching && <Loading />}
                            {!isFetching && (
                                <Button 
                                    title="Muat Lebih Banyak"
                                    type="secondary"
                                    size="xl"
                                    onClick={loadMore}
                                />
                            )}
                        </div>
                    </>
                }
            </div>
            <Footer />
        </div>
    )
};

export default Event;