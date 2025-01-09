import Link from "next/link";
import BodyWrapper from "@/components/BodyWrapper";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, type Post } from "contentlayer/generated";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function PostCard(post: Post) {
  return (
    <Card className="my-4 overflow-hidden rounded-md border border-primary/20 bg-background/50 p-4 transition-all hover:scale-110 hover:border-primary/40">
      <div className="flex">
        <div className="relative w-[200px] flex-shrink-0">
          {post.image ? (
            <div className="relative flex h-full w-full items-center justify-center">
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="text-4xl">📝</div>
          )}
        </div>

        <CardContent className="flex-1 p-6">
          <h2 className="mb-1 text-xl">
            <Link href={post.slug} className="text-primary hover:underline">
              {post.title}
            </Link>
          </h2>
          <time
            dateTime={post.date}
            className="mb-2 block text-xs text-muted-foreground"
          >
            {format(parseISO(post.date), "d LLLL yyyy")}
          </time>
          <p className="text-sm text-muted-foreground">{post.description}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  return (
    <BodyWrapper>
      <div className="mx-auto max-w-3xl py-8">
        <h1 className="mb-8 text-center text-4xl font-black">Blog 👀</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </BodyWrapper>
  );
}
