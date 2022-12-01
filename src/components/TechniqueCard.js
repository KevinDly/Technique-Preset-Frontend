import { Card, CardContent, Typography, CardMedia, TextField, FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import TechPicture from './TechPicture';

const componentFunc = (img, sx, drag) => (
    <CardMedia
        ref = { drag }
        component = "img"
        image = { img }
        sx = { sx }
    />
) 
class TechniqueCard extends Component {

    constructor(props) {
        super(props)
        this.onChangeTechnique = this.onChangeTechnique.bind(this)
        this.onLevelBarChange = this.onLevelBarChange.bind(this)
        this.onLevelBarKeyDown = this.onLevelBarKeyDown.bind(this)
        this.state = {levelBarText: "", levelBarError: false}
    }

    //TODO: Add input box with restriction to numbers 1 <= x <= 10 and have it call this event when a button is pressed
    //Event should have the id name (the name that is currently on this card) as well as the number that the box has
    onChangeTechnique(event) {
        var newEvent = {level: parseInt(event.target.value), id: this.props.name.toLowerCase().replace(/\s+/g, '')}
        console.log("Changing technique level!")
        console.log(newEvent)
        this.props.onChangeTechnique(newEvent)
    }

    onLevelBarChange(event) {
        const text = event.target.value.replace(/[^0-9]/g, '')
        if(parseInt(text) > 10 || parseInt(text) < 1) {
            this.setState({levelBarText: this.state.levelBarText, levelBarError: true})
        }
        else {
            this.setState({levelBarText: text, levelBarError: false})
        }
    }

    onLevelBarKeyDown(event) { 
        if(event.key === 'Enter') {
            this.onChangeTechnique(event)
        }
    }

    //TODO: Fix the height of the content??
    render() {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'row', height: "250px"}}>
                <Box width = "30%">
                    <TechPicture img = { this.props.image } id = { this.props.name } 
                                    sx = {{ height: "95%", width: "95%", objectFit: "contain", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "5px"}} 
                                    componentType = { componentFunc }/>
                </Box>
                <Box width = "70%">
                    <CardContent sx = {{ maxHeight: "40%", overflow: "hidden", overflowY: "auto"}}>
                        <Typography variant="h5"> {this.props.name} </Typography>
                        <Typography> {this.props.description} </Typography>
                    </CardContent>
                    <CardContent sx = {{ maxHeight: "60%"}}>
                        <TextField error = {this.state.levelBarError} aria-describedby="component-error-text" value = { this.state.levelBarText } label = "Level" sx = {{ width: "100px" }} onChange = { this.onLevelBarChange } onKeyDown={ this.onLevelBarKeyDown }/>
                        {this.state.levelBarError && <FormHelperText id="component-error-text">Level not between 1 and 10</FormHelperText>}
                    </CardContent>
                </Box>
            </Card>
        );
    }
}

export default TechniqueCard;