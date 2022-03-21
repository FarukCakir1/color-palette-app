function ShadeCollector(palette, colorToBeFilter){
    let shades = []
    const colorsArr = palette.colors;
    
    for(let key in colorsArr){
        shades = shades.concat(
            colorsArr[key].filter(color => color.id === colorToBeFilter)
        )
    }

    return shades
}


export default ShadeCollector