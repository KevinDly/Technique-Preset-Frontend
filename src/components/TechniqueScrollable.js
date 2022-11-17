import React, { Component } from 'react';
import { Paper } from '@mui/material';
import TechniqueCard from './TechniqueCard';
import { Box } from '@mui/system';

//TODO: Move to const file
const suffix = "_s.png"
const techFailImage = "./fail.png"

function importJson(filename, jsons, images) {
    const data = jsons(filename)
    const imageName  = "./" + data.name.toLowerCase().replace(/\s+/g, '') + suffix
    console.log("imageName: " + imageName)
    console.log(filename)

    var image = NaN

    if(images.keys().includes(imageName)) {
        image = images(imageName)
    }
    else {
        image = images(techFailImage)
    }

    return <Paper key = {data.name}>
        <TechniqueCard name = {data.name} description = {data.description} image = { image } />
    </Paper>
}

class TechniqueScrollable extends Component {

    render() {
        return (
            <div className = "techniqueDiv" height = "400px">
                <Box className = "techniqueBox" sx = {{display: "flex", flexDirection: "column", height: 700, overflow: "hidden", overflowY: "scroll"}}>
                    {this.props.jsons.keys().map((filename) => importJson(filename, this.props.jsons, this.props.images))}
                </Box>
            </div>
        );
    }
}

export default TechniqueScrollable;