import { gql } from "@apollo/client";

//gql is used to create queries on graphql
const GET_CLIENTS = gql`
    query getClients{
        clients{
            id
            name
            email
            phone
        }
    }
`;

export { GET_CLIENTS };