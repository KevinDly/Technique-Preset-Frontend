import React, { Component } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'
import TechPresetDisplay from './TechPresetDisplay';
import PresetInformation from './PresetInformation';

const cardDefault = [null, "Vital Surge", null, "Dampen Shock", null]

class PresetContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: cardDefault
        }
    }

    render() {
        return (
            <Grid2 container direction="column" className = "techPreset" xs = {8}>
                <TechPresetDisplay className = "cardPreset" cards = { this.state.cards }/>
                <Grid2 xs = {12}>
                    <PresetInformation className = "cardInformation" cards = { this.state.cards }/>
                </Grid2>
            </Grid2>
        );
    }
}

export default PresetContainer;