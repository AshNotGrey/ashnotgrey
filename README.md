# 3D Portfolio

Welcome to my 3D Portfolio! This project showcases my skills and projects using a modern web development stack, including React, Three.js, and TailwindCSS. The portfolio is designed to be visually appealing and interactive, providing a unique experience for visitors.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live demo of the portfolio [here](https://ashnotgrey.vercel.app/).

## Features

- **3D Models and Animations**: Interactive 3D models and animations using Three.js.
- **Responsive Design**: Fully responsive design that works on all devices.
- **Dynamic Content**: Projects and testimonials are dynamically loaded from a constants file.
- **Smooth Animations**: Smooth animations and transitions using GSAP.
- **Contact Form**: Functional contact form powered by EmailJS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Three.js**: JavaScript library for creating 3D graphics.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **GSAP**: JavaScript library for creating animations.
- **EmailJS**: Service for sending emails directly from the client-side.
- **Vite**: Next-generation frontend tooling for fast development.

## Installation

To get a local copy up and running, follow these steps, of course do change to your actualname or some other name:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ashnotgrey.git
   ```

2. Navigate to the project directory:
   ```sh
   cd ashnotgrey/client
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

   This will start the Vite development server and you can view the project at [http://localhost:5173](http://localhost:5173).

To build the project for production, run:
```sh
npm run build
```

This will create an optimized build in the `dist` directory.

## Project Structure

```
client/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public/
│   ├── assets/
│   ├── Favicons/
│   ├── models/
│   └── textures/
├── README.md
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── constants/
│   ├── index.css
│   ├── main.jsx
│   ├── sections/
│   └── tailwind.config.js
├── vercel.json
└── vite.config.js
```

- `src/components`: Contains reusable React components.
- `src/constants`: Contains constant data such as project details and testimonials.
- `src/sections`: Contains different sections of the portfolio like Hero, About, Projects, etc.
- `public/assets`: Contains images and other static assets.
- `public/models`: Contains 3D models used in the project.
- `public/textures`: Contains textures used in the 3D models.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Obiajulu Anthony - [LinkedIn](https://www.linkedin.com/in/obiajulu-anthony/) - [GitHub](https://github.com/AshNotGrey)

Project Link: [https://github.com/AshNotGrey/ashnotgrey](https://github.com/AshNotGrey/ashnotgrey)
