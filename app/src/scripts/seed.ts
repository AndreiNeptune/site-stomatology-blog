import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'igoc6trt',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

async function seed() {
  console.log('Seeding demo data...');

  try {
    // 1. Create Author
    const docAuthor = {
      _type: 'author',
      _id: 'demo-author-1',
      name: 'Dr. Bianca',
      slug: { _type: 'slug', current: 'dr-bianca' },
      specialization: 'implantologie',
    };
    await client.createOrReplace(docAuthor);
    console.log('Created Author');

    // 2. Create Category
    const docCategory = {
      _type: 'category',
      _id: 'demo-category-1',
      title: 'Implanturi Dentare',
      titleEn: 'Dental Implants',
      slug: { _type: 'slug', current: 'implanturi-dentare' },
      treatmentType: 'surgical',
      icon: '🦷',
      description: 'Totul despre cele mai moderne soluții de restaurare dentară.',
    };
    await client.createOrReplace(docCategory);
    console.log('Created Category');

    // 3. Create Post
    const docPost = {
      _type: 'post',
      _id: 'demo-post-1',
      title: 'Ghid Complet: Ce trebuie să știi despre Implantul Dentar',
      titleEn: 'Complete Guide: What You Need to Know About Dental Implants',
      slug: { _type: 'slug', current: 'ghid-complet-implant-dentar' },
      excerpt: 'Descoperă etapele unui implant dentar, beneficiile pe termen lung și de ce este cea mai bună soluție pentru zâmbetul tău.',
      excerptEn: 'Discover the stages of a dental implant, long-term benefits, and why it is the best solution for your smile.',
      publishedAt: new Date().toISOString(),
      featured: true,
      readTime: 5,
      author: {
        _type: 'reference',
        _ref: 'demo-author-1',
      },
      categories: [
        {
          _key: 'cat1',
          _type: 'reference',
          _ref: 'demo-category-1',
        },
      ],
      body: [
        {
          _key: 'b1',
          _type: 'block',
          style: 'h2',
          children: [
            {
              _key: 'b1c1',
              _type: 'span',
              text: 'De ce să alegi un implant dentar?',
            },
          ],
        },
        {
          _key: 'p1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'p1c1',
              _type: 'span',
              text: 'Implantul dentar reprezintă cea mai modernă și eficientă metodă de a înlocui un dinte lipsă. Spre deosebire de punțile tradiționale, acesta nu necesită șlefuirea dinților vecini și oferă o stabilitate incredibilă.',
            },
          ],
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h3',
          children: [
            {
              _key: 'b2c1',
              _type: 'span',
              text: 'Procesul de tratament',
            },
          ],
        },
        {
          _key: 'p2',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'p2c1',
              _type: 'span',
              text: 'La Dr. Bianca Ionescu, folosim tehnologii de ultimă oră pentru a asigura o experiență fără durere și rezultate estetice deosebite. Totul începe cu o consultație și o tomografie computerizată (CBCT) pentru o planificare precisă.',
            },
          ],
        },
      ],
    };
    await client.createOrReplace(docPost);
    console.log('Created Post');

    console.log('Seeding complete! Check your browser.');
  } catch (err) {
    console.error('Seeding failed:', err);
  }
}

seed();
