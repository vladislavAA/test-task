import { gql } from "@apollo/client";

const GET_CARS_BY_ID = gql`
  query ($id: Int!) {
    car(id: $id) {
      id
      brand
      model
      color
      model_year
      img_src
      price
      description
      availability
    }
  }
`;

export default GET_CARS_BY_ID;
