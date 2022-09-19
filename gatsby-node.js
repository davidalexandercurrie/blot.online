const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blotEntry = path.resolve(`src/templates/blot-entry.js`);
  const issueContents = path.resolve(`src/templates/issue-contents.js`);

  const result = await graphql(`
    query {
      allContentfulArticle {
        edges {
          node {
            author {
              name
              shortBio {
                shortBio
              }
            }
            body {
              raw
              references {
                ... on ContentfulFootnote {
                  contentful_id
                  __typename
                  number
                  text {
                    raw
                  }
                }
              }
            }
            slug
            placement
            title
            subtitle
            issueNumber
            headerTitle
          }
        }
      }
    }
  `);

  const issues = await graphql(`
    query {
      allContentfulIssue {
        edges {
          node {
            issueNumber
            issueTitle
            slug
            releaseDate
            released
            article {
              title
              subtitle
              headerTitle
              author {
                name
              }
              slug
            }
          }
        }
      }
    }
  `);

  issues.data.allContentfulIssue.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: issueContents,
      context: {
        articles: node.article,
        title: node.issueTitle,
        subtitle: node.subtitle,
        headerTitle: node.headerTitle,
        number: node.issueNumber,
        date: node.releaseDate,
        released: node.released,
      },
    });
  });

  result.data.allContentfulArticle.edges.forEach(({ node }) => {
    const authors = [...node.author];
    createPage({
      path: `issue-1/${node.slug}`,
      component: blotEntry,
      context: {
        slug: node.slug,
        body: node.body,
        title: node.title,
        subtitle: node.subtitle,
        headerTitle: node.headerTitle,
        id: node.id,
        issueNumber: node.issueNumber,
        placement: node.placement,
        author: node.author,
      },
    });
  });
};
