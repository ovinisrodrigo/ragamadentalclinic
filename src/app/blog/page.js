import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "../components/blogData";

export default function Blog() {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-white min-h-screen px-4 sm:px-10 md:px-20 lg:px-80 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl text-black font-bold mb-10 md:mb-12 text-center">Blog Articles</h1>

        <div className="space-y-6 md:space-y-8">
          {blogArticles.map((post) => (
            <article
              key={post.id}
              className="bg-teal-100 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-[260px_1fr] items-stretch"
            >
              <div className="relative min-h-[180px] md:min-h-[200px]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  <Link href="#" className="text-black hover:text-teal-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-black/90 leading-relaxed text-base md:text-lg">
                  {post.excerpt}
                  <span className="text-gray-500 ml-2">Read more.....</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
