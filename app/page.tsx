import Link from 'next/link';
import AuthButton from '@/components/AuthButton';
import Comments from '@/components/Comments';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <div className="page-transition"></div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Auth Button */}
        <div className="flex justify-end mb-8">
          <AuthButton />
        </div>

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-2 tracking-tight">
            Nischal Sharma
          </h1>
          <p className="text-lg text-gray-600 mb-1">Co-Founder, Svenklas</p>
          <p className="text-sm text-gray-500">
            Design · Sustainability · Entrepreneurship
          </p>
        </header>

        {/* Navigation Links */}
        <main className="mb-20">
          <nav className="flex flex-col gap-4 max-w-md mx-auto">
            <Link
              href="/about"
              className="group p-4 border border-black/10 rounded-lg hover:border-black/30 transition-all"
            >
              <span className="text-lg font-light group-hover:underline">About</span>
            </Link>

            <Link
              href="/svenklas"
              className="group p-4 border border-black/10 rounded-lg hover:border-black/30 transition-all"
            >
              <span className="text-lg font-light group-hover:underline">Svenklas</span>
            </Link>

            <Link
              href="/philosophy"
              className="group p-4 border border-black/10 rounded-lg hover:border-black/30 transition-all"
            >
              <span className="text-lg font-light group-hover:underline">
                Philosophy & Vision
              </span>
            </Link>

            <Link
              href="/media"
              className="group p-4 border border-black/10 rounded-lg hover:border-black/30 transition-all"
            >
              <span className="text-lg font-light group-hover:underline">
                Interviews & Media
              </span>
            </Link>

            <Link
              href="/contact"
              className="group p-4 border border-black/10 rounded-lg hover:border-black/30 transition-all"
            >
              <span className="text-lg font-light group-hover:underline">Connect</span>
            </Link>

            <Link
              href="/chat"
              className="group p-4 border border-black/30 bg-black text-white rounded-lg hover:bg-black/80 transition-all"
            >
              <span className="text-lg font-light">Chat with Nischal</span>
            </Link>
          </nav>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 border-t border-black/10 pt-8 mb-12">
          <p>Y Combinator Alumni · Dehradun · New Delhi</p>
        </footer>

        {/* Comments Section */}
        <Comments />
      </div>
    </div>
  );
}
