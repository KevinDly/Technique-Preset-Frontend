import Grid2 from '@mui/material/Unstable_Grid2'
import React, { Component } from 'react';
import TechniqueScrollable from './TechniqueScrollable';
import PresetContainer from './PresetContainer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

let jsons = require.context('../assets/data', false, /\.(json)$/ );
let images = require.context('../assets/imgs', false, /\.*$/);

class InfoContainer extends Component {
    constructor(props) {
        super(props)
        const keys = jsons.keys().map(key => key.replace('.json', '').replace('./', ''))
        const techniqueInfoDict = {}
        for (const key of keys) {
            techniqueInfoDict[key] = {level: 1}
            console.log(key)
        }
        this.state = {techniqueInfo: techniqueInfoDict}
        this.onChangeTechnique = this.onChangeTechnique.bind(this)
    }

    //TODO: Add code that changes the technique within the techniqueInfo Dict
    onChangeTechnique(event) {
        const id = event.id
        const level = isNaN(event.level) ? 1 : event.level
        
        var techniqueInfo = {...this.state.techniqueInfo}
        console.log(id)
        console.log(level)
        techniqueInfo[id]["level"] = level
        this.setState({techniqueInfo})

        console.log(this.state.techniqueInfo)
    }

    render() {
        return (
            <div>
                <DndProvider backend = {HTML5Backend}>
                    <Grid2 container spacing = {2} margin = {"auto"} width = {"90%"}>
                        <PresetContainer jsons = {jsons} images = { images } techInfo = {this.state.techniqueInfo}/>
                        <Grid2 className = {"techniqueScrollable"} xs = {4}>
                            <TechniqueScrollable jsons = {jsons} images = { images } onChangeTechnique = { this.onChangeTechnique }/>
                        </Grid2>
                    </Grid2>
                </DndProvider>
            </div>
        );
    }
}

export default InfoContainer;