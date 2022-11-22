import React from 'react';
import { useDrop } from 'react-dnd';
import Grid2 from '@mui/material/Unstable_Grid2'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import TechPicture from './TechPicture';


function TechniqueDroppable(props) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "techPicture",
        drop: (item) => addImage(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addImage = (id) => {
        console.log(id)
        props.onCardUpdate(id, props.index)
    }

    const removeImage = (e) => {
        e.preventDefault()
        addImage(null)
    }

    const componentFunc = (img, sx, drag) => (
        <Box
            ref = { drag }
            component = "img"
            src = { img }
            sx = { sx }
        />)

    var image = NaN

    if(props.card != null) {
        const imageName = "./" + props.card.toLowerCase().replace(/\s+/g, '') + '_s.png'
        try {
            image = props.images(imageName)
        }
        catch {
            image = props.images("./fail.png")
        }
    }

    return <Grid2 xs = {props.cards.length/12} height = "100%" width = {(100/props.cards.length).toString() + "%"} ref = { drop } onContextMenu = { removeImage }> 
                <Box alignItems = "center" justifyContent = "center" display = "flex" height = "400px" width = "100%" border = "2px dashed grey">
                    {
                        props.card == null ? 
                            <Typography variant = "h5"> + </Typography> :
                            <TechPicture img = { image } id = { props.card } 
                                            sx = {{ width: "75%", height: "75%"}}
                                            componentType = { componentFunc }/>
                            /*<Box component = "img" 
                                src = { image }
                                width = "75%"
                                height = "75%" />*/
                    }
                </Box>
    </Grid2>
}

export default TechniqueDroppable;