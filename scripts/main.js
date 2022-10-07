import { CarsRUs } from "./Cars-R-Us.js";

const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    mainContainer.innerHTML = CarsRUs()
}

renderHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML()
})