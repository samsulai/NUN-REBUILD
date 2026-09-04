export type NewsItem = {
  slug: string
  tag: string
  title: string
  excerpt: string
  date: string
  image: string
  featured?: boolean
}

export const newsItems: NewsItem[] = [
  {
    slug: "nile-university-hosts-the-pivot",
    tag: "News",
    title: "Nile University hosts The PIVOT: Reinventing Yourself in a Changing World",
    excerpt:
      "On 15th August 2026, Nile University of Nigeria hosted The PIVOT, a networking and career advancement event that brought together young professionals, industry leaders, and academics to explore how to stay relevant in a rapidly changing world of work.",
    date: "21 August 2026",
    image: "/campus-audience.jpg",
    featured: true,
  },
  {
    slug: "nile-university-8th-inaugural-lecture",
    tag: "News",
    title:
      "Nile University's 8th Inaugural Lecture Highlights the Future of Intelligent Infrastructure and Predictive Maintenance",
    excerpt:
      "The University's 8th Inaugural Lecture examined how sensor networks, data analytics, and machine learning are reshaping the way critical infrastructure is designed, monitored, and maintained.",
    date: "12 August 2026",
    image: "/l1.jpeg",
  },
  {
    slug: "nile-university-signs-mou-policy-innovation-centre",
    tag: "News",
    title:
      "Nile University of Nigeria Signs MoU with Policy Innovation Centre to Advance Gender Studies and Policy Research",
    excerpt:
      "The partnership will support joint research, curriculum development, and evidence-based policy work focused on gender equity across Nigeria and the wider region.",
    date: "5 August 2026",
    image: "/l2.jpeg",
  },
  {
    slug: "nile-university-hosts-gambia-higher-education-minister",
    tag: "News",
    title:
      "Nile University Hosts The Gambia's Higher Education Minister on Nationally Coordinated University Tour",
    excerpt:
      "The visiting delegation toured teaching and research facilities and discussed opportunities for student exchange and academic collaboration between the two countries.",
    date: "29 July 2026",
    image: "/l3.jpeg",
  },
  {
    slug: "nile-university-places-3rd-jamb-merit-awards",
    tag: "News",
    title:
      "Nile University places 3rd at the JAMB National Tertiary Admissions Performance Merit Awards",
    excerpt:
      "The recognition places Nile among the top-performing private universities in the country for admissions quality and process integrity.",
    date: "18 July 2026",
    image: "/NUN02329-scaled.avif",
  },
  {
    slug: "nile-university-joins-honoris-united-universities",
    tag: "News",
    title:
      "Nile University joins Honoris United Universities, Africa's largest private higher education network",
    excerpt:
      "Membership connects Nile students and faculty to a pan-African network of institutions, shared programmes, and cross-border learning opportunities.",
    date: "9 July 2026",
    image: "/kdqcmr9vp8hfuf.jpg",
  },
  {
    slug: "nile-university-medical-graduates-recognised-uk-gmc",
    tag: "News",
    title: "Nile University medical graduates recognised by the UK General Medical Council",
    excerpt:
      "Graduates of the College of Health Sciences are now eligible to pursue registration and practice pathways in the United Kingdom.",
    date: "1 July 2026",
    image: "/DSC00304-scaled.avif",
  },
]
