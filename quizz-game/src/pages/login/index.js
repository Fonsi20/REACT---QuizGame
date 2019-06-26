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


//BODY
class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: [],
            email: [],
            email2: [],
            score: [],
        }
    }

    //Obtain the Data of my DDBB
    getDataFromDb = () => {
        axios.get('http://localhost:3000/api/Verify')
            .then(res => JSON.parse(JSON.stringify(res))).then(body => {
                body.data.data.forEach(data => {
                    this.setState({ id: data.userid });
                    this.setState({ email: data.email });
                    this.setState({ score: data.score });
                });
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.state);
        this.forceUpdateHandler();
    };

    componentDidMount() {
        this.getDataFromDb();
        console.log(this.state);
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    starGame = () => {
        var MAIL= this.Email
        for (var i = 0; i <MAIL ; i++) {
            console.log(this.MAIL[i]);
            if (this.email2 === this.MAIL[i]) {
                console.log("exist in the DDBB");
            } else {
                console.log(" come to play");
                window.location.replace("http://localhost:3001/question");
            }
        }
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
                                label="Email"
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