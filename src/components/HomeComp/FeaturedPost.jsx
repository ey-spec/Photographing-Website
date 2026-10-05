import { Clock, MoveLeft, Star } from "lucide-react";
import { formatDate } from "../../helpers/Helpers";
import { Link } from "react-router-dom";

export default function FeaturedPost({ post }) {
  return (
    <>
      <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500">
        <Link to={`/blog/${post.slug}`} className="block">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-72 md:h-[400px] overflow-hidden">
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute top-4 right-4">
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                  <div class="w-3.5 h-3.5 flex items-center justify-center">
                    <Star size={12} fill="currentcolor" />
                  </div>
                  <span className="translate-y-[-2px]"> مميز</span>
                </span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
              <div class="flex items-center gap-3 mb-4">
                <span class="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                  {post.category}
                </span>
                <span class="inline-flex items-center gap-1 text-sm text-neutral-500">
                  <div class="w-4 h-4 flex items-center justify-center">
                    <Clock size={12} />
                  </div>
                  <span className="leading-none">{post.readTime}</span>
                </span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                {post.title}
              </h2>
              <p class="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={post.author.avatar}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                    />
                    <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white">{post.author.name}</p>
                    <p class="text-xs text-neutral-500">{formatDate(post)}</p>
                  </div>
                </div>
                <span class="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  اقرأ المقال
                  <div class="w-5 h-5">
                    <MoveLeft />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
