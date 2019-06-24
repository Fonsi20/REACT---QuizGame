import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

//STYLE
const useStyles = makeStyles(theme => ({
    root: {
        background: "#00BCD4",
        height: '-webkit-fill-available',
        backgroundSize: 'cover',
        overflow: 'hidden',
    },
    paper: {
        padding: '20px 20px',
        display: 'block',
        alignItems: 'center',
        margin: "25px",
        width: "1",
    },
    button: {
        alignItems: 'center',
        display: 'flex',
        marginTop: '20px',
    }
}));


//BODY
function LogIn(props) {
    
    const classes = useStyles();

    return (
        <main>
            <Grid
                className={classes.root}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Paper className={classes.paper}>
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
                            onClick='startGame'
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Start Game
                </Button>
                    </div>
                </Paper>
            </Grid>
        </main>
    )

};

LogIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default LogIn;