import React, { Component } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'
import TechPresetDisplay from './TechPresetDisplay';
import PresetInformation from './PresetInformation';

const cardDefault = [null, null, null, null, null]

class PresetContainer extends Component {
    constructor(props) {
        super(props);
        this.handleCardUpdate = this.handleCardUpdate.bind(this);
        this.state = {
            cards: cardDefault
        }
    }

    handleCardUpdate(card, index) {
        var newCards = this.state.cards

        if(card != null && newCards.includes(card)) {
            const index = newCards.indexOf(card)
            newCards[index] = null
        }

        newCards[index] = card
        this.setState({cards: newCards})
    }

    render() {
        console.log("rendered")
        console.log(this.state.cards)
        return (
            <Grid2 container direction="column" className = "techPreset" xs = {8}>
                <TechPresetDisplay images = { this.props.images } className = "cardPreset" cards = { this.state.cards } onChange = { this.handleCardUpdate }/>
                <Grid2 xs = {12}>
                    <PresetInformation jsons = { this.props.jsons } className = "cardInformation" cards = { this.state.cards }/>
                </Grid2>
            </Grid2>
        );
    }
}

export default PresetContainer;