export const getFeaturedResturantByIdQuery = () => {
  return `
        *[_type == 'featured' && _id == $id] {
          ...,
          resturants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          }
        }[0]
  `
}
