export type PostFrontmatterType = {
  title: string;
  summary: string;
  date: string;
  categories: string[];
  thumbnail: {
    publicURL: string;
  };
  link?: string;
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: PostFrontmatterType;
  };
};

export type PostPageItemType = {
  node: {
    html: string;
    frontmatter: PostFrontmatterType;
  };
};
