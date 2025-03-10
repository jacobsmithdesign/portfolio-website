import { GraphQLClient } from "graphql-request";
import {
  NAVBAR_QUERY,
  ABOUT_QUERY,
  COMPSCI_QUERY,
  WEBDEV_QUERY,
  BLOG_QUERY,
  GALLERY_QUERY,
  MUSIC_QUERY,
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

export const fetchBlog = async () => {
  const query = BLOG_QUERY;
  const data = await client.request(query);
  return data.allBlogs;
};

export const fetchGallery = async () => {
  const query = GALLERY_QUERY;
  const data = await client.request(query);
  return data.allGalleries;
};

export const fetchMusic = async () => {
  const query = MUSIC_QUERY;
  const data = await client.request(query);
  return data.allMusics;
};
