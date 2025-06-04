// Questions for each mode
const quirkyQuestions = [
    "Never have I ever forgotten my partner's birthday.",
    "Never have I ever pretended to like a gift from my partner when I actually hated it.",
    "Never have I ever stalked my partner's ex on social media.",
    "Never have I ever sent a text meant for someone else to my partner.",
    "Never have I ever used my partner's toothbrush without telling them.",
    "Never have I ever lied about being busy to avoid a date night.",
    "Never have I ever secretly checked my partner's phone.",
    "Never have I ever pretended to be asleep to avoid talking to my partner.",
    "Never have I ever forgotten an important anniversary.",
    "Never have I ever had a crush on my partner's friend.",
    "Never have I ever kept a secret from my partner for more than a month.",
    "Never have I ever faked interest in my partner's hobby just to make them happy.",
    "Never have I ever accidentally called my partner by the wrong name.",
    "Never have I ever eaten my partner's favorite snack that they were saving.",
    "Never have I ever lied about how many people I've dated before.",
    "Never have I ever pretended to enjoy a movie my partner picked.",
    "Never have I ever hidden purchases from my partner.",
    "Never have I ever forgotten something important my partner told me.",
    "Never have I ever been embarrassed to introduce my partner to certain friends or family.",
    "Never have I ever planned a surprise for my partner that completely backfired.",
    "Never have I ever pretended to know something my partner was talking about when I had no clue.",
    "Never have I ever accidentally insulted my partner's cooking.",
    "Never have I ever fallen asleep during a conversation with my partner.",
    "Never have I ever kept wearing clothes my partner hates just because I like them.",
    "Never have I ever blamed my partner for something I actually did.",
     // New quirky questions from NHIE - Questions.txt
     "Never have I ever tried to secretly smell your clothes.",
     "Never have I ever pretended to be asleep to avoid cuddling.",
     "Never have I ever made a playlist and imagined us in a music video.",
     "Never have I ever snooped on your phone just to see cute photos of us.",
     "Never have I ever practiced how I'd propose (just in case).",
     "Never have I ever imagined our future baby names.",
     "Never have I ever written a cheesy love poem for you (or thought about it).",
     "Never have I ever wanted to prank you and chickened out.",
     "Never have I ever worn something just because I knew you'd like it.",
     "Never have I ever fake-laughed at your joke (but still love you).",
     "Never have I ever compared our love story to a movie.",
     "Never have I ever eaten your leftovers when you weren't looking.",
     "Never have I ever called you by a weird or embarrassing pet name.",
     "Never have I ever daydreamed about our wedding (even if we're not engaged).",
     "Never have I ever started a fake argument just to get your attention.",
     "Never have I ever tried to read your mind during a fight.",
     "Never have I ever sent a risky or cringy text and instantly regretted it.",
     "Never have I ever posted a couple pic for \"revenge\" posting.",
     "Never have I ever secretly judged your choice of outfit (but still supported it).",
     "Never have I ever wanted to be the little spoon.",
     "Never have I ever taken 50+ selfies to get the \"perfect couple pic.\"",
     "Never have I ever been jealous of your pet's attention.",
     "Never have I ever watched a show without you that we promised to watch together.",
     "Never have I ever imagined running away together just for fun.",
     "Never have I ever used a couple filter on social media and loved it too much.",
     "Never have I ever imagined us as old grumpy lovebirds.",
     "Never have I ever recreated a romantic movie scene with you.",
     "Never have I ever stolen your hoodie or T-shirt and never returned it.",
     "Never have I ever cried over a sweet text you sent.",
     "Never have I ever done something romantic just to win a fight.",
     "Never have I ever overanalyzed a simple text from you.",
     "Never have I ever embarrassed you in front of friends—on purpose.",
     "Never have I ever sung a love song to you (even terribly).",
     "Never have I ever given you the silent treatment for something small.",
     "Never have I ever tried to make you jealous (playfully).",
     "Never have I ever Googled \"cute date ideas\" last minute.",
     "Never have I ever used a silly voice while flirting with you.",
     "Never have I ever fallen asleep while video calling you.",
     "Never have I ever checked your star sign compatibility with mine.",
     "Never have I ever felt butterflies just looking at you.",
     "Never have I ever imagined a dramatic love confession moment.",
     "Never have I ever bragged about you to someone else.",
     "Never have I ever wished we could pause time while being together.",
     "Never have I ever flirted with you in public just to annoy strangers.",
     "Never have I ever taken a million photos of you while you weren't looking.",
     "Never have I ever said \"I love you\" just because you looked too cute."
];

const spicyQuestions = [
    "Never have I ever had a fantasy about my partner that I haven't shared.",
    "Never have I ever sent a spicy text to my partner while in a public place.",
    "Never have I ever been caught being intimate with my partner.",
    "Never have I ever pretended to be more experienced than I actually was.",
    "Never have I ever had a dream about my partner that made me blush the next day.",
    "Never have I ever been distracted by thoughts of my partner during an important meeting or class.",
    "Never have I ever used food in a romantic way with my partner.",
    "Never have I ever surprised my partner with lingerie or special attire.",
    "Never have I ever left a visible mark on my partner's neck or body.",
    "Never have I ever been caught checking out my partner in public.",
    "Never have I ever sent a risqué photo to my partner.",
    "Never have I ever played a romantic game with my partner before this one.",
    "Never have I ever had a romantic encounter in a semi-public place.",
    "Never have I ever had to be quiet during an intimate moment to avoid being heard.",
    "Never have I ever bought a romantic toy or game for us to try.",
    "Never have I ever had a wardrobe malfunction on a date.",
    "Never have I ever been too tired for romance when my partner was in the mood.",
    "Never have I ever been caught looking at my partner's body when they weren't aware.",
    "Never have I ever had to take a cold shower because of my partner.",
    "Never have I ever written a love letter or poem for my partner.",
    "Never have I ever had a romantic dream about my partner that came true.",
    "Never have I ever been jealous when someone else flirted with my partner.",
    "Never have I ever given my partner a massage that turned into something more.",
    "Never have I ever been unable to focus at work because I was thinking about my partner.",
    "Never have I ever planned a surprise romantic evening for my partner.",
    // New spicy questions from NHIE - Questions.txt
    "Never have I ever fantasized about you while daydreaming.",
    "Never have I ever kissed you in a place we could get caught.",
    "Never have I ever thought about skinny dipping with you.",
    "Never have I ever worn something spicy just for you.",
    "Never have I ever had a romantic or naughty dream about you.",
    "Never have I ever flirted with you in front of others on purpose.",
    "Never have I ever wanted to sneak away from a party just to be alone with you.",
    "Never have I ever whispered something risqué in your ear in public.",
    "Never have I ever teased you just to see your reaction.",
    "Never have I ever imagined us doing something wild on vacation.",
    "Never have I ever texted you something NSFW and deleted it immediately.",
    "Never have I ever tried to seduce you with just a look.",
    "Never have I ever wanted to try something new in the bedroom but was too shy to ask.",
    "Never have I ever turned you on unintentionally.",
    "Never have I ever used a code word for something naughty.",
    "Never have I ever sent you a spicy selfie.",
    "Never have I ever been unable to concentrate because you looked too good.",
    "Never have I ever wanted to kiss you in front of everyone just to prove you're mine.",
    "Never have I ever imagined roleplaying with you.",
    "Never have I ever purposely dropped hints about a fantasy I have.",
    "Never have I ever been afraid of losing you.",
    "Never have I ever cried thinking about how much you mean to me.",
    "Never have I ever wondered if I'm good enough for you.",
    "Never have I ever been scared of falling in love this deeply.",
    "Never have I ever replayed our first kiss in my head.",
    "Never have I ever felt completely safe with anyone but you.",
    "Never have I ever thought, \"This is the person I want forever.\"",
    "Never have I ever hidden my feelings to avoid hurting you.",
    "Never have I ever lied to protect your feelings.",
    "Never have I ever apologized even when I didn't fully understand why—because I love you.",
    "Never have I ever stayed up late thinking about our future.",
    "Never have I ever wanted to run to you after a bad day without saying a word.",
    "Never have I ever been scared of how deeply I care about you.",
    "Never have I ever thought I couldn't live without you.",
    "Never have I ever dreamed about us growing old together.",
    "Never have I ever kept something from you out of fear of judgment.",
    "Never have I ever wanted to break up in a moment of anger—but never meant it.",
    "Never have I ever questioned your love—and hated myself for it.",
    "Never have I ever shared something with you that I've never told anyone else.",
    "Never have I ever felt emotionally naked around you.",
    "Never have I ever pretended to be fine just to keep peace between us.",
    "Never have I ever looked at you and felt overwhelmed with love.",
    "Never have I ever doubted myself but felt stronger because of your belief in me.",
    "Never have I ever wanted to pause time during one of our moments together.",
    "Never have I ever wanted to say \"I love you\" earlier but held it back.",
    "Never have I ever made a sacrifice for us and never told you.",
    "Never have I ever felt like you see parts of me I hide from the world.",
    "Never have I ever been scared of hurting you, even unintentionally.",
    "Never have I ever thought about the day we might say goodbye—and it broke me.",
    "Never have I ever realized how much you've changed my life for the better."
];

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const quirkyBtn = document.getElementById('quirky-btn');
const spicyBtn = document.getElementById('spicy-btn');
const combinedBtn = document.getElementById('combined-btn');
const modeTitle = document.querySelector('.mode-title');
const questionText = document.getElementById('question-text');
const nextBtn = document.getElementById('next-btn');
const endGameBtn = document.getElementById('end-game-btn');
const questionCard = document.querySelector('.question-card');
const floatingHearts = document.querySelector('.floating-hearts');

// Game state
let currentMode = '';
let currentQuestions = [];
let usedQuestions = [];

// Initialize floating hearts
function createFloatingHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        floatingHearts.appendChild(heart);
    }
}

// Start game with selected mode
function startGame(mode) {
    currentMode = mode;
    homeScreen.classList.remove('active');
    gameScreen.classList.add('active');
    gameScreen.classList.remove('quirky-mode', 'spicy-mode', 'combined-mode');
    gameScreen.classList.add(`${mode}-mode`);
    
    // Hide multiplayer info when game starts
    document.body.classList.remove('home-screen-active');
    
    // Set mode title
    if (mode === 'quirky') {
        modeTitle.textContent = 'Quirky Mode';
        currentQuestions = [...quirkyQuestions];
    } else if (mode === 'spicy') {
        modeTitle.textContent = 'Spicy Mode';
        currentQuestions = [...spicyQuestions];
    } else if (mode === 'combined') {
        modeTitle.textContent = 'Combined Mode';
        currentQuestions = [...quirkyQuestions, ...spicyQuestions];
    }
    
    usedQuestions = [];
    showNextQuestion();
}

// End game and return to home screen
function endGame() {
    gameScreen.classList.remove('active');
    homeScreen.classList.add('active');
    
    // Show multiplayer info when returning to home screen
    document.body.classList.add('home-screen-active');
}

// DOM Elements (add these to the existing DOM elements section)
const backgroundMusic = document.getElementById('background-music');
const muteBtn = document.getElementById('mute-btn');
const volumeIcon = document.getElementById('volume-icon');

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    
    // Show multiplayer info on initial load
    document.body.classList.add('home-screen-active');
    
    // Add entrance animations to home screen elements
    setTimeout(() => {
        document.querySelector('.game-title').classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
            document.querySelector('.subtitle').classList.add('animate__animated', 'animate__fadeIn');
            document.querySelector('.heart-divider').classList.add('animate__animated', 'animate__fadeIn');
            setTimeout(() => {
                document.querySelector('.mode-buttons').classList.add('animate__animated', 'animate__fadeInUp');
            }, 500);
        }, 500);
    }, 300);
    
    // Start playing background music
    playBackgroundMusic();
    
    // Set up mute button functionality
    setupMuteButton();
});

// Function to play background music
function playBackgroundMusic() {
    // Try to play the music (this might fail due to autoplay policies)
    const playPromise = backgroundMusic.play();
    
    // Handle autoplay restrictions
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Auto-play was prevented
            console.log('Autoplay prevented. User interaction required to play audio.');
            // We'll set up the mute button to show as muted initially
            muteBtn.classList.add('muted');
            volumeIcon.classList.remove('fa-volume-up');
            volumeIcon.classList.add('fa-volume-mute');
        });
    }
}

// Function to set up mute button
function setupMuteButton() {
    muteBtn.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            // If music is paused, play it and update icon
            backgroundMusic.play();
            muteBtn.classList.remove('muted');
            volumeIcon.classList.remove('fa-volume-mute');
            volumeIcon.classList.add('fa-volume-up');
        } else {
            // If music is paused, play it and update icon
            backgroundMusic.pause();
            muteBtn.classList.add('muted');
            volumeIcon.classList.remove('fa-volume-up');
            volumeIcon.classList.add('fa-volume-mute');
        }
    });
}

// Show next random question
function showNextQuestion() {
    if (currentQuestions.length === 0) {
        // All questions used, reset the list
        if (currentMode === 'quirky') {
            currentQuestions = [...quirkyQuestions];
        } else if (currentMode === 'spicy') {
            currentQuestions = [...spicyQuestions];
        } else if (currentMode === 'combined') {
            currentQuestions = [...quirkyQuestions, ...spicyQuestions];
        }
        usedQuestions = [];
    }
    
    // Get random question
    const randomIndex = Math.floor(Math.random() * currentQuestions.length);
    const question = currentQuestions[randomIndex];
    
    // Remove question from available list
    currentQuestions.splice(randomIndex, 1);
    usedQuestions.push(question);
    
    // Display with animation
    questionCard.classList.remove('question-enter');
    setTimeout(() => {
        questionText.textContent = question;
        questionCard.classList.add('question-enter');
    }, 10);
}

// Event Listeners
quirkyBtn.addEventListener('click', () => startGame('quirky'));
spicyBtn.addEventListener('click', () => startGame('spicy'));
combinedBtn.addEventListener('click', () => startGame('combined'));
nextBtn.addEventListener('click', showNextQuestion);
endGameBtn.addEventListener('click', endGame);
// Disable right-click for the entire page
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
