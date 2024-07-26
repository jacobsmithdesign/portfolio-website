export const NAVBAR_QUERY = `
{
  allNavbars {
    id
    title
    href
  }
}
`;

export const ABOUT_QUERY = `
  {
  about {
    content
  }
}
`;

export const COMPSCI_QUERY = `
{
  allCompsciProjects {
    title
    content {
      value
    }
    image {url}
  }
}
`;

export const WEBDEV_QUERY = `
{
  allWebdevProjects {
    title
    content {value}
    image {url}
    url
  }
}
`;

export const BLOG_QUERY = `{
  allBlogs {
    title
    content{value}
    image {url}
    date
  }
}`;

export const GALLERY_QUERY = `
{
 allGalleries {
  title
  image {url}
  content
}
}`;

export const MUSIC_QUERY = `
{
allMusics {
  title
  image{url}
  content {value}
  tidal
  spotify
  apple
  soundcloud
}
}`;
