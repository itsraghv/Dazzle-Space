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
  } catch (e) {
    console.warn("BaseHub fetch failed, using defaults", e);
    return defaults;
  }
};
