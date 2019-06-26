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
            question: [],
            aswn1: [],
            aswn2: [],
            aswn3: [],
            aswn4: [],
            true: []
        }
    }

    //Obtain the Data of my DDBB
    getDataFromDb = () => {
        axios.get('http://localhost:3000/api/question')
            .then(res => JSON.parse(JSON.stringify(res))).then(body => {
                body.data.data.forEach(data => {
                    console.log(data.question);
                    this.setState({ id: data.id });
                    this.setState({ question: data.question });
                    this.setState({ aswn1: data.aswn1 });
                    this.setState({ aswn2: data.aswn2 });
                    this.setState({ aswn2: data.aswn3 });
                    this.setState({ aswn2: data.aswn4 });
                    this.setState({ true: data.true });
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    componentDidMount() {
        this.getDataFromDb();
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
                            <Link to="/question">
                                <Button
                                    style={{ marginTop: '10px' }}
                                    onClick='startGame'
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="button">
                                    Start Game</Button></Link>
                            <Link to="/score">
                                <Button
                                    style={{ marginTop: '10px' }}
                                    onClick='startGame'
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