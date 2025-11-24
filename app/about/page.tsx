import ContentLayout from '@/components/ContentLayout';

export default function AboutPage() {
  return (
    <ContentLayout title="About">
      <section className="mb-12">
        <p className="text-lg leading-relaxed">
          Nischal Sharma is an entrepreneur and co-founder of Svenklas, a design-driven sustainable luxury lifestyle brand. Based in New Delhi, he brings a unique blend of creative vision and environmental consciousness to the world of premium accessories.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-4">Background</h2>
        <p className="mb-4 leading-relaxed">
          Growing up in Dehradun, Nischal developed an early passion for art, design, photography, and architecture. Drawing inspiration from design luminaries like Dieter Rams and Jony Ive, he cultivated a minimalist aesthetic that would later define his work.
        </p>
        <p className="leading-relaxed">
          During his college years, he began creating functional items from recycled materials using a portable sewing machine, foreshadowing his future commitment to sustainability and craftsmanship.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-4">Professional Journey</h2>
        <p className="mb-4 leading-relaxed">
          Nischal's entrepreneurial journey began after gaining experience in corporate roles in product marketing and management. He worked at companies including SilverPush and e-bee, where he honed his skills in product development and marketing strategy.
        </p>
        <p className="leading-relaxed">
          A Y Combinator Startup School alumnus, Nischal participated in the prestigious program starting in 2015. He previously co-founded Skiprow before embarking on his current venture with Svenklas in 2019.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-light mb-4">Approach</h2>
        <p className="mb-4 leading-relaxed">
          Nischal believes that meaningful work should align with personal passion. He states: "I always wanted to do things where I enjoy the work so much that it seems like play." This philosophy drives his approach to building Svenklas and creating products that embody both aesthetic excellence and environmental responsibility.
        </p>
        <p className="leading-relaxed">
          His love of nature and outdoor activities, rooted in his Dehradun upbringing, remains essential for mental clarity and creative inspiration.
        </p>
      </section>
    </ContentLayout>
  );
}
