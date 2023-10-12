import IMAGES from "@/assets"

export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: IMAGES.pizzaIcon,
  },
  {
    id: 2,
    name: "Burger",
    image: IMAGES.pizzaIcon,
  },
  {
    id: 3,
    name: "Italian",
    image: IMAGES.pizzaIcon,
  },
  {
    id: 4,
    name: "Chinese",
    image: IMAGES.pizzaIcon,
  },
  {
    id: 5,
    name: "Noodles",
    image: IMAGES.pizzaIcon,
  },
  {
    id: 6,
    name: "Sweets",
    image: IMAGES.pizzaIcon,
  },
]

export interface FeaturedType {
  id: number
  title: string
  description: string
  restaurants: Restaurant[]
}

export interface Restaurant {
  id: number
  name: string
  image: number
  description: string
  lng: number
  lat: number
  address: string
  stars: number
  reviews: string
  category: string
  dishes: Dish[]
}

export interface Dish {
  id: number
  name: string
  description: string
  price: number
  image: any
}

export const featured: FeaturedType = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns",
      image: IMAGES.pizza,
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 4,
          name: "big pizza",
          description: "cheezy garlic big pizza",
          price: 16,
          image: IMAGES.pizzaDish,
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns",
      image: IMAGES.pizza,
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 5,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 6,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 7,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
      ],
    },
    {
      id: 3,
      name: "Papa Johns",
      image: IMAGES.pizza,
      description: "Hot and spicy pizzas",
      lng: -85.5324269,
      lat: 38.2145602,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 8,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 9,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
        {
          id: 10,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: IMAGES.pizzaDish,
        },
      ],
    },
  ],
}
