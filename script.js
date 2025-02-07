const flirtLines = [
    "Are you a library book? Because I can't stop checking you out. 📚😉",
    "Are you a novel? Because every chapter of you is better than the last. 📖😍",
    "Are you a bookmark? Because you’ve marked a special place in my heart. 💖📑",
    "Are you a classic? Because you're timeless and unforgettable. 🏛️📘",
    "Are you a poetry book? Because every word about you is pure magic. ✨📜",
    "Are you an open book? Because I’d love to read every detail about you. 📖💘",
    "Are you a mystery novel? Because I can't wait to uncover all of your secrets. 🔍📚",
    "Are you a best-seller? Because everyone should know how amazing you are. 🏆📖",
    "Are you a fantasy novel? Because you make my world more magical. 🧙‍♂️📖",
    "Are you a love story? Because every moment with you feels like a fairy tale. 💑📚",
    "Are you a quote from my favorite book? Because I can't stop thinking about you. 📝💕",
    "Are you a rare edition? Because you're one of a kind. 💎📖",
    "Are you a bookshelf? Because you've got everything I need. 📚❤️",
    "Are you a novel by Jane Austen? Because you’ve got me feeling some serious romance. 🎩📖",
    "Are you a cozy bookshop? Because I could get lost in you for hours. ☕📚",
    "Are you a dictionary? Because you’ve just redefined perfection. 📖😍",
    "Are you a reading nook? Because I just want to curl up with you forever. 🏡📚",
    "Are you a plot twist? Because I never saw you coming, but now I can’t look away. 🤯📖",
    "Are you a Shakespeare play? Because our love story deserves sonnets. ✍️📜",
    "Are you a well-written protagonist? Because you make my story so much better. 🌟📖",
    "Are you an epic saga? Because I never want our story to end. 📚💕",
    "Are you a fairy tale? Because you make all my dreams come true. 🏰📖",
    "Are you an annotated novel? Because I want to leave little love notes all over you. 💌📖",
    "Are you a chapter in my life? Because you're my favorite part. 📖💘",
    "Are you a midnight read? Because I lose sleep thinking about you. 🌙📚",
    "Are you an adventure novel? Because you take me to exciting places. 🗺️📖",
    "Are you a library? Because I’d love to spend a lifetime exploring you. 📚💖",
    "Are you a prequel? Because I know the best is yet to come. ⏳📖",
    "Are you a spine of a book? Because you hold everything together beautifully. 📚💞",
    "Are you a bookmark? Because I never want to lose my place with you. 📑💕",
    "Are you a poetry collection? Because every verse of you is beautiful. 🖋️📜",
    "Are you a book series? Because I just can't get enough of you. 📚💘",
    "Are you a library fine? Because you’ve stolen my heart. 💰📖",
    "Are you an audiobook? Because I could listen to you forever. 🎧📖",
    "Are you a hardcover? Because you’ve got a tough exterior, but a soft heart. 📚💖",
    "Are you a book club? Because I want to talk about you every week. 📖💕",
    "Are you a bestseller? Because everyone is drawn to you. 🏆📚",
    "Are you an autobiography? Because I want to know your whole story. ✍️📖",
    "Are you a plot twist? Because you make my heart skip a beat. 💓📚",
    "Are you a literary masterpiece? Because you belong in the Hall of Fame. 🏛️📖",
    "Are you an author? Because you've written yourself into my heart. 📝💕",
    "Are you a new release? Because I can't wait to get my hands on you. 📦📚",
    "Are you a dystopian novel? Because life without you would be a nightmare. 🌎📖",
    "Are you a forbidden book? Because I can’t resist you. 🚫📚",
    "Are you a table of contents? Because you organize my chaotic heart. 📖💘",
    "Are you a reading lamp? Because you brighten up my world. 💡📚",
    "Are you a spine label? Because you're my perfect match. 📖💕",
    "Are you a dedication page? Because every book should start with you. 💌📖",
    "Are you a love letter hidden in a book? Because you make my heart skip a beat. 💕📖",
    "Are you a bookmark ribbon? Because you keep my heart in place. 🎀📖",
    "Are you a prologue? Because you make every story exciting from the start. 📚💖",
    "Are you a dust jacket? Because you protect my heart. 🛡️📖",
    "Are you a collector’s edition? Because you’re priceless to me. 💎📖",
    "Are you a book spine? Because without you, my world would fall apart. 📚💘",
    "Are you a signed first edition? Because I treasure every word about you. ✍️📖",
    "Are you a book dedication? Because every story should start with you. 💖📚",
    "Are you a footnote? Because you add so much meaning to my life. 📖💞",
    "Are you an unread classic? Because I can't wait to discover everything about you. 📚💘",
    "Are you a magical realism novel? Because life feels more enchanted when you’re around. ✨📖",
    "Are you a reading marathon? Because I just can’t put you down. 📚💓",
    "Are you a bestseller list? Because you always top my heart’s charts. 🏆📖",
    "Are you a cozy mystery? Because being with you is the most comforting puzzle. 🔍📚",
    "Are you a first-edition print? Because you’re truly rare and valuable. 💎📖",
    "Are you an unpublished manuscript? Because I want to be the first to know all about you. 📖💕",
   
    "You must be a magician because whenever I look at you, everyone else disappears. ✨",
    "If beauty were time, you’d be an eternity. ⏳💖",
    "You light up my world like nobody else. 🔥",
    "Are you a shooting star? Because my wish just came true. 🌠",
    "I must be a snowflake because I’ve fallen for you. ❄️😍",
    "Are you a dictionary? Because you add meaning to my life. 📖💫",
    "You must be a campfire, because you're making my heart melt. 🔥❤️",
    "If kisses were words, I’d be writing you a novel. 📖😘"
];

function revealMagic() {
    let randomIndex = Math.floor(Math.random() * flirtLines.length);
    let complimentText = document.getElementById("compliment");
    
    // Reveal the compliment
    complimentText.innerText = flirtLines[randomIndex];
    complimentText.classList.remove("hidden");
    
    // Confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Glow effect on reveal
    complimentText.style.textShadow = "0 0 30px rgba(255, 255, 255, 1)";
}
