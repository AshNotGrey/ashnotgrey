/**
 * Navigation links for the website.
 * @type {Array<{id: number, name: string, href: string}>}
 */
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Resume',
    href: 'https://tr.ee/XKFysG99l0',
  },
];

/**
 * Client reviews for the portfolio.
 * @type {Array<{id: number, name: string, position: string, img: string, review: string}>}
 */
export const clientReviews = [
  {
    id: 1,
    name: 'Joseph Bawo',
    position: 'Entreprenuer | Crypto Enthusiast',
    img: 'assets/Joseph Bawo.png',
    review:
      'Working with Anthony was a last-minute game-changer. He is not only a brilliant developer but also a versatile professional who brings a unique blend of creativity and technical expertise. His ability to swoop in and deliver exceptional results under tight deadlines is nothing short of miraculous. Anthony once saved my project with his quick thinking and unmatched expertise, and for that, I am eternally grateful.',
  },
  {
    id: 2,
    name: 'Paschal Chidike Odinde',
    position: 'Energy | Asset Integrity | Technology at Shell',
    img: 'assets/Paschal.png',
    review:
      'Obiajulu’s work is truly top-notch. He is a gifted developer with an extraordinary eye for design, and his versatility knows no bounds. His communication skills are impeccable, and he consistently delivers beyond expectations, even for tasks outside the realm of software development. Working with him has been an absolute pleasure, and I cannot recommend him highly enough.',
  },
  {
    id: 3,
    name: 'Ebrusike Rex-David',
    position: 'UI/UX Designer | Product Designer',
    img: 'assets/Ebrusike Rex-David.jpg',
    review:
      'Anthony was pivotal in helping me scale through my product design certification. He provided a second brain when I needed it most, and his keen eye for design was invaluable. His support and guidance were instrumental in my success, and I am deeply grateful for his unwavering dedication and expertise. I highly recommend him to anyone seeking a true professional.',
  },
  {
    id: 4,
    name: 'Okoro Ihuoma Favour',
    position: 'Microbiologist | Social Media Marketer',
    img: 'assets/Okoro Ihuoma Favour.png',
    review:
      'Anthony was incredibly helpful in completing my final year project report. His versatility and expertise were evident as he applied his tech stack to ease the process, ensuring that every detail was meticulously addressed. His support was not only professional but also emotionally enriching, making a significant impact on my academic journey. I am deeply grateful for his dedication and highly recommend him to anyone in need of a true professional.',
  },
];

// todo replace with yours
/**
 * Projects to be displayed in the portfolio.
 * @type {Array<{title: string, desc: string, subdesc: string, href: string, texture: string, logo: string, logoStyle: object, spotlight: string, tags: Array<{id: number, name: string, path: string}>}>}
 */
export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

/**
 * Calculate sizes based on device type.
 * @param {boolean} isSmall - Is the device small.
 * @param {boolean} isMobile - Is the device mobile.
 * @param {boolean} isTablet - Is the device a tablet.
 * @returns {object} Sizes for different elements.
 */
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskRotation: [0.15, Math.PI, 0],
    deskScale: isSmall ? 0.018 : isMobile ? 0.02 : 0.025,
    deskPosition: isSmall ? [0.2, -2.2, -0.8] : isMobile ? [0.2, -2.2, -0.6] : [0.1, -1.6, -0.3],
    cubePosition: isSmall ? [1, -1, 1] : isMobile ? [2, -1, 1] : isTablet ? [3, -1, 1] : [3, -1, 1],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    xboxPosition: isSmall ? [2, 1, 0] : isMobile ? [2, 1, 0] : isTablet ? [3, 1, 0] : [9, 1, 0],
    ringPosition: isSmall ? [-18, 9, 0] : isMobile ? [-18, 9, 0] : isTablet ? [-18, 9, 0] : [-18, 9, 0],
    targetPosition: isSmall ? [-3, -4, -5] : isMobile ? [-4, -4, -5] : isTablet ? [-1, -4, -5] : [-6, -4, -5],
    dronePosition: isSmall ? [-3, -4, -5] : isMobile ? [-4, -4, -5] : isTablet ? [-1, -4, -5] : [-6, -4, -5],
  };
};

/**
 * Work experiences to be displayed in the portfolio.
 * @type {Array<{id: number, name: string, pos: string, duration: string, title: string, icon: string, animation: string}>}
 */
export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

// Personal information constants
export const nameBrand = 'Obiajulu Anthony';
export const nameShort = 'Anthony';
export const nameShort2 = 'Obiajulu';
export const alias = 'AshN♞tGrey';
export const heroTag = [
  'A Tech Enthusiast',
  'Building products & brands',
  'A Backend Developer',
  'Designing user-centric experiences',
  'A Frontend Developer',
  'Problem Solver',
  'A Brand Developer',
  'Empowering digital transformation',
  'An Innovator',
  'Crafting responsive websites',
  'A Creative Thinker',
  'Driving business growth',
  'Creating innovative solutions',
  'A Product Builder',
  'Solving complex problems',
  'Delivering exceptional results',
  'Transforming ideas into reality',
  'A Full Stack Developer',
  'Developing high-quality software',
  'A UI/UX Designer',
  'Building the future of tech',
  'An Entreprenuer',
  'A Freelancer'
];
export const gridSubIntro = 'Full Stack Developer & UI/UX Designer with 4+ years of experience in building responsive web applications. Skilled in React, Next.js, TypeScript, Node.js, and MongoDB. Passionate about creating intuitive user experiences and optimizing performance.';
export const techStack = 'I specialize in the MERN stack (MongoDB, Express, React, Node.js). I build dynamic web applications and websites, always expanding my skillset. Passionate about creating innovative solutions and dedicated to delivering high-quality work that exceeds client expectations.';
export const labelsData = [{ lat: 5.518690, lng: 5.737622, color: "white", size: 20, text: "You can find me here!" }];
export const remoteWork = 'I work remotely from Nigeria. I am available for remote work opportunities, and I am always looking to collaborate with other developers and designers. If you have a project you would like to discuss or if you would like to learn more about my work, please feel free to reach out to me. I would love to hear from you!';
export const bioText = 'I am Obiajulu Anthony, a Full Stack Developer and UI/UX Designer with over 4 years of experience in building responsive, high-performance web applications. My expertise spans across both frontend and backend development, with a strong proficiency in React, Next.js, TypeScript, Node.js, and MongoDB. I am passionate about creating intuitive user experiences and optimizing performance to deliver exceptional digital solutions. My skillset also includes working with the latest technologies like Bun, Remix, Shad CN, and Three.js. I thrive in collaborative environments, working closely with cross-functional teams to transform ideas into reality and drive business growth. Dedicated to continuous learning and innovation, I am always seeking new opportunities to expand my knowledge and contribute to impactful projects.';
export const contactMe = 'I love collaborating on exciting projects! Whether you\'re a developer, designer, or just have a cool idea, let\'s connect and create something amazing together. Reach out to me anytime!';
export const socials = {
  LinkedIn: 'https://www.linkedin.com/in/obiajulu-anthony/',
  Linktree: 'https://linktr.ee/ashnotgrey',
  Github: 'https://github.com/AshNotGrey',
  X: 'https://x.com/iam_ashnotgrey',
  Instagram: 'https://www.instagram.com/ash_not_grey/',
  email: 'official.de.ash@gmail.com',
  resumeURL: 'https://tr.ee/XKFysG99l0',
}
export const HakiAttribution = { text: 'Powered by HAKI', link: 'https://linktr.ee/HakiCorporation', logo: '/assets/haki.svg' };