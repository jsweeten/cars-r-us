import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    let interiorsHTML = '<div class="input-box"><h2>Interior Options</h2><select id="interiors">'
    const interiorSelection = interiors.map(interior => {
        return `<option value="${interior.id}">${interior.name}</option>`
    })
    interiorsHTML += interiorSelection
    interiorsHTML += '</select></div>'
    return interiorsHTML
}

setInterior(1)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)