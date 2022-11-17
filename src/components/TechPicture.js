import React from 'react';
import { CardMedia } from '@mui/material';
import { useDrag } from 'react-dnd';

function TechPicture({ img, id }) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "techPicture",
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <CardMedia  
        ref = { drag }
        component = "img"
        image = { img }
        border = { isDragging ? "5px solid pink" : "0px" }
        sx = {{ height: "95%", width: "95%", objectFit: "contain", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "5px" }}
        />
    );
}
export default TechPicture;