import React, { Component } from 'react';
import { Paper } from '@mui/material';
import TechniqueCard from './TechniqueCard';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
//TODO: Move to const file
const suffix = "_s.png"
const techFailImage = "./fail.png"

function importJson(filename, jsons, images, change) {
    const data = jsons(filename)
    const imageName  = "./" + data.name.toLowerCase().replace(/\s+/g, '') + suffix

    var image = NaN

    if(images.keys().includes(imageName)) {
        image = images(imageName)
    }
    else {
        image = images(techFailImage)
    }

    return <Paper key = {data.name}>
        <TechniqueCard name = {data.name} description = {data.description} image = { image } onChangeTechnique = { change }/>
    </Paper>
}

class TechniqueScrollable extends Component {

    constructor(props) {
        super(props)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.state = {searchBox: ''}
    }
    
    onSearchChange(e) {
        var text = e.target.value.toLowerCase().replace(/\s/g, '')
        this.setState({searchBox: text})
    }

    render() {
        return (
            <div className = "techniqueDiv" height = "400px">
                <TextField onChange = { this.onSearchChange } fullWidth/>
                <Box className = "techniqueBox" sx = {{padding: "5px", display: "flex", flexDirection: "column", height: 700, overflow: "hidden", overflowY: "scroll"}}>
                    {this.props.jsons.keys().filter(key => key.toLowerCase().replace(/\s/g, '').includes(this.state.searchBox)).map((filename) => importJson(filename, this.props.jsons, this.props.images, this.props.onChangeTechnique))}
                </Box>
            </div>
        );
    }
}

export default TechniqueScrollable;