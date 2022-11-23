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
        const newCards = Array.from(this.state.cards)
        console.log("Card Update: " + card + " at " + index)
        if(card != null && newCards.includes(card)) {
            const index = newCards.indexOf(card)
            newCards[index] = null
        }

        newCards[index] = card
        this.setState({cards: newCards})
    }

    render() {
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