import React from 'react';
import PropTypes from 'prop-types';
import {
    Select,
    InputLabel,
    MenuItem,
    FormControl,
} from '@material-ui/core';

const CustomSelect = ({
    label,
    listItem,
    onChange,
    value,
}) => {

    return (
        <FormControl>
            <InputLabel id="pilih-lapangan-label">{label}</InputLabel>
            <Select
                labelId="pilih-lapangan-label"
                id="pilih-lapangan"
                value={value}
                onChange={onChange}
            >
                {listItem.map((item) => (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

CustomSelect.propTypes = {
    label: PropTypes.string.isRequired,
    listItem: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired
}

export default CustomSelect;