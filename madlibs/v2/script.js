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
        }

        const madlib = 
        `<p>today it is a<strong>${weather}</strong> afternoon at The Cozy Kettle.</p>
        <p>${name} walks in, the bell above the door giving a soft jingle to annouce their entrance. They order a <strong>${temp} ${type}</strong> with a touch of <strong>${flavor}</strong> and a <strong>${pastry}</strong> to go with it.</p>
        <p>${name} goes to their usual spot, by the window at the front of the cafe and spends the rest of the afternoon <strong>${verb}</strong>. </p>
        `;

        const article = document.querySelector('article');
        article.innerHTML = `${madlib}`;
    })

})();


