import React from 'react';
import { CardMedia } from '@mui/material';
import { useDrag } from 'react-dnd';

//TODO: Refactor such that this is usable from anywhere and not dependant on being a cardmedia.
function TechPicture({ img, id, sx, componentType }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "techPicture",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    }))

    return (
        /*<CardMedia  
        ref = { drag }
        component = "img"
        image = { img }
        border = { isDragging ? "5px solid pink" : "0px" }
        sx = {{ height: "95%", width: "95%", objectFit: "contain", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "5px" }}
        />*/
        componentType(img, sx, drag, id)
    );
}
export default TechPicture;