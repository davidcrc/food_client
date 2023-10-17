import { getCategoriesQuery, getFeaturedResturantByIdQuery, getFeaturedResturantsQuery } from './queries';
import { getDishesByRestaurantQuery } from './queries/get-dishes-by-restaurant';

import { CategoriesType, Dish, FeaturedType } from '@/constants';
import sanityClient from '@/sanity';
import { urlFor } from '@/sanity';

const sanityQuery = (query: string, params?: any) => sanityClient.fetch(query, params);

const formedFeaturedRestaurant = (data: any) => {
  const restaurants = data.restaurants.map((restaurant: any) => {
    return {
      id: restaurant._id,
      name: restaurant.name,
      image: urlFor(restaurant.image).url(),
      description: restaurant.description,
      lng: restaurant.lng,
      lat: restaurant.lat,
      address: restaurant.address,
      stars: restaurant.rating,
      reviews: restaurant.reviews,
      category: restaurant.type.name,
      dishes: [],
      rating: restaurant.rating,
      type: restaurant.type,
    };
  });

  const featuredRestaurant = {
    id: data._id,
    title: data.name,
    description: data.description,
    restaurants,
  };

  return featuredRestaurant;
};

export const getDishesByRestaurant = async (id: string): Promise<Dish[]> => {
  const response = await sanityQuery(getDishesByRestaurantQuery(), { id });

  // console.log("RESPONSE", JSON.stringify(response))

  return response.dishes.map((dish: any) => ({
    id: dish._id,
    name: dish.name,
    description: dish.description,
    price: dish.price,
    image: urlFor(dish.image).url(),
  }));
};

export const getFeaturedResturants = async (): Promise<FeaturedType[]> => {
  const response = await sanityQuery(getFeaturedResturantsQuery());

  // console.log("RESPONSE", JSON.stringify(response))

  return (
    response.map((data: any) => {
      return formedFeaturedRestaurant(data);
    }) ?? []
  );
};

export const getCategories = async (): Promise<CategoriesType[]> => {
  const response = await sanityQuery(getCategoriesQuery());

  // console.log("RESPONSE", JSON.stringify(response))

  return (
    response.map((category: { _id: any; name: any; image: any }) => ({
      id: category._id,
      name: category.name,
      image: urlFor(category.image).url(),
    })) ?? []
  );
};

export const getFeaturedResturantById = (id: any) => {
  const response = sanityQuery(getFeaturedResturantByIdQuery(), { id });

  return formedFeaturedRestaurant(response);
};
