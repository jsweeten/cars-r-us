import { getCompletedOrders, getColors, getInteriors, getTechPackages, getWheels } from "./database.js";

const colors = getColors()
const interiors = getInteriors()
const techPackages = getTechPackages()
const wheels = getWheels()

const buildOrderObject = (order) => {
    const foundColor = colors.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechPackage = techPackages.find(
        (techPackage) => {
            return techPackage.id === order.techPackageId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const totalCost = foundColor.price + foundInterior.price + foundTechPackage.price + foundWheels.price + 19990
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li> Order number ${order.id}: An order was placed for a vehicle with the following options:
        <ul>
        <li>Color: ${foundColor.name}</li>
        <li>Interior: ${foundInterior.name}</li>
        <li>Tech Package: ${foundTechPackage.name}</li>
        <li>Wheel Package: ${foundWheels.name}</li>
        <li>Total Cost: $${costString}</li>
        </ul>`
}


export const Orders = () => {
    const orders = getCompletedOrders()

    let html = "<ul>"

    const listOrderedItems = orders.map(buildOrderObject)

    html += listOrderedItems.join("")
    html += "</ul>"
    return html
}