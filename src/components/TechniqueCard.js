import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import TechPicture from './TechPicture';


class TechniqueCard extends Component {

    render() {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'row', height: "200px"}}>
                <Box width = "30%">
                    <TechPicture img = { this.props.image } id = { this.props.name } />
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