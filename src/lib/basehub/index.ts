import { basehub } from "basehub";

export const getLandingPageData = async () => {
  // We try to fetch from BaseHub.
  // Since it's a blank project, this query might fail if we ask for fields that don't exist.
  // We'll wrap it in a try-catch and return defaults if it fails.

  const defaults = {
    hero: {
      title: "Start the day with confidence",
      description: "Stay organized and stress-free. No clutter, no confusion, just simple scheduling.",
      ctaPrimary: "Download now",
      ctaSecondary: "Learn more",
    },
    features: [
      {
        title: "Plan your day with ease",
        description: "Adding events, reminders, and tasks takes just seconds, thanks to an intuitive design that keeps scheduling simple.",
        cta: "Create events fast",
      },
      {
        title: "Keep all calendars in sync",
        description: "Every update is reflected instantly, keeping your schedules connected and always perfectly aligned.",
        cta: "Sync instantly",
        reverse: true,
      },
      {
        title: "Never miss what matters",
        description: "Smart reminders adapt to your needs, helping you stay focused on priorities without missing a beat.",
        cta: "Set reminders today",
      },
    ],
    featureGrid: {
        title: "One calendar for all your schedules",
        description: "Bring work, personal, and shared events together with a calendar that keeps it all simple.",
        items: [
            { title: "Quick event creation", description: "Add events fast, Drag & drop scheduling, Color-coded entries" },
            { title: "Smart recurring reminders", description: "Flexible repeat options, Custom end dates, Helpful notifications" },
            { title: "Cross-device syncing", description: "Works on all devices, Instant calendar sync, Always up to date" },
            { title: "Team and calendar sharing", description: "Share with anyone, Set access levels, Coordinate easily" },
        ]
    },
    howItWorks: {
      title: "Simplifying your daily planning",
      subtitle: "How it works",
      steps: [
        { number: "1", title: "Sign up and personalize", description: "Create your account in minutes and customize the calendar to match your workflow." },
        { number: "2", title: "Sync your calendars", description: "Connect Google, Outlook, or iCloud and bring all your events into Dayconn." },
        { number: "3", title: "Stay organized effortlessly", description: "Enjoy a simple, stress-free schedule with smart reminders and instant syncing." },
      ]
    },
    testimonials: {
      title: "Loved by people who want more time back",
      description: "Thousands of people rely on our calendar every day to stay organized, save time, and bring clarity to their schedules.",
      items: [
        { text: "This app finally makes planning simple. I can actually see my week clearly without feeling overwhelmed.", author: "Daniel K.", role: "Product manager" },
        { text: "Sharing my schedule with my team has never been this easy. It saves us hours every week.", author: "Arjun P.", role: "Software engineer" },
        { text: "Sharing my calendar is effortless here. I can coordinate events fast and actually avoid endless back-and-forth emails.", author: "Clara M.", role: "Freelance writer" },
        { text: "I really love how quick it is to add events. It’s the first calendar I've actually enjoyed using.", author: "Sofia L.", role: "Marketing specialist" },
      ]
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "Can I import my existing calendar?", answer: "Yes! You can easily connect Google, Outlook, or iCloud and bring all your events into Dayconn." },
        { question: "Does it work offline?", answer: "Yes, Dayconn works offline. Your changes will sync automatically once you're back online." },
        { question: "Is my data private and secure?", answer: "Absolutely. We use industry-standard encryption to ensure your data stays private and secure at all times." },
        { question: "How much does it cost?", answer: "We offer a free tier for individuals and premium plans for teams. Check our pricing page for more details." },
      ]
    },
    cta: {
      title: "Make time only for what matters",
      description: "Free up your time with a calendar that works for you. Join thousands of productive people today.",
      ctaPrimary: "Download now",
      ctaSecondary: "View pricing"
     },
     pricing: {
       title: "Simple pricing",
       description: "Choose the plan that fits your needs. No hidden fees.",
       plans: [
         { name: "Basic", price: "$0", description: "Perfect for personal use.", features: ["Up to 3 calendars", "Smart reminders", "Mobile app access", "Basic support"] },
         { name: "Pro", price: "$12", description: "Ideal for power users.", features: ["Unlimited calendars", "Priority sync", "Custom color coding", "Advanced sharing", "Priority support"], popular: true },
         { name: "Team", price: "$49", description: "Best for collaborative teams.", features: ["Everything in Pro", "Unlimited team members", "Admin controls", "Team analytics", "Dedicated manager"] },
       ]
     },
     changelog: {
       title: "Changelog",
       updates: [
         { date: "February 2025", version: "v2.1.0", title: "Enhanced Team Sync", description: "We've rebuilt our sync engine from the ground up to support large teams with real-time updates." },
         { date: "January 2025", version: "v2.0.0", title: "Dayconn 2.0", description: "A major update featuring a completely redesigned UI, new smart reminders, and multi-calendar support." },
       ]
    }
  };

  try {
    // Basic connectivity check
    const repoInfo = await basehub().query({
      _sys: { title: true }
    });
    console.log(`Connected to BaseHub: ${repoInfo._sys.title}`);

    // If we had the blocks defined, we would fetch them here:
    // const data = await basehub().query({ ... });

    return defaults;
  } catch (error) {
    console.warn("BaseHub fetch failed, using defaults", error);
    return defaults;
  }
};

export interface Author {
  name: string;
  role: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  title: string;
  slug: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: Author;
  categories: Category[];
  readingTime: string;
  coverImage?: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  content: { json: any }; // BaseHub RichText json
  featured?: boolean;
}

const blogDefaults: BlogPost[] = [
  {
    title: "How to master your daily schedule",
    slug: "master-your-daily-schedule",
    excerpt: "Discover the best techniques to organize your day and boost your productivity without feeling overwhelmed.",
    date: "2025-02-10",
    author: {
      name: "Daniel K.",
      role: "Product Strategy",
      bio: "Daniel is a product manager with 10 years of experience in productivity tools."
    },
    categories: [{ title: "Productivity", slug: "productivity" }, { title: "Guides", slug: "guides" }],
    readingTime: "5 min read",
    featured: true,
    content: {
      json: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Planning your day shouldn't be a chore. With the right tools and mindset, you can transform your schedule from a source of stress into a roadmap for success." }]
          },
          {
            type: "heading",
            attrs: { level: 2 },
            content: [{ type: "text", text: "The Power of Time Blocking" }]
          },
          {
            type: "paragraph",
            content: [{ type: "text", text: "Time blocking is a simple yet effective way to manage your time. By assigning specific tasks to specific time slots, you reduce decision fatigue and improve focus." }]
          }
        ]
      }
    }
  },
  {
    title: "Why we built Dayconn",
    slug: "why-we-built-dayconn",
    excerpt: "The story behind our mission to simplify scheduling for everyone, everywhere.",
    date: "2025-01-25",
    author: {
      name: "Sofia L.",
      role: "Co-founder",
      bio: "Sofia is passionate about building tools that help people live more balanced lives."
    },
    categories: [{ title: "Company", slug: "company" }],
    readingTime: "3 min read",
    content: {
      json: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "We started Dayconn because we were tired of complex calendar apps that felt like work just to use. We wanted something simple, beautiful, and intuitive." }]
          }
        ]
      }
    }
  },
  {
    title: "5 tips for better team collaboration",
    slug: "tips-for-team-collaboration",
    excerpt: "Effective communication and shared schedules are key to any successful project. Here is how to do it right.",
    date: "2025-01-15",
    author: {
      name: "Arjun P.",
      role: "Engineering Lead",
      bio: "Arjun leads the engineering team at Dayconn and loves distributed systems."
    },
    categories: [{ title: "Teamwork", slug: "teamwork" }],
    readingTime: "4 min read",
    content: {
      json: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [{ type: "text", text: "Collaboration is more than just talking; it's about alignment. Shared calendars are one of the best ways to achieve that alignment." }]
          }
        ]
      }
    }
  }
];

export const getBlogData = async () => {
  try {
    // Fetch from BaseHub logic here
    return {
      posts: blogDefaults,
      categories: [
        { title: "All", slug: "all" },
        { title: "Productivity", slug: "productivity" },
        { title: "Guides", slug: "guides" },
        { title: "Company", slug: "company" },
        { title: "Teamwork", slug: "teamwork" },
      ]
    };
  } catch {
    return {
      posts: blogDefaults,
      categories: []
    };
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    // Fetch from BaseHub logic here
    return blogDefaults.find(p => p.slug === slug);
  } catch {
    return blogDefaults.find(p => p.slug === slug);
  }
};
