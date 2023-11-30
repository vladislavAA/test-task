import { gql } from "@apollo/client";

const GET_CARS = gql`
  query ($search: String!) {
    cars(search: $search) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      availability
    }
  }
`;

export default GET_CARS;
