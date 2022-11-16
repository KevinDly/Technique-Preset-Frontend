import React, { Component } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

class TechPresetDisplay extends Component {
    //TODO: Move this code and the code in TechniqueCard somewhere else.
    getImg(name) {
        try {
            return require('../assets/imgs/' + name + '_s.png')
        }
        catch {
            return require('../assets/imgs/fail.png')
        }
    }

    render() {
        return (
            <Grid2 container xs = {12}>
                {
                    this.props.cards.map((card) => {
                        return <Grid2 xs = {this.props.cards.length/12} height = "100%" width = {(100/this.props.cards.length).toString() + "%"}>
                            <Box alignItems = "center" justifyContent = "center" display = "flex" height = "400px" width = "100%" border = "2px dashed grey">
                                {
                                    card == null ? 
                                        <Typography variant = "h5"> + </Typography> :
                                        <Box component = "img" 
                                            src = {this.getImg(card.toLowerCase().replace(/\s+/g, ''))}
                                            width = "75%"
                                            height = "75%" />
                                }
                            </Box>
                        </Grid2>
                    })
                }
            </Grid2>
        );
    }
}

export default TechPresetDisplay;
