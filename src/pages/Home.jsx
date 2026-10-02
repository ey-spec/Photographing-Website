import { ChevronLeft, CircleAlert, MoveLeft } from "lucide-react";
import { data } from "../data/posts";
import FeaturedPost from "../components/HomeComp/FeaturedPost";
import { FaSun, FaUser } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import ArticleCard from "../components/common/ArticleCard";

export default function Home() {
  const featuredPosts = data.posts.filter((post) => post.featured);

  const categories = data.categories;
  const categoriesIcons = [
    {
      name: "إضاءة",
      icon: (
        <FaSun className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
    },
    {
      name: "بورتريه",
      icon: (
        <FaUser className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
    },
    {
      name: "مناظر طبيعية",
      icon: (
        <FaMountainSun className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
    },
    {
      name: "تقنيات",
      icon: (
        <HiOutlineAdjustmentsHorizontal className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
    },
    {
      name: "معدات",
      icon: (
        <CiSettings className="text-xl text-orange-500 group-hover:text-white transition-colors duration-300" />
      ),
    },
  ];

  const posts = data.posts.filter((post) => post.featured === false);
  const latest = posts.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
          style={{ animationDelay: "-2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full  inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse absolute inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 "></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500 opacity-50"></span>
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                مرحباً بك في عدسة
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              اكتشف{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
                فن
              </span>{" "}
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a
                className="px-8 py-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white font-semibold inline-flex items-center justify-center gap-2 group"
                href="/blog"
                data-discover="true"
              >
                <span>استكشف المقالات</span>
                <div className=" group-hover:-translate-x-1 transition-transform">
                  <MoveLeft />
                </div>
              </a>
              <a
                className="px-8 py-4 border border-[#333] rounded-full text-white font-semibold inline-flex items-center justify-center gap-2 hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500"
                href="/about"
                data-discover="true"
              >
                <CircleAlert size={20} />

                <span>اعرف المزيد</span>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div
                className="rounded-3xl backdrop-blur-xl bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i class="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  +50
                </p>
                <p className="text-neutral-500 text-sm">مقالة</p>
              </div>
              <div
                className="rounded-3xl backdrop-blur-xl bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  +10ألف
                </p>
                <p className="text-neutral-500 text-sm">قارئ</p>
              </div>
              <div
                className="rounded-3xl backdrop-blur-xl bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  4
                </p>
                <p className="text-neutral-500 text-sm">تصنيفات</p>
              </div>
              <div
                className="rounded-3xl backdrop-blur-xl bg-[#161616cc] border border-[#262626] p-4 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: "0ms" }}
              >
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                  6
                </p>
                <p className="text-neutral-500 text-sm">كاتب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="text-sm font-medium px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full  inline-flex items-center gap-2 mb-4 animate-fade-in">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 "></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500 opacity-50"></span>
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-[#f97316] translate-y-[-3px] ">
                  مميز
                </span>
              </div>
              <h2 class="text-4xl leading-tight font-bold text-white">
                مقالات مختارة
              </h2>
              <p class="mt-4 leading-relaxed text-neutral-400 text-lg max-w-lg">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <a class="group inline-flex  gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5">
              عرض الكل
              <div class="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                <ChevronLeft />
              </div>
            </a>
          </div>
          <div className="space-y-8 grid grid-cols-1 gap-1">
            {featuredPosts.map((post) => (
              <FeaturedPost post={post} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-medium px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full  inline-flex items-center gap-2 mb-8 animate-fade-in">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse absolute inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 "></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500 opacity-50"></span>
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-orange-500">
                التصنيفات
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              استكشف حسب الموضوع
            </h2>
            <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <a
                className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                data-discover="true"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    {
                      categoriesIcons.find((c) => c.name === category.name)
                        ?.icon
                    }
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} مقالة
                  </p>
                  <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-linear-to-r from-orange-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="text-sm font-medium px-4 py-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full  inline-flex items-center gap-2 mb-8 animate-fade-in">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse absolute inline-flex h-1.5 w-1.5 rounded-full bg-orange-500 "></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500 opacity-50"></span>
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  الأحدث
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                أحدث المقالات
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400  max-w-2xl mx-auto leading-relaxed">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <a
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
              href="/blog"
              data-discover="true"
            >
              عرض جميع المقالات
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((post) => (
              <ArticleCard post={post} view={"grid"} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
                type="email"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>
            </form>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-[#161616]"
                    alt
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-[#161616]"
                    alt
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-[#161616]"
                    alt
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  />
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-[#262626]">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
