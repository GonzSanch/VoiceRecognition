const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = ['Im good you little piece of love','Doing good homeboii', 'leave me alone'];
const weather = ['Weather is fine', 'You need a tan','Weather is as shitty as your day']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.onstart = function() {
    console.log('voice is activated, you can to microphoneee.');
};

recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I dont know what you said';

    if(message.includes('how are you')){
        const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finaltext;
    }

    if(message.includes('weather')){
        const finaltext = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finaltext;
    }

    speech.lang ='en-US';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}