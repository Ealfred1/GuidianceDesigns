export interface CaseStudyData {
  id: string;
  tag: string;
  title: string;
  description: string;
  role: string;
  timeline: string;
  scope: string;
  ctaText: string;
  ctaLink?: string;
  prototypeLink?: string;
  problem: string;
  approach: string;
  keyScreens: {
    title: string;
    description: string;
    imageType: string;
    image?: string;
  }[];
  designSystem: {
    typography: string;
    color: string;
    components: string;
    spacing: string;
  };
  outcome: string;
  accentColor: string;
  isMobile: boolean;
}

export const caseStudies: CaseStudyData[] = [
  {
    id: "scientia",
    tag: "DATA PLATFORM",
    title: "Scientia",
    description: "A data insights platform built to help analysts and decision-makers make sense of complex information without getting lost in it.",
    role: "Product Designer",
    timeline: "3 Months",
    scope: "UX, UI, Design System",
    ctaText: "View Live Project",
    ctaLink: "#",
    prototypeLink: "#",
    problem: "Most data platforms are built to display information, not to help people understand it. Analysts were moving between multiple dashboards, scanning dense tables, and spending too much time trying to interpret what the data actually meant. Important insights were buried under layers of noise, and simple questions often took longer than they should to answer. The result was slow decision-making and a frustrating experience for users who needed clarity, not complexity.",
    approach: "The focus was not to add more features, but to make the existing data easier to understand and act on. I started by restructuring how information is presented, placing the most important metrics at the top and reducing the need for users to dig through heavy tables. Instead of showing everything at once, the interface guides users from a high-level overview into deeper insights. Navigation was simplified to remove unnecessary steps, and visual hierarchy was used to clearly separate primary data from secondary information. Every screen was designed to answer a specific question, rather than just display data.",
    keyScreens: [
      {
        title: "Dashboard",
        description: "A clear entry point that surfaces the most important metrics immediately, reducing the need to search for key information.",
        imageType: "Dashboard Overview"
      },
      {
        title: "Report View",
        description: "Breaks down complex datasets into structured sections, making it easier to scan and interpret.",
        imageType: "Structured Reports"
      },
      {
        title: "Analytics",
        description: "Provides deeper insights with visual emphasis, helping users quickly identify trends and patterns.",
        imageType: "Visual Analytics"
      }
    ],
    designSystem: {
      typography: "A clear type scale was used to guide attention, with strong contrast between headings, data points, and supporting text.",
      color: "A restrained color palette with a strong primary accent helps highlight important data without overwhelming the interface.",
      components: "Reusable components such as cards, tables, and filters ensure consistency across screens and speed up future iterations.",
      spacing: "An 8pt spacing system was used to maintain rhythm and improve readability across the interface."
    },
    outcome: "The redesign made the platform easier to navigate and reduced the effort required to interpret data. Overall, the experience shifted from being data-heavy to insight-focused, helping users move faster and make more confident decisions.",
    accentColor: "#7c73ff",
    isMobile: false
  },
  {
    id: "resq-x-ecosystem",
    tag: "MOBILITY PLATFORM",
    title: "ResQ-X Ecosystem",
    description: "An on-demand platform that connects drivers with roadside assistance, fuel delivery, and fleet services across mobile, responder, and business products.",
    role: "Product Designer",
    timeline: "Ongoing",
    scope: "Mobile App, Pro App, B2B Platform, Marketing Website",
    ctaText: "View Live Product",
    ctaLink: "#",
    prototypeLink: "#",
    problem: "Getting help on the road shouldn’t be complicated, but it often is. Drivers who experience breakdowns, flat tyres, or run out of fuel are usually left searching for help in stressful situations. There is no reliable, structured way to quickly request assistance, track progress, or know when help will arrive. On the other side, service providers operate without a unified system to receive, manage, and complete requests efficiently. For businesses that depend on fuel daily, managing supply and tracking usage is also fragmented, leading to delays, poor visibility, and unnecessary operational stress.",
    approach: "The goal was to create a connected ecosystem that handles both sides of the experience, from request to completion. Instead of designing a single app, the solution was split into four products that work together: A customer app for requesting services quickly, A Pro app for responders to receive and complete jobs, A B2B platform for businesses to manage fuel and fleet operations, and A marketing website to communicate the product clearly. On the customer side, the focus was speed and clarity. Users should be able to request help in a few steps, understand what is happening, and feel reassured throughout the process. For responders, the experience was simplified to reduce cognitive load. Jobs are clearly presented, actions are direct, and unnecessary steps were removed to help them focus on completing requests efficiently. For businesses, the platform provides structure. Fuel requests, fleet tracking, and analytics are brought into one place to improve visibility and control.",
    keyScreens: [
      {
        title: "Home & Onboarding",
        description: "A clean, authenticated home experience that surfaces immediate assistance options.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/home-authenticated.svg"
      },
      {
        title: "Service Selection",
        description: "Visual selection for various roadside needs like Flat Tyre, Out of Fuel, etc.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/flat-tyre.svg"
      },
      {
        title: "Order Preview",
        description: "Clear summary of the request before confirmation, including ETA and responder details.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/order-preview-towing.svg"
      },
      {
        title: "Responder Workflow",
        description: "The Pro app allows responders to manage their queue and job statuses efficiently.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/job-requests-queue.svg"
      },
      {
        title: "Real-time Tracking",
        description: "Users can track their responder's progress and status updates in real-time.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/first-responder-arrived.svg"
      },
      {
        title: "Leaderboard & Analytics",
        description: "Gamified tracking for responders and operational visibility for the platform.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/leaderboard.svg"
      },
      {
        title: "Fleet Management",
        description: "A specialized dashboard for B2B partners to manage their entire fleet's fuel and maintenance.",
        imageType: "Desktop Screen",
        image: "/projects/resqx/business-dashboard.svg"
      },
      {
        title: "Responder Details",
        description: "In-depth view of the assigned responder, building trust and transparency.",
        imageType: "Mobile Screen",
        image: "/projects/resqx/responder-details.svg"
      }
    ],
    designSystem: {
      typography: "Clear hierarchy to ensure readability across both mobile and web interfaces.",
      color: "A strong primary color is used for actions and status, while neutral tones keep the interface clean and focused.",
      components: "Reusable elements such as cards, buttons, and status indicators ensure consistency across all platforms.",
      spacing: "Simple and direct interactions were prioritized, especially for responders who need to act quickly without distraction."
    },
    outcome: "The platform introduced a more structured and reliable way for users to get help when they need it. Drivers can now request assistance quickly without searching for options manually. Responders have a clearer workflow for handling jobs, and businesses gain better control over fuel and fleet operations. The experience shifts from uncertainty and delay to a more predictable and controlled process, improving both efficiency and user confidence.",
    accentColor: "#22c55e",
    isMobile: true
  },
  {
    id: "gaderly",
    tag: "EVENT PLATFORM",
    title: "Gaderly",
    description: "An AI-powered event planning and vendor marketplace designed to help clients plan smarter and connect with trusted vendors in one place.",
    role: "Product Designer",
    timeline: "In Progress",
    scope: "Product Strategy, UX, UI, Design System",
    ctaText: "View Prototype",
    prototypeLink: "#",
    problem: "Planning an event should feel exciting, but for most people, it quickly becomes stressful. Clients often move between WhatsApp chats, calls, Instagram pages, and spreadsheets just to compare vendors, ask for prices, and keep track of decisions. Information is scattered, availability is unclear, and there is no structured flow to guide them from idea to booking. Vendors face a different problem. While they want more visibility and more bookings, they often deal with too many unqualified inquiries and have no central place to manage leads, activity, or performance. The result is a fragmented experience on both sides.",
    approach: "The goal was to create a platform that does more than list vendors. Instead of treating event planning as a search problem, Gaderly was designed as a guided experience. The product helps clients structure their event needs first, then connects them with relevant vendors in a more intentional way. On the client side, the experience focuses on reducing uncertainty. AI-assisted planning helps users define their event, understand what they need, and discover vendors that match their budget, style, and requirements. On the vendor side, the experience focuses on visibility and conversion. Vendors get a clearer way to present their services, manage bookings, and attract more qualified inquiries. Rather than scattering the journey across multiple platforms, Gaderly brings planning, discovery, and booking into one connected flow.",
    keyScreens: [
      {
        title: "AI-Assisted Planning",
        description: "Clients enter event details and receive structured guidance, helping them move from vague ideas to a clearer plan.",
        imageType: "AI-Assisted Planning Flow"
      },
      {
        title: "Vendor Discovery",
        description: "Users can browse, filter, and discover vendors based on category, needs, and preferences.",
        imageType: "Vendor Discovery Marketplace"
      },
      {
        title: "Booking Flow",
        description: "The platform supports a more organized path from inquiry to confirmation, reducing scattered communication.",
        imageType: "Booking Flow"
      },
      {
        title: "Vendor Dashboard",
        description: "Vendors can monitor bookings, activity, and profile performance from one place.",
        imageType: "Vendor Dashboard Overview"
      }
    ],
    designSystem: {
      typography: "A clear type hierarchy was used to make the experience easier to scan and navigate.",
      color: "A structured visual system helps separate actions, states, and supporting content without overwhelming the interface.",
      components: "Reusable cards, filters, inputs, and booking-related UI patterns were designed to support scale across the platform.",
      spacing: "The experience was designed to feel guided and calm, especially for clients making multiple planning decisions."
    },
    outcome: "Gaderly was designed to reduce the stress and fragmentation that usually comes with planning events. For clients, the platform aims to shorten the path from idea to booking by replacing scattered conversations with a more structured experience. Overall, the product is designed to bring more clarity, trust, and efficiency to both sides of the marketplace.",
    accentColor: "#f43f5e",
    isMobile: true
  },
  {
    id: "social123",
    tag: "CREATOR PLATFORM",
    title: "Social123",
    description: "A creator-focused platform designed to help creators connect with fans, share exclusive content, and monetize their audience through a more structured digital experience.",
    role: "UI/UX Designer",
    timeline: "Project-Based",
    scope: "Website Design, UX, UI, Creator Experience",
    ctaText: "View Project",
    ctaLink: "#",
    prototypeLink: "#",
    problem: "For many creators, building an audience is one thing. Turning that audience into sustainable income is another. Most creators rely on scattered tools to manage subscriptions, share exclusive content, receive support, and engage their audience. The challenge was to design an experience that supports both discovery and monetization without making the platform feel cluttered or transactional.",
    approach: "The goal was to design a platform that feels valuable to both sides of the relationship: creators and fans. Rather than treating the product like a simple content feed, the experience was structured around creator visibility, fan engagement, and monetization. The platform needed to help creators present themselves clearly, showcase exclusive content, and guide fans toward deeper support through subscriptions, tips, and gated experiences.",
    keyScreens: [
      {
        title: "Creator Profile",
        description: "Designed to help creators present their content, value, and personality in a way that encourages discovery and trust.",
        imageType: "Creator Profile Experience"
      },
      {
        title: "Premium Access",
        description: "Content access was structured to clearly separate free and paid experiences.",
        imageType: "Premium Content Access Flow"
      },
      {
        title: "Monetization",
        description: "The platform supports creator earnings through subscriptions, tips, and VIP content.",
        imageType: "Monetization Flow"
      }
    ],
    designSystem: {
      typography: "A strong hierarchy helps balance creator personality with structured content presentation.",
      color: "The website was designed to make browsing, viewing, and monetization flows feel clean and easy to follow.",
      components: "Reusable content cards, profile blocks, access states, and payment-related UI patterns support consistency across the experience.",
      spacing: "Special attention was given to preview states, locked content cues, and conversion moments to make the platform feel intuitive."
    },
    outcome: "The platform was designed to help creators move beyond visibility alone and create stronger earning opportunities from their audience. For creators, the experience supports clearer monetization and stronger profile presentation.",
    accentColor: "#3b82f6",
    isMobile: false
  },
  {
    id: "skillify",
    tag: "EDTECH APP",
    title: "Skillify",
    description: "A mobile learning platform designed to help users build skills through structured courses, interactive challenges, and community-driven motivation.",
    role: "UI/UX Designer",
    timeline: "Concept Project",
    scope: "Mobile App Design, UX, UI, Prototyping",
    ctaText: "Explore Case Study",
    prototypeLink: "#",
    problem: "Learning a new skill is easy to start, but hard to stay consistent with. Many learners lose momentum because most learning platforms feel passive. Lessons are often isolated, progress can feel invisible, and there is little motivation to keep going once the initial excitement fades. The challenge was to design a learning experience that feels more engaging, more motivating, and easier to stick with over time.",
    approach: "The product was designed around one idea: make learning feel active, not repetitive. Instead of focusing only on course consumption, Skillify combines structured learning with progress visibility, gamified motivation, and community interaction. To support this, the experience was built around clear course organization, challenge-based engagement, and a dashboard that makes progress more visible.",
    keyScreens: [
      {
        title: "Structured Courses",
        description: "Lessons are organized in a way that supports different learning levels and makes content easier to follow.",
        imageType: "Course Learning Screen"
      },
      {
        title: "Challenges & Streaks",
        description: "Daily and weekly challenges were introduced to encourage consistency.",
        imageType: "Gamified Engagement Flow"
      },
      {
        title: "Progress Tracking",
        description: "A dedicated dashboard helps learners see milestones and monitor performance.",
        imageType: "Progress Tracking Dashboard"
      }
    ],
    designSystem: {
      typography: "A clear type scale was used to guide attention and improve readability.",
      color: "A structured visual system helps separate actions, states, and supporting content.",
      components: "Reusable elements ensure consistency across the mobile app interface.",
      spacing: "The 8pt spacing system was used to maintain rhythm across all screens."
    },
    outcome: "Skillify was designed to make learning more engaging and easier to sustain. By combining clear course structure with motivation-driven features like streaks, challenges, and community interaction, the final prototype creates a more interactive experience for users trying to build new skills.",
    accentColor: "#10b981",
    isMobile: true
  }
];
