import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead,
    TableContainer,
    withStyles,
} from '@material-ui/core';

import {
    Button,
} from '../../../components';

const TableCellHead = withStyles((theme) => ({
    root: {
        fontWeight: 700
    }
}))(TableCell);

const TableCellKosong = withStyles((theme) => ({
    root: {
        color: '#DC346A',
    }
}))(TableCell);

const TableCellBooked = withStyles((theme) => ({
    root: {
        color: '#808080',
    }
}))(TableCell);


const CekLapangan = ({
    bookingHandle,
    data,
}) => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCellHead>Jam</TableCellHead>
                        <TableCellHead>Status</TableCellHead>
                        <TableCellHead>Pesan</TableCellHead>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow>
                            <TableCell>{item.jam}</TableCell>
                            {item.status === 'kosong' && <TableCellKosong>{item.status}</TableCellKosong>}
                            {item.status !== 'kosong' && <TableCellBooked>{item.status}</TableCellBooked>}
                            <TableCell>
                                {item.status === 'kosong' && (
                                    <Button
                                        title="Pesan"
                                        onClick={bookingHandle}
                                    />
                                )}
                                {item.status !== 'kosong' && (
                                    <Button
                                        title="Booked"
                                        type="disable"
                                    />
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

CekLapangan.propTypes = {
    bookingHandle: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
};

CekLapangan.defaultProps = {
    bookingHandle: () => {},
    data: [],
};

export default CekLapangan;