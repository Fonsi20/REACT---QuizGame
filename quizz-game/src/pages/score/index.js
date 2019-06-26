import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './style.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

function createData(name, score ) {
    return { name, score };
}

const rows = [
    createData('Fonsi20fernandez@gmail.com', 159),
    createData('Ice@gmail.com', 237),
    createData('Mario@gmail.com', 262),
    createData('Emma@gmail.com', 305),
    createData('Fany@gmail.com', 356),
];

//BODY
function score(props) {
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
                    alignItems="center">
                    <Paper className="paper">
                        <Typography variant="h5" component="h3"><b>Scores</b></Typography>
                        <Typography component="p"> You can see the best 5 scores.</Typography>

                        <div>

                            <Table style={{ marginTop: '20px', marginBottom: '20px' }} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Email (User)</TableCell>
                                        <TableCell align="right">Score</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.score}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <Link to="/">
                        <Button
                            onClick='startGame'
                            fullWidth
                            variant="contained" color="secondary"
                            className="button"
                            style={{ marginTop: '10px' }}>
                            Go Back Home</Button></Link>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )

};

score.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default score;