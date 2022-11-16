import React, { Component } from 'react';
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material'

//TODO: Move this somewhere else
let jsons = require.context('../assets/data', true);

function grabCardInfo(card) {
    if(card == null){
        return <Typography></Typography>
    }
    const filename = "./" + card.toLowerCase().replace(/\s+/g, '') + ".json"
    const cardJson = jsons(filename)
    return <Typography> { cardJson.description } </Typography>
}
class PresetInformation extends Component {

    render() {
        return (
            <Paper>
                { 
                    this.props.cards.map((card) => (
                        grabCardInfo(card)
                    )) 
                }
            </Paper>
        );
    }
}

export default PresetInformation;