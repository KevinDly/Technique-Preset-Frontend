import React, { Component } from 'react';
import { Paper, Typography, Box} from '@mui/material'
import { techniqueDescriptionMap } from './techniquedescriptors/TechniqueIndex'
//TODO: Change this function so it uses custom files for each card to calculate the description.

function grabCardInfo(card, props) {
    var jsons = props.jsons
    var techInfo = props.techInfo
    console.log("grabCardInfo information")
    console.log(techInfo)

    const cardAsID = card.toLowerCase().replace(/\s+/g, '')
    const level = techInfo[cardAsID]["level"]

    if (cardAsID in techniqueDescriptionMap) {
        return <Typography whiteSpace={"pre-line"} align = {"center"}> { techniqueDescriptionMap[cardAsID]({level: level}) } </Typography>
    }
    const filename = "./" + cardAsID + ".json"
    const cardJson = jsons(filename)
    return <Typography> { cardJson.description + level } </Typography>
}

//TODO: Change look.
//Make boxes correspond with color of the crystal they require (In Apocalypse raid technique case, make them whatever the background color is)
//Add the Activation Skill Icon IF the skill is activatable to the top right or top left. (Might mean making a new component)

class PresetInformation extends Component {

    render() {
        return (
            <Paper sx = {{pt: .5, pb: 1, pl: 1, pr: 1, overflowY: "auto", maxHeight: "350px"}}>
                { 
                    this.props.cards.map((card) => {
                        if(!card) {
                            return null 
                        }
                        return <Box sx = {{border: "3px solid green", mt: 1, p: 1}}>
                            <Typography variant = "h6"> {card} </Typography> 
                            <Typography variant = "subtitle1"> Level: {this.props.techInfo[card.toLowerCase().replace(/\s+/g, '')]["level"]} </Typography>
                            { grabCardInfo(card, this.props) }
                        </Box>
                    })
                }
            </Paper>
        );
    }
}

export default PresetInformation;