import { GraphQLClient } from "graphql-request";
import {
  NAVBAR_QUERY,
  ABOUT_QUERY,
  COMPSCI_QUERY,
  WEBDEV_QUERY,
} from "./queries";

const endpoint = "https://graphql.datocms.com/";
const client = new GraphQLClient(endpoint, {
  cache: "no-cache",
  headers: {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  },
});

export const fetchNavbarlinks = async () => {
  const query = NAVBAR_QUERY;
  const data = await client.request(query);
  return data.allNavbars;
};

export const fetchAbout = async () => {
  const query = ABOUT_QUERY;
  const data = await client.request(query);
  return data.about;
};

export const fetchCompSciProjects = async () => {
  const query = COMPSCI_QUERY;
  const data = await client.request(query);
  return data.allCompsciProjects;
};

export const fetchWebDevProjects = async () => {
  const query = WEBDEV_QUERY;
  const data = await client.request(query);
  return data.allWebdevProjects;
};
