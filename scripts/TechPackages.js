import { getTechPackages, setTechPackage } from "./database.js";

const techPackage = getTechPackages()

export const TechPackages = () => {
    let techHTML = '<div class="input-box"><h2>Interior Options</h2><select id="tech">'
    const techSelection = techPackage.map(tech => {
        return `<option value="${tech.id}">${tech.name}</option>`
    })
    techHTML += techSelection
    techHTML += '</select></div>'
    return techHTML
}

setTechPackage(1)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechPackage(parseInt(event.target.value))
        }
    }
)