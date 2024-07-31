document.addEventListener('DOMContentLoaded', function() {
    const introMessages = [
        "Hey Baby Yoda!!!!!",
        "I remember 1st August is Girlfriend's Day...",
        "So being such a nice and caring boyfriend 😉...",
        "I want to ask you a very important QUESTION!!!"
    ];

    let currentMessageIndex = 0;
    let noClickCount = 0; // Initialize a counter for NO clicks

    function showIntroMessage() {
        if (currentMessageIndex < introMessages.length) {
            document.getElementById('introMessage').innerText = introMessages[currentMessageIndex];
            document.getElementById('continueButton').style.display = 'inline-block';
        } else {
            // Hide intro messages and show the main title
            document.getElementById('introMessages').style.display = 'none';
            document.getElementById('mainTitle').style.display = 'block';
            document.querySelector('.buttons').style.display = 'block'; // Show main buttons
        }
    }

    document.getElementById('continueButton').addEventListener('click', function() {
        currentMessageIndex++;
        if (currentMessageIndex < introMessages.length) {
            showIntroMessage();
        } else {
            document.getElementById('continueButton').style.display = 'none'; // Hide continue button after the last message
            showIntroMessage(); // Show main proposal
        }
    });

    // Call to display the first intro message
    showIntroMessage();

    document.getElementById('yesButton').addEventListener('click', function() {
        document.getElementById('mainTitle').remove();
        document.querySelector('.buttons').remove();
        
        // Reset the message area before showing final message
        document.getElementById('message').innerText = '';

        // Show final message and GIF
        document.getElementById('finalMessage').style.display = 'block';
        document.getElementById('additionalImage').style.display = 'none'; // Hide additional image
    });

    const messages = [
        "How could you say no to such a cute boy?",
        "Are you serious?",
        "Baby YODA!!!! SERIOUSLY!",
        "PLEASE SAY YES NAHHHHH!",
        "I love youuuuuu!!!! Please say yes !!!!!!",
        "Hasti, please say yes!",
        "Baby Yoda, don't say no!",
        "Beba, just say yes!",
        "Bacha, please!",
        "Motu, come on!",
        "Cutieeeeee, say yes!",
        "Baby, say yes!",
        "Babe, please!",
        "Hasti, you're the best!",
        "Baby Yoda, yes please!",
        "Beba, pretty please!",
        "Bacha, say yes!",
        "Motu, don't say no!",
        "Cutieeeeee, please!",
        "Baby, yes!",
        "Babe, yes please!",
        "Hasti, say yes now!",
        "Baby Yoda, yes!",
        "Beba, you know you want to!",
        "Bacha, don't say no!",
        "Motu, say yes!",
        "Cutieeeeee, yes!",
        "Baby, pretty please!",
        "Babe, say yes!",
        "Hasti, yes please!",
        "Baby Yoda, yes now!",
        "Beba, don't say no!",
        "Bacha, yes please!",
        "Motu, pretty please!",
        "Cutieeeeee, yes!",
        "Baby, don't say no!",
        "Babe, yes!",
        "Hasti, pretty please!",
        "Baby Yoda, please!",
        "Beba, yes!",
        "Bacha, yes now!",
        "Motu, please!",
        "Cutieeeeee, yes please!",
        "Baby, yes now!",
        "Babe, don't say no!",
        "Hasti, please!",
        "Baby Yoda, yes!",
        "Beba, yes now!",
        "Bacha, pretty please!",
        "Motu, yes please!",
        "Cutieeeeee, don't say no!",
        "Baby, yes!",
        "Babe, please!",
        "Hasti, yes now!",
        "Baby Yoda, pretty please!",
        "Beba, yes please!",
        "Bacha, don't say no!",
        "Motu, yes!",
        "Cutieeeeee, yes now!",
        "Baby, please!",
        "Babe, yes please!",
        "Hasti, don't say no!",
        "Baby Yoda, yes please!",
        "Beba, pretty please!",
        "Bacha, yes!",
        "Motu, don't say no!",
        "Cutieeeeee, please!",
        "Baby, yes now!",
        "Babe, pretty please!",
        "Hasti, yes!",
        "Baby Yoda, don't say no!",
        "Beba, yes now!",
        "Bacha, please!",
        "Motu, yes please!",
        "Cutieeeeee, pretty please!",
        "Baby, don't say no!",
        "Babe, yes!",
        "Hasti, please!",
        "Baby Yoda, yes now!",
        "Beba, don't say no!",
        "Bacha, yes please!",
        "Motu, yes!",
        "Cutieeeeee, please!",
        "Baby, yes please!",
        "Babe, yes now!",
        "Hasti, pretty please!",
        "Baby Yoda, yes!",
        "Beba, please!",
        "Bacha, yes now!",
        "Motu, pretty please!",
        "Cutieeeeee, yes!",
        "Baby, yes!",
        "Babe, don't say no!"
    ];

    document.getElementById('noButton').addEventListener('click', function() {
        noClickCount++; // Increment the NO click count

        const randomIndex = Math.floor(Math.random() * messages.length);
        document.getElementById('message').innerText = messages[randomIndex];

        // Show additional image after 5 NO clicks
        if (noClickCount >= 5) {
            document.getElementById('additionalImage').style.display = 'block'; // Show additional image
        }

        const button = document.getElementById('noButton');
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();

        const newLeft = Math.random() * (containerRect.width - button.offsetWidth);
        const newTop = Math.random() * (containerRect.height - button.offsetHeight);

        button.style.position = 'absolute';
        button.style.left = `${newLeft}px`;
        button.style.top = `${newTop}px`;

        document.getElementById('yesButton').classList.add('blinking');
    });
});
