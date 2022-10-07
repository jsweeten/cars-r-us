import { Colors } from "./PaintColors.js";
import { Interiors } from "./Interiors.js";
import { TechPackages } from "./TechPackages.js";
import { Wheels } from "./Wheels.js";
import { addCompletedOrder } from "./database.js";
import { Orders } from "./Orders.js";


export const CarsRUs = () => {
    let parentHTML = `
    <section id="input-area">
    ${Colors()}
    ${Interiors()}
    ${TechPackages()}
    ${Wheels()}
    </section>

    <article id="button-container">
    <button id="order-button">Place Order</button>
    </article>

    <section id="completed-orders">
    <h2>Completed Orders</h2>
    ${Orders()}
    </section>`

    return parentHTML
}

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "order-button") {
            addCompletedOrder()
        }
    }
)