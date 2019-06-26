import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import axios from 'axios';

var textLogin = "Email";

//BODY
class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: [],
        }
    }

    starGame = () => {
        //Obtain the Data of my DDBB
        var fail = true;
        axios.get('http://localhost:3000/api/Verify')
            .then(res => JSON.parse(JSON.stringify(res))).then(body => {
                body.data.data.forEach(data => {
                    if (data.email === this.state.email) {
                        fail = false;
                        window.alert("User exist in the DDBB");
                    } else {

                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    render() {
        console.log(this.props);
        return (
            <main>
                <Grid
                    className="root"
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Paper className="paper">
                        <Typography variant="h5" component="h3"><b>Quizz Game</b></Typography>
                        <Typography component="p"> Alfonso Fernandez Alvarez</Typography>
                        <div>
                            <TextField
                                onChange={e => this.setState({ email: e.target.value })}
                                component="div"
                                whiteSpace="nowrap"
                                id="email"
                                label={textLogin}
                                placeholder="user@mail.com"
                                type="email"
                                margin="normal"
                                variant="filled"
                                required
                                fullWidth

                            />
                        </div>
                        <div>
                            <Button
                                style={{ marginTop: '10px' }}
                                onClick={event => this.starGame()}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="button">
                                Start Game</Button>
                            <Link to="/score">
                                <Button
                                    style={{ marginTop: '10px' }}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className="button">
                                    See Scores</Button></Link>
                        </div>
                    </Paper>
                </Grid>
            </main >
        )

    }
};

LogIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LogIn;
