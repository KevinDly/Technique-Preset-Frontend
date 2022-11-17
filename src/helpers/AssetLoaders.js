function getImg(name, defaultPath = '../assets/imgs/', defaultSuffix = '_s.png', defaultImage = '../assets/img/fail.png') {
    const uniformName = name.toLowerCase().replace(/\s+/g, '') 
    try {
        return uniformName + defaultSuffix
    }
    catch {
        return "fail.png"
    }
}

/*
function grabCardInfo(card, jsons) {
    if(card == null){
        return <Typography></Typography>
    }
    const filename = "./" + card.toLowerCase().replace(/\s+/g, '') + ".json"
    const cardJson = jsons(filename)
    return <Typography> { cardJson.description } </Typography>
}*/

export { getImg }