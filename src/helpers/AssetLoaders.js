function getImg(name, defaultPath = '../assets/imgs/', defaultSuffix = '_s.png', defaultImage = '../assets/img/fail.png') {
    const uniformName = name.toLowerCase().replace(/\s+/g, '') 
    try {
        return uniformName + defaultSuffix
    }
    catch {
        return "fail.png"
    }
}

export { getImg }