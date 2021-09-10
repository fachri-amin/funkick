import { createStore, action } from 'easy-peasy';
import moment from 'moment';

const store = createStore({
    tglBooking: moment(new Date()).format("DD/MM/YYYY"),
    setTglBooking: action((state, payload) => {
        state.tglBooking = moment(payload).format("DD/MM/YYYY");
    })
});

export default store;