import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let wheelsHTML = '<div class="input-box"><h2>Wheel Options</h2><select id="wheels">'
    const wheelSelection = wheels.map(wheel => {
        return `<option value="${wheel.id}">${wheel.name}</option>`
    })
    wheelsHTML += wheelSelection
    wheelsHTML += '</select></div>'
    return wheelsHTML
}

setWheels(1)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)