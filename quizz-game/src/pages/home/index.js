import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './style.css';

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
                        <Typography variant="h5" component="h3"><b>Number</b></Typography>
                        <Typography component="p"> You have to response 10 questions.</Typography>
                        <div>
                            <TextField
                                onChange={e => this.setState({ email: e.target.value })}
                                component="div"
                                whiteSpace="nowrap"
                                id="question"
                                label="Question"
                                value="QUESTION"
                                margin="normal"
                                variant="filled"
                                fullWidth

                            />
                        </div>
                        <div>
                            <Button
                                className='button'
                                onClick='startGame'
                                fullWidth
                                variant="outlined" color="inherit"
                                style={{ marginTop: '10px' }}>
                                ANWS 1</Button>
                            <Button
                                onClick='startGame'
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                ANWS 2</Button>
                            <Button
                                onClick='startGame'
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                ANWS 3</Button>
                            <Button
                                onClick='startGame'
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                ANWS 4</Button>
                        </div>
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