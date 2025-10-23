(function(){
    'use strict';
    console.log('reading JS');


    document.querySelector('form').addEventListener('submit', function(event){
        //no refresh
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const temp = document.querySelector('#temp').value;
        const type = document.querySelector('#type').value;
        const flavor = document.querySelector('#flavor').value;
        const pastry = document.querySelector('#pastry').value;
        const verb = document.querySelector('#verb').value;
        const weather = document.querySelector('#weather').value;

        if(!name || !temp || !type){
            alert('please fill in something! we would really love to serve you!');
            article.innerHTML =`please fill in something! we would really love to serve you!`;
        }
        const madlib = 
        `<h2>Welcome to The Cozy Kettle</h2>
        <p>today it is a<strong> ${weather}</strong> afternoon at The Cozy Kettle. There is a soft whisper of chatter in the air, steaming milk in the background with a faint scent of roasted beans and buttery pastries.</p>
        <p>${name} walks in, the bell above the door giving a soft jingle to annouce their entrance. They order a <strong>${temp} ${type}</strong> with a touch of <strong>${flavor}</strong> and a <strong>${pastry}</strong> to go with it.</p>
        <While waiting, ${name} glances around, a barista hums to the quiet rhythm of jazz in the background and as sunlight filters through the cafe's lace curtains</p>
        <p>They settle into to their usual spot, by the window at the front of the cafe, watching people pass by as they take their first sip of <strong>${temp} ${type}</strong>. The drink and the pastry feel like a small comfort in an otherwise ordinary day.</p> 
        <p>The afternoon drifts by as ${name} spends the rest of it <strong>${verb}</strong>, lost in their thoughts, the sound of music echoing through the cafe. The world outside moves slower here, as if time itself pauses to enjoy a cup of ${type}.</p>
        `;

        const article = document.querySelector('article');
        article.innerHTML = `${madlib}`;

        document.querySelector('#name').value = '';
        document.querySelector('#temp').value = '';
        document.querySelector('#type').value = '';
        document.querySelector('#flavor').value = '';
        document.querySelector('#pastry').value = '';
        document.querySelector('#verb').value = '';
        document.querySelector('#weather').value = '';
    })

})();


