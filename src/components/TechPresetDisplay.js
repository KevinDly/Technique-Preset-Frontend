import React, { Component } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'
import TechniqueDroppable from './TechniqueDroppable';

class TechPresetDisplay extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(card, index) {
        console.log("prop upward")
        console.log(card + " " + index)
        this.props.onChange(card, index)
    }

    render() {
        return (
            <Grid2 container xs = {12}>
                {
                    this.props.cards.map((card, index) => {
                        return <TechniqueDroppable images = { this.props.images } key = { "slot" + index } card = { card } index = { index } cards = {this.props.cards} onCardUpdate = { this.handleChange }  />
                    })
                }
            </Grid2>
        );
    }
}

export default TechPresetDisplay;
