export const personalInfo = {
  name: "Darshan",
  fullName: "Belani Darshan A",
  title: "SR. Laravel / Node.js Developer",
  tagline: "Building scalable web applications with Laravel, Node.js, Next.js & React.js",
  email: "darshan.belani9@hotmail.com",
  // phone: "8264456781",
  location: "Ahmedabad, Gujarat, India",
  linkedin: "https://linkedin.com/in/darshan-belani",
  github: "https://github.com/darshan-belani",
  availableForWork: true,
  bio: "Passionate Full Stack Developer with 7+ years of experience building scalable web and mobile backend applications. Specialize in Laravel & Node.js for robust APIs and Next.js/React for modern frontends. Worked across food-tech, sports, real estate, healthcare, and more.",
};

export const skills = {
  frontend: [
    { name: "HTML5 / CSS3", level: 90, icon: "🎨" },
    { name: "JavaScript / jQuery", level: 88, icon: "🟡" },
    { name: "Next.js", level: 70, icon: "▲" },
    { name: "React.js", level: 70, icon: "⚛️" },
  ],
  backend: [
    { name: "Laravel (PHP)", level: 90, icon: "🔴" },
    { name: "Node.js", level: 70, icon: "🟢" },
    { name: "PHP", level: 90, icon: "🐘" },
    { name: "MySQL", level: 80, icon: "🗃️" },
    { name: "REST API", level: 80, icon: "🔗" },
    { name: "Microservices", level: 60, icon: "⚡" },
  ],
  tools: [
    { name: "AWS EC2", icon: "☁️" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "Payment Integration", icon: "💳" },
    { name: "Twilio", icon: "📱" },
    { name: "Socket.io", icon: "🔌" },
    { name: "Admin Panels", icon: "🖥️" },
    { name: "Digital Arts", icon: "🎨" },
  ],
};

export const experiences = [
  {
    company: "Inheritx Solutions",
    role: "SR. Laravel / Node.js Developer",
    duration: "Apr 2024 – Present",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: [
      "Led development of GoMeal — an online food ordering platform with restaurant management, real-time delivery notifications, zip-code-based address, discount codes, and ingredient customization.",
      "Built Rugby Planner mobile app APIs featuring team plans, training sessions, session drills, and a subscription model with team-limit management.",
      "Developed Inspire IDP (Node.js) — a game-based app with player/coach roles, skill tracking, ability rating, deadline setting, and real-time one-to-one chat.",
      "Built Venuorama (Node.js, Next.js) — a venue booking platform where owners list venues with facilities/pricing and admins review/approve listings.",
    ],
    technologies: ["Laravel", "Node.js", "Next.js", "MySQL", "Twilio", "Socket.io"],
  },
  {
    company: "The Intellify",
    role: "SR. Laravel Developer",
    duration: "Sep 2023 – Mar 2024",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: [
      "Worked as a Senior Laravel Developer delivering backend solutions for client projects.",
      "Developed and maintained RESTful APIs for web and mobile applications.",
      "Collaborated with cross-functional teams to design and implement scalable Laravel architectures.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST API"],
  },
  {
    company: "MultiQoS Technology Pvt. Ltd.",
    role: "Laravel / Node.js Developer",
    duration: "Jul 2021 – Aug 2023",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: [
      "Built GameDay Guide — Android/iOS app for finding friends, chatting, booking travel packages, and sports news, using Laravel APIs, payment gateway, and admin panel.",
      "Developed Polished — iOS nail-polish social app (likes, comments, follow) with Laravel APIs and admin panel.",
      "Built IRINA (Node.js microservices) — web/iOS app with exam/result tracking and employee management.",
    ],
    technologies: ["Laravel", "Node.js", "PHP", "MySQL", "Payment Gateway"],
  },
  {
    company: "NCI InfoTech Pvt. Ltd.",
    role: "Laravel Developer",
    duration: "Apr 2020 – May 2021",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: [
      "Built NCI Admin Panel — employee record management with attendance tracking, performance reviews, project assignments, and role-based access control.",
      "Developed Riddhi App — a cleaning service booking and customer request management application.",
      "Built Istriman — Android laundry app (ironing, washing, dry cleaning) with Laravel APIs and admin panel.",
      "Developed an Accounting web app for stocks, products, customers, GST calculations, and PDF invoice generation.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "REST API", "Admin Panel"],
  },
  {
    company: "ViitorCloud Technologies Pvt. Ltd.",
    role: "Laravel Developer",
    duration: "Jan 2019 – Mar 2020",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: [
      "Developed Wazir — a project management tool with employee in/out time tracking, leave management, task tracking, and data visualization charts.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Charts"],
  },
  {
    company: "True Digital Solutions",
    role: "Web Designer",
    duration: "6 Months (Early Career)",
    location: "India",
    type: "Full-time",
    description: [
      "Designed and developed web interfaces for client projects.",
      "Gained foundational skills in web design and digital arts.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Digital Arts"],
  },
];

export const projects = [
  {
    title: "GoMeal — Food Ordering Platform",
    description:
      "Full-featured online food ordering platform with restaurant management, real-time delivery notifications, address by zip code, discount codes, and ingredient customization.",
    longDescription:
      "Built the complete backend for GoMeal using Laravel. Features include restaurant management (dishes, ingredients, real-time notifications, delivery assignment) and rich customer features (zip-code-based address, pickup/delivery choice, discount codes, ingredient customization).",
    technologies: ["Laravel", "Mysql", "RESTful API", "Stripe Payment Gateway", "Realtime Notification", "socket.io", "Tailwind CSS", "Admin Panel"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Food-Tech", stack: "Laravel", role: "SR Dev" },
  },
  {
    title: "Rugby Planner — Sports App",
    description:
      "Mobile application APIs for a rugby team management platform with team plans, training sessions, session drills, and a subscription model for team limits.",
    longDescription:
      "Developed all mobile APIs for Rugby Planner. Admins manage subscription plans and team limits; coaches create training sessions with drills; users can invite and share teams.",
    technologies: ["Laravel", "MySQL", "REST API", "Web Application", "Subscription Model", "Stripe Payment Gateway"],
    github: "#",
    live: "#",
    category: "Backend",
    stats: { type: "Sports-Tech", stack: "Laravel", role: "SR Dev" },
  },
  {
    title: "Inspire IDP — Game-Based Learning",
    description:
      "Game-based app with player and coach roles, featuring skill tracking, ability rating, deadline setting, inspirational quotes management, and real-time one-to-one chat.",
    longDescription:
      "Built in Node.js, Inspire IDP is a game-based learning platform with player and coach roles. Features include skill tracking, ability rating, deadline setting, inspirational quotes management, and real-time one-to-one chat using Socket.io.",
    technologies: ["Node.js", "Socket.io", "MongoDB", "Real-time Chat", "admin panel next.js", "web application", "Api integration"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "EdTech", stack: "Node+Next", role: "SR Dev" },
  },
  {
    title: "Venuorama — Venue Booking",
    description:
      "Venue booking platform where owners list venues with facilities and pricing; admins review and approve/reject listings.",
    longDescription:
      "Built with Node.js and Next.js. Venue owners can list their spaces with full facility details and pricing tiers. Admins review all listings and approve or reject them before they go live.",
    technologies: ["Node.js", "Next.js", "MongoDB", "RESTful API", "Admin Panel Next.Js", "Api integration"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Real Estate", stack: "Node+Next", role: "SR Dev" },
  },
  {
    title: "Polished — Nail Polish Social App",
    description: "iOS application for nail-polish enthusiasts to share pictures, like, comment, and follow others.",
    longDescription: "A social platform for nail-polish lovers. Users can post pictures of their nail art, interact through likes and comments, and follow/unfollow other enthusiasts. Powered by a Laravel API and an Admin Panel.",
    technologies: ["Laravel", "iOS", "REST API", "Admin Panel", "Social Media"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Social", stack: "Laravel+iOS", role: "Lead Dev" },
  },
  {
    title: "IRINA — Examination & Management Tool",
    description: "Web/iOS application using Node.js microservices for examinations, result tracking, and employee management.",
    longDescription: "A robust platform built with Node.js microservices. It allows users to take exams and view results instantly. It also doubles as a comprehensive employee management tool.",
    technologies: ["Node.js", "Microservices", "REST API", "Employee Management", "Examination System"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "EdTech", stack: "Node.js", role: "Lead Dev" },
  },
  {
    title: "GameDay Guide — Sports Social App",
    description:
      "Android/iOS app for finding friends, chatting, booking travel packages, and sports news, with full payment gateway integration and admin panel.",
    longDescription:
      "Full backend for GameDay Guide built in Laravel. Includes friend discovery, real-time chat, travel package booking, sports news feeds, payment gateway integration, and a feature-rich admin panel.",
    technologies: ["Laravel", "Mysql", "Payment Gateway", "RESTful API", "Admin Panel"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Sports", stack: "Laravel", role: "Lead Dev" },
  },
  {
    title: "Istriman — Laundry App",
    description: "Android laundry app providing ironing, washing, and dry cleaning services delivered to your doorstep.",
    longDescription: "A hassle-free way of getting laundry services like ironing clothes, washing clothes, and dry cleaning delivered to your doorstep. Built with a Laravel-based API and a comprehensive Admin Panel.",
    technologies: ["Laravel", "Android", "REST API", "Admin Panel", "MySQL"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Service", stack: "Laravel+Android", role: "Developer" },
  },
  {
    title: "Accounting — Management System",
    description: "Web application for managing stocks, products, and customers, with GST calculation and PDF invoice generation.",
    longDescription: "A complete accounting solution built on the Laravel framework. It manages stocks, products, and customers efficiently. Key features include automatic GST calculations and the ability to generate and export professional invoices as PDFs.",
    technologies: ["Laravel", "MySQL", "PDF Generation", "GST Calculation", "Web Application"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "FinTech", stack: "Laravel", role: "Developer" },
  },
  {
    title: "Wazir — Project Management Tool",
    description:
      "Project management tool with employee in/out time tracking, leave management, task tracking, and data visualization charts.",
    longDescription:
      "Developed Wazir using Laravel — a comprehensive project management system with employee time tracking (in/out), leave management workflows, task assignment and tracking, and beautiful data visualization charts.",
    technologies: ["Laravel", "PHP", "MySQL", "Charts", "Admin Panel"],
    github: "#",
    live: "#",
    category: "Full Stack",
    stats: { type: "Css", stack: "Laravel", role: "Developer" },
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Saurashtra University",
    duration: "2018",
    grade: "Graduate",
    description: "Studied core computer science subjects including programming, databases, web development, and software engineering.",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Gujarat Board",
    duration: "2015",
    grade: "Passed",
    description: "Completed higher secondary education from Gujarat Board.",
  },
  {
    degree: "Diploma in Digital Arts",
    institution: "C-DAC",
    duration: "2014",
    grade: "Diploma",
    description: "Diploma in Digital Arts covering graphic design and digital media.",
  },
];

export const certifications = [
  {
    name: "Prefect in PHP",
    issuer: "TOPS Technologies",
    year: "2018",
    icon: "🐘",
  },
  {
    name: "PHP Laravel Seminar",
    issuer: "TOPS Technologies",
    year: "2018",
    icon: "🔴",
  },
];

export const stats = [
  { label: "Years Experience", value: "7+", icon: "🚀" },
  { label: "Companies Worked", value: "5+", icon: "🏢" },
  { label: "Projects Delivered", value: "20+", icon: "✅" },
  { label: "Technologies", value: "4+", icon: "⚡" },
];
