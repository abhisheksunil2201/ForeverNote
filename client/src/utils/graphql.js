import { gql } from "@apollo/client";

export const FETCH_NOTEBOOKS_QUERY = gql`
  query ($userId: ID!) {
    getNotebooks(userId: $userId) {
      id
      username
      title
      createdAt
      notes {
        id
        title
        body
        createdAt
      }
    }
  }
`;

export const FETCH_NOTEBOOK_QUERY = gql`
  query ($userId: ID!, $title: String!) {
    getNotebook(userId: $userId, title: $title) {
      id
      title
      notes {
        id
        title
        createdAt
        body
      }
    }
  }
`;

export const CREATE_NOTEBOOK_MUTATION = gql`
  mutation createNotebook($title: String!) {
    createNotebook(title: $title) {
      id
      title
      notes {
        id
        title
        body
        createdAt
      }
    }
  }
`;
