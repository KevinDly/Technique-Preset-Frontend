import React, { Component } from 'react';
import { Paper } from '@mui/material';
import TechniqueCard from './TechniqueCard';
import { Box } from '@mui/system';

//import data from '../assets/data'
/**
 * 
 * @param {*} r 
 * @returns {Array}
 */

function importAll(r) {
    return r.keys().map(r)
}

const jsonList = importAll(require.context('../assets/data/', false, /\.(json)$/))

class TechniqueScrollable extends Component {

    render() {
        return (
            <div className = "techniqueDiv" height = "400px">
                <Box className = "techniqueBox" sx = {{display: "flex", flexDirection: "column", height: 700, overflow: "hidden", overflowY: "scroll"}}>
                    {jsonList.map((data) => 
                            <Paper key = {data.name}>
                                <TechniqueCard name = {data.name} description = {data.description} />
                            </Paper>
                    )}
                </Box>
            </div>
        );
    }
}

export default TechniqueScrollable;