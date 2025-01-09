import React from "react";
import Image from "next/image";
import { Mdx } from "@/components/Mdx";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import BodyWrapper from "@/components/BodyWrapper";
import { allPosts, type Post } from "contentlayer/generated";

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string): Promise<Post> {
  const post = allPosts.find((doc) => doc.slugAsParams == slug);

  if (!post) {
    notFound();
  }
  return post;
}

async function page({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <BodyWrapper>
      <article className="mx-auto max-w-xl py-8">
        <div className="mb-8 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time
            dateTime={post.date}
            className="text-xs text-gray-600 dark:text-gray-300"
          >
            {format(parseISO(post.date), "d LLLL yyyy")}
          </time>
          {post.image && (
            <Image src={post.image} width={400} height={200} alt="post cover" />
          )}
        </div>
        <Mdx code={post.body.code} />
      </article>
    </BodyWrapper>
  );
}

export default page;
