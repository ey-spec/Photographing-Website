import { Search } from "lucide-react";
import { data } from "../data/posts";
import { useState } from "react";
import ArticleCard from "../components/common/ArticleCard";

export default function Blog() {
  const categories = ["جميع المقالات", ...data.categories.map((c) => c.name)];
  const [activeCat, setActiveCat] = useState("جميع المقالات");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const PerPage = 6;

  const filtered =
    activeCat === "جميع المقالات"
      ? data.posts
      : data.posts.filter((post) => post.category === activeCat);

  const totalPages = Math.ceil(filtered.length / PerPage);
  const posts = filtered.slice((page - 1) * PerPage, page * PerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="bg-[#0a0a0a]">
        <section>
          <div class="relative py-20 overflow-hidden">
            <div class="absolute inset-0 bg-[#0a0a0a]"></div>
            <div class="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div class="absolute inset-0">
              <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
              <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            </div>
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="text-sm font-medium px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full  inline-flex items-center gap-2 mb-8 animate-fade-in">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 "></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500 opacity-50"></span>
                </span>
                <span className="text-sm font-medium text-orange-500 flex gap-2 items-center">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    ></path>
                  </svg>
                  مدونتنا{" "}
                </span>
              </div>

              <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                استكشف <span class="gradient-text">مقالاتنا</span>
              </h1>
              <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </div>
        </section>
        <div className="sticky top-20 z-40 border-b border-[#262626] bg-[#0a0a0a] backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="relative w-full md:w-80">
                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  aria-label="ابحث في المقالات"
                  className="w-full rounded-xl border border-[#262626] bg-[#161616] py-3 ps-5 pe-12 text-white placeholder-neutral-600 focus:border-orange-500 focus:outline-none"
                />
                <Search
                  size={20}
                  className="absolute end-4 top-1/2 -translate-y-1/2 text-neutral-500"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCat(cat);
                      setPage(1);
                    }}
                    className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      cat === activeCat
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "border border-[#262626] bg-[#161616] text-neutral-400 hover:border-orange-500/30"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
          <div class="mb-8 flex items-center justify-between">
            <p class="text-neutral-400">
              عرض <span class="font-bold text-white">{filtered.length}</span>{" "}
              مقالات
            </p>
            <div class="flex items-center gap-2">
              <div class="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    view === "grid"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض شبكي"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    view === "list"
                      ? "bg-orange-500 text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  title="عرض قائمة"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className={
              view === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "flex flex-col gap-6"
            }
          >
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} view={view} />
            ))}
          </div>
          {totalPages > 1 && (
            <>
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-1">
                  {pageNumbers.map((n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                        n === page
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                          : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] disabled:opacity-40 disabled:pointer-events-none"
                >
                  <svg
                    className="w-5 h-5 rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-center text-neutral-500 mt-4 text-sm">
                صفحة {page} من {totalPages}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
