import React from 'react';
import PropTypes from 'prop-types';
import {
    withStyles,
    TextField
} from '@material-ui/core';

const StyledTextField = withStyles({
    root: {
        backgroundColor: '#f3f3f3',
        borderRadius: 4,
        marginBottom: 36,
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #8e8e8e',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
})(TextField);

const InputText = ({
    onChange,
    label,
    multiline,
}) => {

    if(multiline) {
        return (
            <StyledTextField
                onChange={onChange}
                label={label}
                variant="outlined"
                onChange
                multiline
                rows={5}
                fullWidth
            />
        )
    }

    return (
        <StyledTextField
            label={label}
            variant="outlined"
            onChange
            fullWidth
        />
    )
}

InputText.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    multiline: PropTypes.bool
};

InputText.defaultProps = {
    onChange: () => {},
    multiline: false,
}

export default InputText;