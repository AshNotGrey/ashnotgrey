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
    href: 'https://tr.ee/9GDhl7V8PW',
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
 * @type {Array<{title: string, desc: string, subdesc: string, href: string, texture: string, logo: string, logoStyle: object, spotlight: string, tags: Array<{id: number, name: string, path: stringflip: false,
 * }>}>}
 */
export const myProjects = [
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
    href: 'https://chuck-testing.vercel.app/',
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
    href: 'https://www.doginalduppets.com/',
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
  }
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
    title: "Adapted quickly to new technologies during the NFT boom of 2021, delivering standout art and animations.",
    icon: '/assets/AshNFT.png',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Haki & Haki Labs',
    pos: 'Lead Full Stack Developer',
    duration: '2022 - Current Day',
    title: "Played a pivotal role in project lifecycles by devising innovative strategies, contributing 30% of the team's dynamic output.",
    icon: '/assets/HAKI-logo-svg.svg',
    animation: 'victory',
  },
  {
    id: 3,
    name: 'Doginal Duppets',
    pos: 'Frontend Developer',
    duration: '2024 - Contract Based',
    title: "Engineered the project in under 24 man-hours, enabling an immediate and successful launch.",
    icon: '/assets/Duppet.png',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Chuck',
    pos: 'Frontend Developer',
    duration: '2024 - Contract Based',
    title: "Developed the project in less than 24 man-hours and identified a key compatibility skew in the Uniswap widget API, ensuring a timely launch.",
    icon: '/assets/Chuck.png',
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
  'A Problem Solver',
  'I am HIM',
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
export const labelsData = [{ lat: 5.518690, lng: 5.737622, color: "white", size: 30, text: "You can find me here!" }];
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
export const HakiAttribution = { text: 'Powered by', link: 'https://linktr.ee/HakiCorporation', logo: '/assets/HAKI-logo-svg.svg' };