import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';



//BODY
class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: [],
            question: [],
            aswn1: [],
            aswn2: [],
            aswn3: [],
            aswn4: [],
            true: [],
            yes: [],
            no: [],
            cont: [],
            conttrue: [],
            contfalse: [],
        }
    }


    //Obtain the Data of my DDBB
    getDataFromDb = () => {
        axios.get('http://localhost:3000/api/question')
            .then(res => JSON.parse(JSON.stringify(res))).then(body => {
                body.data.data.forEach(data => {
                    if (data.id === this.props.props.props.counter.cont) {
                        console.log(data.question);
                        this.setState({ id: data.id });
                        this.setState({ question: data.question });
                        this.setState({ aswn1: data.anws1 });
                        this.setState({ aswn2: data.anws2 });
                        this.setState({ aswn3: data.anws3 });
                        this.setState({ aswn4: data.anws4 });
                        this.setState({ true: data.true });
                    }
                    console.log("QUESTIONS: " + this.state.question);
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    componentDidMount() {
        this.getDataFromDb();
    };

    checkQuestion = (event, anws) => {
        if (anws === this.state.true) {
            console.log("SIIIII");
            onclick = this.props.onIncrementTrue;
        } else {
            console.log("NOOOOOOOOO");
            onclick = this.props.onIncrementFalse;
        }
        onclick = this.props.onIncrement;
        if (this.props.value === 11) {
            console.log("finish");
        }
    }

    render() {
        const valu = this.props.props.props.counter.cont;
        return (
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
                        <Typography variant="h5" component="h3"><b>Number {valu}</b></Typography>
                        <Typography component="p"> You have to response 10 questions.</Typography>
                        <div>
                            <TextField
                                component="div"
                                whiteSpace="nowrap"
                                id="question"
                                label="Question"
                                value={this.state.question}
                                margin="normal"
                                variant="filled"
                                fullWidth

                            />
                        </div>
                        <div>
                            <Button
                                className='button'
                                onClick={event => this.checkQuestion(event, this.state.aswn1)}
                                fullWidth
                                variant="outlined" color="inherit"
                                style={{ marginTop: '10px' }}>
                                {this.state.aswn1}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, this.state.aswn2)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {this.state.aswn2}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, this.state.aswn3)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {this.state.aswn3}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, this.state.aswn4)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {this.state.aswn4}</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
};

Home.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onIncrementTrue: PropTypes.func.isRequired,
    onIncrementFalse: PropTypes.func.isRequired
};

export default Home;