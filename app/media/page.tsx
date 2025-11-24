import ContentLayout from '@/components/ContentLayout';

export default function MediaPage() {
  return (
    <ContentLayout title="Interviews & Media">
      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Podcasts</h2>

        <div className="mb-8 p-6 border border-black/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">All Grit Podcast — Episode 01</h3>
          <p className="text-gray-600 mb-3">
            "Nischal Sharma (Y-combinator/Svenklas) talks entrepreneurship & going back to basics"
          </p>
          <p className="mb-4 leading-relaxed">
            In this inaugural episode of the All Grit podcast, Nischal discusses the decisions that defined Svenklas and its commitment to reducing social costs while sourcing high-quality materials. Published June 29, 2020.
          </p>
          <a
            href="https://open.spotify.com/episode/0RfpUu719nnmoWzgE9CsVR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            Listen on Spotify →
          </a>
        </div>

        <div className="p-6 border border-black/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">Bizz Banter Podcast</h3>
          <p className="text-gray-600 mb-3">
            "Nischal Sharma: Co-Founder of Svenklas"
          </p>
          <p className="mb-4 leading-relaxed">
            An in-depth conversation exploring Nischal's entrepreneurial journey, the founding of Svenklas, and the intersection of design and sustainability in the lifestyle accessories space.
          </p>
          <a
            href="https://www.podpage.com/bizz-banter-1/nischal-sharma-co-founder-of-svenklas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            View Episode →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Written Interviews</h2>

        <div className="p-6 border border-black/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">BrilliantRead Media</h3>
          <p className="text-gray-600 mb-3">
            Interview with Nischal Sharma, Co-Founder at Svenklas
          </p>
          <p className="mb-4 leading-relaxed">
            A comprehensive interview covering Nischal's background, his journey into entrepreneurship, stress management strategies, and the core principles that drive his success. He discusses his passion for design, commitment to sustainability, and philosophy that work should feel like play.
          </p>
          <a
            href="https://www.brilliantread.com/interview-with-nischal-sharma-co-founder-at-svenklas/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            Read Interview →
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Featured Publications</h2>

        <div className="mb-8 p-6 border border-black/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">YourStory</h3>
          <p className="text-gray-600 mb-3">
            "This premium accessory brand is standing out with a focus on sustainability"
          </p>
          <p className="mb-4 leading-relaxed">
            An extensive feature on Svenklas covering the brand's founding story, product range, sustainability initiatives, market positioning, and recognition in the fashion industry.
          </p>
          <a
            href="https://yourstory.com/smbstory/svenklas-premium-accessory-brand-design-driven-sustainable"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            Read Article →
          </a>
        </div>

        <div className="p-6 border border-black/10 rounded-lg">
          <h3 className="text-xl font-medium mb-2">Other Media Coverage</h3>
          <p className="mb-3 leading-relaxed">
            Svenklas has been featured in leading fashion and lifestyle publications including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Grazia India</li>
            <li>Man's World</li>
            <li>Little Black Book</li>
            <li>Fashion Network</li>
            <li>Times Internet</li>
            <li>Homegrown</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-6">Professional Profiles</h2>

        <div className="flex flex-col gap-3">
          <a
            href="https://www.linkedin.com/in/nischalsharma94/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            LinkedIn Profile →
          </a>
          <a
            href="https://www.crunchbase.com/person/nischal-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
          >
            Crunchbase Profile →
          </a>
        </div>
      </section>
    </ContentLayout>
  );
}
