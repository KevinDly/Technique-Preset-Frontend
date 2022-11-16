import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import { getImg } from '../helpers/AssetLoaders';
import TechPicture from './TechPicture';

let images = require.context('../assets/imgs', true);

class TechniqueCard extends Component {
    getImg(name) {
        const uniformName = name.toLowerCase().replace(/\s+/g, '') 
        try {
            return require('../assets/imgs/' + uniformName + '_s.png')
        }
        catch {
            return require('../assets/imgs/fail.png')
        }
    }
    render() {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'row', height: "200px"}}>
                <Box width = "30%">
                    <TechPicture img = { this.getImg(this.props.name) } id = { this.props.name } />
                </Box>
                <Box width = "70%">
                    <CardContent>
                        <Typography variant="h5"> {this.props.name} </Typography>
                        <Typography> {this.props.description} </Typography>
                    </CardContent>
                </Box>
            </Card>
        );
    }
}

export default TechniqueCard;