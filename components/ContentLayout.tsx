import Link from 'next/link';
import AuthButton from './AuthButton';

export default function ContentLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fefdfb]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Auth Button */}
        <div className="flex justify-end mb-8">
          <AuthButton />
        </div>

        {/* Header */}
        <header className="mb-12">
          <Link href="/" className="text-sm underline hover:no-underline mb-4 inline-block">
            ← Back
          </Link>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight">{title}</h1>
        </header>

        {/* Content */}
        <main className="prose prose-neutral max-w-none">
          {children}
        </main>
      </div>
    </div>
  );
}
