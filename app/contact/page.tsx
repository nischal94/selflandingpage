import ContentLayout from '@/components/ContentLayout';

export default function ContactPage() {
  return (
    <ContentLayout title="Connect">
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          Learn more about Nischal Sharma and Svenklas through these channels:
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Professional</h2>

        <div className="space-y-6">
          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://www.linkedin.com/in/nischalsharma94/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              LinkedIn
            </a>
            <p className="text-sm text-gray-600 mt-1">Professional profile and updates</p>
          </div>

          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://x.com/nischalsharma_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              X (Twitter)
            </a>
            <p className="text-sm text-gray-600 mt-1">
              Thoughts on design, sustainability, and entrepreneurship
            </p>
          </div>

          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://www.crunchbase.com/person/nischal-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              Crunchbase
            </a>
            <p className="text-sm text-gray-600 mt-1">Entrepreneurial journey and ventures</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Svenklas</h2>

        <div className="space-y-6">
          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://svenklas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              Official Website
            </a>
            <p className="text-sm text-gray-600 mt-1">Explore the product collection</p>
          </div>

          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://in.linkedin.com/company/svenklas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              Svenklas on LinkedIn
            </a>
            <p className="text-sm text-gray-600 mt-1">Company updates and news</p>
          </div>

          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://www.instagram.com/svenklas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              Instagram
            </a>
            <p className="text-sm text-gray-600 mt-1">Product showcases and brand storytelling</p>
          </div>

          <div className="p-4 border border-black/10 rounded-lg">
            <a
              href="https://x.com/ThisisSvenklas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg underline hover:no-underline"
            >
              X (Twitter)
            </a>
            <p className="text-sm text-gray-600 mt-1">
              Sustainable luxury for modern travel #neverstill
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Location</h2>
        <p className="mb-2 leading-relaxed">Based in New Delhi, India</p>
        <p className="leading-relaxed">Svenklas headquarters in Gurugram</p>
      </section>
    </ContentLayout>
  );
}
