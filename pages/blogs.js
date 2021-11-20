import Layout from "../components/layout";
import Navigation from "../components/navigation";

import Blog from "../components/blog";
import { getAllPosts } from "../lib/api";

import Link from "next/link";

const blogs = ({ allPosts }) => {
  const firstPost = allPosts[0];
  return (
    <Layout>
      <Navigation />

      <section>
        <div
          className="
          container
          flex flex-col
          items-center
          px-5
          py-8
          mx-auto
          max-w-7xl
          sm:px-6
          lg:px-8
        "
        >
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="w-full mx-auto">
              <h1 className="text-4xl font-bold mb-8">
                <Link as={`/posts/${firstPost.slug}`} href="/posts/[slug]">
                  <a className="hover:underline">{firstPost.title}</a>
                </Link>
              </h1>
              <h2 className="text-2xl font-semibold mb-4">{firstPost.slug}</h2>
              <p className="text-base mb-8">{firstPost.excerpt}</p>
            </div>
          </div>
          {allPosts.map((post) => (
            <Blog
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default blogs;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "favorite",
  ]);

  return {
    props: { allPosts },
  };
}
