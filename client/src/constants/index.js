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
    href: 'https://drive.google.com/file/d/1IXUqEZVL2ifM5Vz1YRMHeU4TkDtTomxw/view?usp=sharing',
  },
  {
    id: 6,
    name: 'Linktree',
    href: 'https://linktr.ee/ashnotgrey',
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

/**
 * Projects to be displayed in the portfolio.
 * @type {Array<{title: string, desc: string, subdesc: string, href: string, texture: string, logo: string, logoStyle: object, spotlight: string, tags: Array<{id: number, name: string, path: stringflip: false,
 * }>}>}
 */
export const myProjects = [
  {
    title: 'iHealth and Wellness Foundation, Inc',
    desc: "iHealth and Wellness Foundation, Inc. is a New York based nonprofit launched in May 2023 that’s all about improving the lives of people dealing with complex diseases—especially conditions like Neurofibromatosis Type 1 (NF1). They’re building a digital platform that connects patients with specialized providers, offers medical and wellness networking, and includes personalized advocacy support. A big part of their mission is integrating with electronic health records (EHRs) to ensure provider data stays current and accurate.",

    subdesc: "At iHealth and Wellness Foundation Inc, we believe that managing complex conditions should be simpler for everyone.",
    href: 'https://www.ihealthwellness.org/',
    purchaseLink: false,
    texture: 'textures/project/IHealth.mp4',
    logo: '/assets/iHEALTH-logo.png',
    logoStyle: {
      backgroundColor: '#FFFFFF',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 60px 0px #FFFFFF',
    },
    spotlight: '/assets/White-Iphone.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Iphone 15 pro (Haki Edition)',
    desc: "Leveraging the latest technologies, the iPhone 15 Pro landing page showcases the device's cutting-edge features and design elements. The Haki Edition adds a touch of luxury and exclusivity, setting it apart from other devices on the market.",

    subdesc: "The Haki Edition (surreal) is a limited-edition release that combines the iconic iPhone design with premium materials and finishes. The landing page highlights the device's unique features, including the Haki logo, custom color options, and exclusive accessories.",
    href: 'https://iphone-main.vercel.app/',
    purchaseLink: false,
    texture: '/textures/project/Iphone 15 pro.mp4',
    logo: '/assets/Apple.svg',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 60px 0px #FFFFFF',
    },
    spotlight: '/assets/White-Iphone.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'Gsap',
        path: '/assets/Gsap.svg',
      },
      {
        id: 4,
        name: 'Three JS',
        path: '/assets/ThreeJS.svg',
      },
      {
        id: 5,
        name: 'Blender',
        path: '/assets/Blender.svg',
      },
      {
        id: 6,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Chuck',
    desc: "CHUCK is a dog-themed meme coin celebrating the bond between iconic figures and their dogs. Stealth-launched for decentralization, it’s a deflationary token with burn campaigns, exclusive community perks, and access to NFTs, games, and a market insights bot.",

    subdesc: "Built on Base, CHUCK leverages smart contracts for automated burns, community rewards, and secure transactions. It integrates Telegram bots for market data and supports NFT utilities within its ecosystem.",
    href: 'https://chuck-pi.vercel.app/',
    purchaseLink: false,
    texture: '/textures/project/Chuck.mp4',
    logo: '/assets/Chuck.png',
    logoStyle: {
      backgroundColor: '#FEE59C',
      border: '0.2px solid #6B4F1D',
      boxShadow: '0px 0px 60px 0px #FFD7004D',
    },
    spotlight: '/assets/Yellow_Chuck.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstap',
        path: '/assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'Uniswap',
        path: '/assets/Uniswap.png',
      },
    ],
  },
  {
    title: 'Doginal Duppets',
    desc: "Doginal Duppets is an innovative project within the Dogecoin ecosystem, blending the charm of handcrafted puppets with the security and permanence of blockchain technology. Inspired by the esoteric and absurd, our collection of puppets is unlike anything you've ever seen before. Each duppet is meticulously created with basic tools, loads of effort, and boundless passion.",

    subdesc: "Built to match the clients exact description and requirements,playing a major role in the marketing of the NFT collection, featured on their main X (then Twitter) page.",
    href: 'https://x.com/DoginalDuppets',
    purchaseLink: false,
    texture: '/textures/project/Duppets.mp4',
    logo: '/assets/Duppet.png',
    logoStyle: {
      backgroundColor: '#E8D5B4',
      border: '0.2px solid #6B4F1D',
      boxShadow: '0px 0px 60px 0px #FFD7004D',
    },
    spotlight: '/assets/Yellow_Chuck.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Bootstap',
        path: '/assets/bootstrap.png',
      }
    ],
  },
  {
    title: 'Bingo Book',
    desc: "Bingo Book is a web application that allows users to create and share bingo boards. Users can create boards with custom titles and categories, and add items to each category. Boards can be shared with a unique URL, and users can mark items as completed",

    subdesc: "An experimental project created to learn more about React, Redux, and Figma amongst other things. I also wanted to learn more about how to create a web application that allows users to share data with each other.",
    href: 'https://www.figma.com/proto/eTI0VW2Psuezc64MJHjSv7?node-id=0-1&t=hFE981BXA64zstdZ-6',
    purchaseLink: false,
    texture: '/textures/project/Bingo-book.mp4',
    logo: '/assets/Bingo-book.png',
    logoStyle: {
      backgroundColor: '#1E1E1E',
      border: '0.2px solid #1E1E1E',
      boxShadow: '0px 0px 60px 0px #1EFF1E',
    },
    spotlight: '/assets/spotlight3.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'African Prodigies',
    desc: "The African Prodigies by Obiajulu Anthony, is a celebration to all iconic Africans who through their hard work have put their nation and brands on the map. Each art work here is inspired by a particular figure therefore making each peculiar, some are a blend of traits from different prodigies even, all just to make sure that each NFT can be even if not totally but related with the prodigy of which it was inspired by.",

    subdesc: "The collection is to pass a message of hope to upcoming stars and to further burn into the hearts of all the greatness of the African giants. Leveraging technologies like Blender, Figma , and ethereum blockchain, the collection is a blend of art and technology.",
    href: 'https://opensea.io/collection/africanprodigies',
    purchaseLink: false,
    texture: '/textures/project/African-Prodigies.mp4',
    logo: '/assets/AshNFT.png',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 60px 0px #FFD7004D',
    },
    spotlight: '/assets/Yellow_Chuck.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      {
        id: 2,
        name: 'Blender',
        path: '/assets/Blender.svg',
      },
      {
        id: 3,
        name: 'Opensea',
        path: '/assets/opensea.png',
      },
      {
        id: 4,
        name: 'Ethereum',
        path: '/assets/Ethereum.svg',
      },
    ],
  },
  {
    title: '3D Portfolio',
    desc: "What better way to showcase your work than in a 3D portfolio? This interactive experience allows users to explore your projects in a unique and engaging way. Each project is displayed on the screen of a 3D monitor, giving users a realistic view of your work.",

    subdesc: "Built using React, Three.js, and TailwindCSS, this 3D portfolio is a fun and interactive way to showcase your projects. Users can click on each project to learn more and even interact with the 3D models. It's a creative and innovative way to present your work to potential clients and employers.",
    href: 'https://ashnotgrey.vercel.app/',
    purchaseLink: false,
    texture: '/textures/project/3D-portfolio.mp4',
    logo: '/assets/Brand-logo-unframed-light.svg',
    logoStyle: {
      backgroundColor: '#000000',
      border: '0.2px solid #000000',
      boxShadow: '0px 0px 60px 0px #FFFFFF',
    },
    spotlight: '/assets/White-Iphone.png',
    flip: false,
    tags: [
      {
        id: 1,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
      {
        id: 2,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 3,
        name: 'Gsap',
        path: '/assets/Gsap.svg',
      },
      {
        id: 4,
        name: 'Three JS',
        path: '/assets/ThreeJS.svg',
      },
      {
        id: 5,
        name: 'Blender',
        path: '/assets/Blender.svg',
      },
      {
        id: 6,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
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
    deskPosition: isSmall ? [0.2, -1, -1] : isMobile ? [0.2, -1, -1] : [0.1, -0.7, -0.3],
    ringPosition: isSmall ? [-18, 9, 0] : isMobile ? [-18, 9, 0] : isTablet ? [-18, 9, 0] : [-18, 9, 0],
    headphonePosition: isSmall ? [0, 0, 0] : isMobile ? [0, 0, 0] : isTablet ? [-2.85, 3, -2] : [-5, -2, -2],
    dronePosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [3, 2.5, -2] : [4, 1, 0],
    IphonePosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [3, 2.5, -2] : [3, -2, 0],
  };
};

/**
 * Work experiences to be displayed in the portfolio.
 * @type {Array<{id: number, name: string, pos: string, duration: string, title: string, icon: string, animation: string}>}
 */
export const workExperiences = [
  {
    id: 1,
    name: 'African Prodigies',
    pos: 'NFT Artist & 2D Animator',
    duration: '2021 - 2022',
    title:
      'Delivered standout NFT art and animations during the 2021 boom, quickly adapting to new technologies and on-chain creative workflows.',
    icon: '/assets/AshNFT.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Doginal Duppets',
    pos: 'Frontend Developer',
    duration: '2024 - Contract Based',
    title:
      'Engineered and deployed the project within 24 man-hours, ensuring a seamless and successful public launch on Doginals.',
    icon: '/assets/Duppet.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Chuck',
    pos: 'Frontend Developer',
    duration: '2024 - Contract Based',
    title:
      'Developed and optimized the frontend in under 24 hours, identifying and resolving a critical Uniswap widget compatibility issue pre-launch.',
    icon: '/assets/Chuck.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Haki & Haki Labs',
    pos: 'Full Stack Developer',
    duration: '2022 - 2025 (Paused)',
    title:
      'Contributed across multiple projects under the Haki ecosystem, designing scalable UIs and backend systems. Spearheaded architectural decisions and boosted team output by 30%.',
    icon: '/assets/HAKI-logo-svg.svg',
    animation: 'victory',
  },
  {
    id: 5,
    name: 'iHealth and Wellness Foundation, Inc',
    pos: 'Backend Developer',
    duration: '2025 - 2025',
    title:
      "Led backend development for the organization's eCommerce platform, aligning technical architecture with brand ethics and accessibility standards.",
    icon: '/assets/iHEALTH-logo.png',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'IDEAS MEDIA COMPANY',
    pos: 'Full Stack Developer',
    duration: '2025 - 2025',
    title:
      "Built and deployed the company's PWA for photography rentals, bookings, and event services. Engineered an admin dashboard with React and Tailwind for analytics and content management.",
    icon: '/assets/ideasmediacompany.png',
    animation: 'clapping',
  },
  {
    id: 7,
    name: 'Everytravell',
    pos: 'Backend Developer',
    duration: '2025 - 2025 (Contract Based)',
    title:
      'Developed and maintained backend services for hotel and travel booking workflows. Integrated location-based search and multi-organization pricing logic.',
    icon: '/assets/Everytravell.png',
    animation: 'victory',
  },
  {
    id: 8,
    name: 'Turing',
    pos: 'AI Trainer',
    duration: '2025 - Current Day (Contract Based)',
    title:
      'Trained and validated large language models through complex data annotation, reasoning evaluation, and prompt optimization. Supported ASI research and proprietary model development.',
    icon: '/assets/Turing.png',
    animation: 'salute',
  },
];


// Personal information constants
export const nameBrand = 'Obiajulu Anthony';
export const nameShort = 'Anthony';
export const nameShort2 = 'Obiajulu';
export const alias = 'AshN♞tGrey';
export const heroTag = [
  'A Full Stack Developer',
  'A Backend Developer',
  'A Frontend Developer',
  'A Solidity Developer',
  'An AI Trainer',
  'An LLM Specialist',
  'An NFT Artist',
  'A Prompt Engineer',
  'A Web3 Builder',
  'A Creative Technologist',
  'A Product Builder',
  'A Problem Solver',
  'An Innovator',
  'A Tech Visionary',
  'A Digital Creator',
  'A Brand Architect',
  'Building Scalable Web Apps',
  'Crafting User-Centric Experiences',
  'Developing High-Quality Software',
  'Designing Future-Proof Systems',
  'Building Products That Matter',
  'Turning Ideas Into Reality',
  'Empowering Digital Transformation',
  'Bridging Web2, Web3 & AI',
  'Engineering The Future of Tech',
  'Delivering Impact-Driven Solutions',
  'Transforming Complexity Into Simplicity',
  'Driving Innovation Through Code',
  'Building The Next Generation of Experiences',
  'Freelancing Across The Globe',
  'Collaborating With Visionary Teams',
  'Creating Human-Centered Technology'
];

export const yearsOfExperience = new Date().getFullYear() - 2021;

export const gridSubIntro = `Full Stack Web & Solidity Developer with ${yearsOfExperience}+ years of hands-on experience building scalable, high-performance web applications and smart contracts. Skilled across modern frameworks like React, Next.js, and Node.js—bringing clean code, performance, and innovation to every build.`;

export const techStack = `I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Solidity, but my toolkit extends to TypeScript, GraphQL, Bun, Remix, ShadCN/UI, and Three.js. I thrive at the intersection of Web2, Web3, and AI—engineering everything from interactive UIs to secure blockchain integrations. Obsessed with clean architecture, speed, and leveraging AI workflows for smarter, data-driven development.`;

export const bioText = `I'm Obiajulu Anthony — a Full Stack Developer, Solidity Engineer, Prompt Engineer, and AI Trainer with ${yearsOfExperience}+ years of experience crafting responsive, user-centered digital solutions. I’ve worked across diverse tech stacks to build seamless experiences, automate complex workflows, and integrate advanced AI systems. Whether it’s designing fluid frontends, engineering scalable backends, or deploying decentralized apps, I approach every project with precision, creativity, and a growth mindset. I thrive in cross-functional collaborations, turning ambitious ideas into reality and bridging Web2, Web3, and AI technologies.`;

export const remoteWork = `I'm available for remote, hybrid, and on-site opportunities worldwide. I’m always open to collaborating with developers, designers, and innovators who share a passion for building meaningful digital products. If you’ve got a project or an idea worth exploring, let’s make it happen.`;

export const contactMe = `Let’s build something extraordinary together! Whether you’re a developer, designer, or visionary with an idea waiting to take shape—reach out anytime, and let’s turn it into reality.`;

export const labelsData = [{ lat: 5.518690, lng: 5.737622, color: "white", size: 30, text: "You can find me here!" }];
export const socials = {
  LinkedIn: 'https://www.linkedin.com/in/obiajulu-anthony/',
  Linktree: 'https://linktr.ee/ashnotgrey',
  Github: 'https://github.com/AshNotGrey',
  X: 'https://x.com/iam_ashnotgrey',
  Instagram: 'https://www.instagram.com/ash_not_grey/',
  email: 'official.de.ash@gmail.com',
  resumeURL: 'https://tr.ee/XKFysG99l0',
  resumeURLGoogleDrive: 'https://drive.google.com/file/d/1IXUqEZVL2ifM5Vz1YRMHeU4TkDtTomxw/view?usp=sharing',
}
export const HakiAttribution = { text: 'Powered by', link: 'https://linktr.ee/HakiCorporation', logo: '/assets/HAKI-logo-svg.svg' };