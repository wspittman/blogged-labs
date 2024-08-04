import { Blog, Post } from "./models";

const seedBlogData = [
  {
    title: "Blogged Labs",
    description: "A blog about software development and technology.",
  },
  {
    title: "React Query",
    description: "A blog about React Query.",
  },
  {
    title: "React Router",
    description: "A blog about React Router.",
  },
  {
    title: "TypeScript",
    description: "A blog about TypeScript.",
  },
  {
    title: "Express",
    description: "A blog about Express.",
  },
  {
    title: "MongoDB",
    description: "A blog about MongoDB.",
  },
  {
    title: "Mongoose",
    description: "A blog about Mongoose.",
  },
  {
    title: "React",
    description: "A blog about React.",
  },
  {
    title: "Node.js",
    description: "A blog about Node.js.",
  },
  {
    title: "JavaScript",
    description: "A blog about JavaScript.",
  },
];

const seedPostData = [
  {
    title: "React Query - Introduction",
    content: "An introduction to React Query.",
  },
  {
    title: "React Query - Usage",
    content: "How to use React Query.",
  },
  {
    title: "React Query - Advanced",
    content: "Advanced React Query techniques.",
  },
];

function createSeedPosts(blogId: string) {
  return seedPostData.map((post) => ({
    title: post.title,
    content: `${post.content} seeded for blog id: ${blogId}`,
    blogId,
  }));
}

export async function seedDatabase() {
  try {
    const count = await Blog.countDocuments();

    if (count === 0) {
      console.log("Database is empty. Seeding...");

      for (const blogData of seedBlogData) {
        const blog = new Blog(blogData);
        await blog.save();
        console.log(`Created blog: ${blog.title}`);

        const posts = createSeedPosts(blog.id);

        for (const postData of posts) {
          const post = new Post(postData);
          await post.save();
        }
        console.log(`Created seed posts for blog: ${blog.title}`);
      }

      console.log("Database seeded successfully");
    } else {
      console.log("Database is not empty. Skipping seed.");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
