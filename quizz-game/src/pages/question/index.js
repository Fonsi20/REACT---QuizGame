import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import './style.css';
import axios from 'axios';
import {connect} from "react-redux";
import {setCounterAction} from "../../store/actions";
import {counterSelector} from "../../store/selectors";
import {getCurrentQuestion} from "../../store/selectors/questions";
import {setQuestionsAction} from "../../store/actions/questions";

//BODY

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false
        }
    }

    //Obtain the Data of my DDBB
    getDataFromDb = () => {

        axios.get('http://localhost:3000/api/question')
            .then(res => JSON.parse(JSON.stringify(res)).data.data)
            .then(body => {
                this.props.setQuestionsDispatch(body)
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    componentDidMount() {
            this.getDataFromDb();
    };

    checkQuestion = (event, anws) => {
        if (anws === this.props.question.true) {
            console.log("SIIIII");
        } else {
            console.log("NOOOOOOOOO");
        }
        this.props.setCounterDispatch(this.props.counter + 1);
        if (this.props.counter === 11) {
            console.log("finish");
        }
    };

    render() {
        const value = this.props.counter + 1;
        const data = this.props.question;

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
                        <Typography variant="h5" component="h3"><b>Number {value}</b></Typography>
                        <Typography component="p"> You have to response 10 questions.</Typography>
                        <div>
                            <TextField
                                component="div"
                                whiteSpace="nowrap"
                                id="question"
                                label="Question"
                                value={data.question}
                                margin="normal"
                                variant="filled"
                                fullWidth

                            />
                        </div>
                        <div>
                            <Button
                                className='button'
                                onClick={event => this.checkQuestion(event, data.anws1)}
                                fullWidth
                                variant="outlined" color="inherit"
                                style={{ marginTop: '10px' }}>
                                {data.anws1}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, data.anws2)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {data.anws2}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, data.anws3)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {data.anws3}</Button>
                            <Button
                                onClick={event => this.checkQuestion(event, data.anws4)}
                                fullWidth
                                variant="outlined" color="inherit"
                                className="button"
                                style={{ marginTop: '10px' }}>
                                {data.anws4}</Button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

Home.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onIncrementTrue: PropTypes.func.isRequired,
    onIncrementFalse: PropTypes.func.isRequired
};

export default connect(
    state => ({
        counter: counterSelector(state),
        question: getCurrentQuestion(state)
    }),
    dispatch => ({
        setCounterDispatch: value => dispatch(setCounterAction(value)),
        setQuestionsDispatch: questions => dispatch(setQuestionsAction(questions))
    })
)(Home);
