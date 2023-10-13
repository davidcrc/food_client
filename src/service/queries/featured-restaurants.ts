export const getFeaturedResturantsQuery = () => {
  return `
        *[_type == 'featured'] {
          ...,
          restaurants[]->{
            ...,
            type->{
                name
            },
            // dishes[]->
          }
      }
  `
}
