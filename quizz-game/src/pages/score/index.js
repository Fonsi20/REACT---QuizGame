import React, { Component } from 'react';
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
import axios from 'axios';

//BODY
class score extends Component {

    constructor(props) {
        super(props);

        this.state = {
            body: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/results')
            .then(res => JSON.parse(JSON.stringify(res)).data.data)
            .then(body => {
                this.setState({body:body});
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    render() {
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
                            <Typography component="p"> You can see the best scores.</Typography>

                            <div>

                                <Table style={{ marginTop: '20px', marginBottom: '20px' }} size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Email (User)</TableCell>
                                            <TableCell align="right">Score</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.state.body.map(bdy => (
                                            <TableRow key={bdy.email}>
                                                <TableCell component="th" scope="row">
                                                    {bdy.email}
                                                </TableCell>
                                                <TableCell align="right">{bdy.score}</TableCell>
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
            </main >
        )
    }
};

score.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default score;