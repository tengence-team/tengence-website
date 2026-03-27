export default function Home() {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          欢迎来到 Tengence
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
          我们致力于提供优质的产品和服务，帮助您实现业务目标。
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="/product"
            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            了解产品
          </a>
          <a
            href="/about-us"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            关于我们 <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
