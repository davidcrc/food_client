export const getDishesByRestaurantQuery = () => {
  return `
      *[_type == 'resturant' && _id == $id] {
        _id,
        dishes[]->,
      }[0]
`
}
