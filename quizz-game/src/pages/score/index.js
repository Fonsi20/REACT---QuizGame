import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './style.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

//BODY
function home(props) {
    return (
        <main>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    className="root"
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className="paper">
                        <Typography variant="h5" component="h3"><b>Scores</b></Typography>
                        <Typography component="p"> You can see the best 5 scores.</Typography>

                        <div>
                            <Table style={{marginTop:'20px', marginBottom:'20px'}} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Email (User)</TableCell>
                                        <TableCell align="right">True</TableCell>
                                        <TableCell align="right">False</TableCell>
                                        <TableCell align="right">Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <Button
                                onClick='startGame'
                                fullWidth
                                variant="contained" color="secondary"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                Go Back Home</Button>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )

};

home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default home;