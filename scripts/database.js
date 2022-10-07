const database = {
    colors: [
        {
        id: 1,
        name: "Silver",
        price: 499
        },
        {
        id: 2,
        name: "Midnight Blue",
        price: 699
        },
        {
        id: 3,
        name: "Firebrick Red",
        price: 999
        },
        {
        id: 4,
        name: "Spring Green",
        price: 699
        }
    ],
    interiors: [
        {
        id: 1,
        name: "Beige Fabric",
        price: 299
        },
        {
        id: 2,
        name: "Charcoal Fabric",
        price: 399
        },
        {
        id: 3,
        name: "White Leather",
        price: 449
        },
        {
        id: 4,
        name: "Black Leather",
        price: 4999
        },
    ],
    techPackages: [
        {
        id: 1,
        name: "Basic",
        price: 199
        },
        {
        id: 2,
        name: "Navigation",
        price: 399
        },
        {
        id: 3,
        name: "Visibility",
        price: 299
        },
        {
        id: 4,
        name: "Ultra",
        price: 599
        }
    ],
    wheels: [
        {
        id: 1,
        name: "17-inch Pair Radial",
        price: 249
        },
        {
        id: 2,
        name: "17-inch Pair Radial Black",
        price: 299
        },
        {
        id: 3,
        name: "18-inch Pair Spoke Silver",
        price: 449
        },
        {
        id: 4,
        name: "18-inch Pair Spoke Black",
        price: 499
        }
    ],
    completedOrders: [
        {
            id: 1,
            colorId: 2,
            interiorId: 3,
            techPackageId: 1,
            wheelId: 2
        }
    ],
    orderBuilder: {},
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechPackages = () => {
    return database.techPackages.map(techPackage => ({...techPackage}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getCompletedOrders = () => {
    return database.completedOrders.map(order => ({...order}))
}
export const getOrderBuilder = () => {
    return database.orderBuilder.map(orderBuild => ({...orderBuild}))
}
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTechPackage = (id) => {
    database.orderBuilder.techPackageId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCompletedOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.completedOrders.length - 1
    newOrder.id = database.completedOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.completedOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}