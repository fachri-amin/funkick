import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";
import PropTypes from 'prop-types';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#DC346A',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#284D3F',
        },
    },
});

const CustomDatePicker = ({date, changeDate}) => {
    return (
        <ThemeProvider theme={theme}>
            <DatePicker
                autoOk
                orientation="landscape"
                variant="static"
                openTo="date"
                value={date}
                onChange={changeDate}
            />
        </ThemeProvider>
    )
}

CustomDatePicker.propTypes = {
    date: PropTypes.string.isRequired,
    changeDate: PropTypes.func,
}

CustomDatePicker.defaultProps = {
    changeDate: () => {},
}

export default CustomDatePicker;
