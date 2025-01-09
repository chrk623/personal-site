import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // remarkPlugins: [[remarkGfm, { singleTilde: false }]],
    // remarkPlugins: [
    //   [
    //     remarkGfm,
    //     {
    //       singleTilde: false,
    //       tablePipeAlign: false,
    //       tableCellPadding: false,
    //     },
    //   ],
    // ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-mocha",
          // theme: {
          //   light: "catppuccin-latte", // Light theme
          //   dark: "catppuccin-mocha", // Dark theme
          // },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
