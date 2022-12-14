import React, { Component } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'
import TechniqueDroppable from './TechniqueDroppable';

class TechPresetDisplay extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(card, index) {
        this.props.onChange(card, index)
    }

    render() {
        return (
            <Grid2 container xs = {12}>
                {
                    this.props.cards.map((card, index) => {
                        console.log(`Card update in TechPresetDisplay: ${card} at ${index} with cards ${this.props.cards}`);
                        return <TechniqueDroppable images = { this.props.images } key = { "slot" + index } card = { card } index = { index } cards = {this.props.cards} onCardUpdate = { this.handleChange }  />
                    })
                }
            </Grid2>
        );
    }
}

export default TechPresetDisplay;
