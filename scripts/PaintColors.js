import { getColors, setColor } from "./database.js";

const colors = getColors()

export const Colors = () => {
    let colorsHTML = '<div class="input-box"><h2>Colors</h2><select id="colors">'
    const colorSelection = colors.map(color => {
        return `<option value="${color.id}">${color.name}</option>`
    })
    colorsHTML += colorSelection
    colorsHTML += '</select></div>'
    return colorsHTML
}

setColor(1)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "colors") {
            setColor(parseInt(event.target.value))
        }
    }
)