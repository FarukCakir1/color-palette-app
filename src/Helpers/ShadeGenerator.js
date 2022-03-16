import chroma from "chroma-js"

const levels = ["lighter", "light", "normal", "dark", "darker"];

function createPalette(initialPalette){
    let newPalette = {
        name: initialPalette.paletteName,
        id: initialPalette.id,
        emoji: initialPalette.emoji,
        colors: {}
    }
    for(let level of levels){
        newPalette.colors[level] = []
    }

    for(let color of initialPalette.colors){
        let scale = getScale(color.color, 5)
        for(let i in scale){
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgba: chroma(scale[i]).css()
            })
        }
    }

    return newPalette;

}

function getRange(color){
    const end = "#fff";
    
    return [
        chroma(color).darken(1.4).hex(),
        color,
        end
    ]
}

function getScale(color, numOfColors){
   return chroma.scale(getRange(color)).mode("lab").colors(numOfColors)
}

export {createPalette};