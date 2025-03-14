const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    "/Favicons/Brand-logo-unframed-light.svg",
    "/assets/Brand-logo-unframed-light.svg",
    "/Favicons/Brand-logo-light.png",
    "/Favicons/Brand-logo-dark.png",
    "/screenshots/screenshot1.png",
    "/screenshots/screenshot2.png",
    "/assets/Apple.svg",
    // Additional files and assets
    "/models/Developer.glb",
    "/models/DeveloperFBX.fbx",
    "/models/hacker-room.glb",
    "/models/Projects monitor.glb",
    "/models/model.gltf",
    "/models/cube.glb",
    "/models/react_logo.glb",
    "textures/desk/monitor.png",
    "/textures/project/Iphone 15 pro.mp4",
    "/textures/project/3D-portfolio.mp4",
    "/textures/project/Chuck.mp4",
    "/textures/project/Duppets.mp4",
    '/textures/project/Bingo-book.mp4',
    "textures/desk/screen.png",
    '/textures/project/African-Prodigies.mp4',
    "/models/animations/idle.fbx",
    "/models/animations/salute.fbx",
    "/models/animations/clapping.fbx",
    "/models/animations/victory.fbx",
    '/assets/Bingo-book.png',
    "/assets/Chuck.png",
    '/assets/AshNFT.png',
    '/assets/HAKI-logo-svg.svg',
    "/assets/Duppet.jpg",
    "/scripts/three.min.js",
    "/scripts/app.js",
    "/styles/main.css",
    "/styles/theme.css"
];

// Install event - Caches files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Caching files...");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event - Serves cached files when offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activate event - Clears old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
