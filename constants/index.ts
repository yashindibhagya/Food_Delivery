import backgroundImage from "../assets/images/coffee.jpg";
import coffee from "../assets/images/1.jpg";

export const CATEGORIES: { id: string; name: string }[] = [
    {
        id: "1",
        name: "All",
    },
    {
        id: "1",
        name: "Burger",
    },
    {
        id: "3",
        name: "Pizza",
    },
    {
        id: "4",
        name: "Wrap",
    },

]

export const offers: { id: number; title: string; image: any; ... } = [
    {
        id: 1,
        title: "SUMMER COMBO",
        image: backgroundImage,
        color: "#D33B0D"
    },
    {
        id: 2,
        title: "SUMMER COMBO",
        image: backgroundImage,
        color: "#D33B0D"
    },
    {
        id: 3,
        title: "SUMMER COMBO",
        image: backgroundImage,
        color: "#D33B0D"
    }
]

export const sides = [
    {
        name: "Fries",
        image: backgroundImage,
        price: 3.5
    },
    {
        name: "Fries",
        image: backgroundImage,
        price: 3.5
    },
    {
        name: "Fries",
        image: backgroundImage,
        price: 3.5
    },
]

export const toppings = [
    {
        name: "Avacado",
        image: backgroundImage,
        price: 1.5
    },
    {
        name: "Avacado",
        image: backgroundImage,
        price: 1.5
    },
    {
        name: "Avacado",
        image: backgroundImage,
        price: 1.5
    },
]

export default {
    backgroundImage,
    coffee
}