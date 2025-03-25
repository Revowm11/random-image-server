const http = require('http');

// Array of direct image URLs from your PostImage gallery
const imageUrls = [
    "https://i.postimg.cc/vB5C68tC/575067.jpg",
"https://i.postimg.cc/wTMFCTsH/Ahri-Esp-ritu-Legendario.jpg",
"https://i.postimg.cc/JhVqHNY4/Amazing-anime-gamer-girl-in-blue-neon-lights-playing-computer.jpg",
"https://i.postimg.cc/k4Nhg1nm/Awesome-Anime.png",
"https://i.postimg.cc/cLVDMyCW/BMW.jpg",
"https://i.postimg.cc/1zwvvCVq/empty-street-dark-atmosphere.jpg",
"https://i.postimg.cc/J0mv3wT0/Fn-Hly-J8ac-AEeqq-H.jpg",
"https://i.postimg.cc/85wBYqpj/Gamer.jpg",
"https://i.postimg.cc/4xhP3L5S/Girl-illustration-art-design.jpg",
"https://i.postimg.cc/KjJqn1kp/Hazure-Waku-no-Joutai-Ijou-Skill-de-Saikyou-ni-Natta-Ore-ga-Subete-wo-Juurin-Suru-made-Novel-Cover.jpg",
"https://i.postimg.cc/BQmkFV2Z/Hero.png",
"https://i.postimg.cc/jdxBLbwk/japan-background-digital-art.jpg",
"https://i.postimg.cc/d1SZrvQm/Lesley-1.webp",
"https://i.postimg.cc/90rTn0gn/Lesley-10.jpg",
"https://i.postimg.cc/26jnn2Qm/Lesley-11.jpg",
"https://i.postimg.cc/MTsV5V5B/Lesley-12.jpg",
"https://i.postimg.cc/7LngCpTm/Lesley-13.png",
"https://i.postimg.cc/8CSRz1s7/Lesley-14.jpg",
"https://i.postimg.cc/mgM34cZx/Lesley-15.jpg",
"https://i.postimg.cc/CL9C9CgH/Lesley-16.jpg",
"https://i.postimg.cc/xjx33DpZ/Lesley-17.jpg",
"https://i.postimg.cc/6q3LxYqz/Lesley-18.jpg",
"https://i.postimg.cc/3Ncj8mDh/Lesley-19.jpg",
"https://i.postimg.cc/d10ThDFV/Lesley-2.jpg",
"https://i.postimg.cc/CKG4GR9C/Lesley-20.jpg",
"https://i.postimg.cc/WbySTLMZ/Lesley-21.jpg",
"https://i.postimg.cc/nV00SQr0/Lesley-22.jpg",
"https://i.postimg.cc/Kjqf1Cwd/Lesley-23.jpg",
"https://i.postimg.cc/wMTFT9fX/Lesley-24.jpg",
"https://i.postimg.cc/0QCcszf5/Lesley-25.png",
"https://i.postimg.cc/B63MkT2w/Lesley-26.png",
"https://i.postimg.cc/6p7jv59z/Lesley-27.webp",
"https://i.postimg.cc/kXgh7vz0/Lesley-28.jpg",
"https://i.postimg.cc/J7q2w263/Lesley-29.png",
"https://i.postimg.cc/yNjZ6cwG/Lesley-3.jpg",
"https://i.postimg.cc/Bbq7LT61/Lesley-30.jpg",
"https://i.postimg.cc/Jhf9nHZb/Lesley-32.jpg",
"https://i.postimg.cc/52khhRtK/Lesley-33.jpg",
"https://i.postimg.cc/cLQ3jVT0/Lesley-4.jpg",
"https://i.postimg.cc/k5qSdfh8/Lesley-5.png",
"https://i.postimg.cc/bNSk0GtG/Lesley-6.jpg",
"https://i.postimg.cc/g29RgYVg/Lesley-7.jpg",
"https://i.postimg.cc/44Sphvmk/Lesley-8.jpg",
"https://i.postimg.cc/hv6xWnHP/Lesley-9.jpg",
"https://i.postimg.cc/hGzkc1zD/Lesley-cheergunner.jpg",
"https://i.postimg.cc/50fSnxMh/Lesley-Mlbb.jpg",
"https://i.postimg.cc/tTGMyQGk/new-skin-mlbb-lesley-fatcat-render-png-by-wolvesdzn-ditov4w.png",
"https://i.postimg.cc/FsCCzJQ7/peakpx.jpg",
"https://i.postimg.cc/brTM36MT/Red-spider-lily-Japanese-poem-Laptop-Wallpaper.jpg",
"https://i.postimg.cc/8z3YKfyq/riccardo-trimeloni-lc5i-IZ7-UO1w-unsplash-1.jpgv",
"https://i.postimg.cc/hPXbCyHt/SAO.jpg",
"https://i.postimg.cc/3wvcPrVW/Seras-Ashrain.png",
"https://i.postimg.cc/0yr300CY/Villain.png",
"https://i.postimg.cc/66LDW33v/wp3451046-wallpapers-hd-purple.jpg"

    // Add more URLs here
];

// Function to get a random image URL
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Create a server that outputs a random image URL
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const randomImage = getRandomImageUrl();
    res.end(randomImage);
});

// Listen on a port (default 3000 for local testing)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});