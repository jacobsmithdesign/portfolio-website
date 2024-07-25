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
  }
}
`;
