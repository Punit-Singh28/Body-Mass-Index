const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter valid Height';     
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please enter valid Weight';
    }else{
        const answer = weight/((height*height)/10000).toFixed(2);
        if(answer <= 18.6 ){
            result.innerHTML = `${answer} You are in Under Weight Category`;
        }else if(answer > 18.6 && answer <= 24.9){
            result.innerHTML = `${answer} You are in Normal Weight Category`;
        }else{
             result.innerHTML = `${answer} you are in Over Weight Category`;
        }
       
    }
}); 

// const mode = document.querySelector('.darkmode');
// const body = document.querySelector("body");
// mode.addEventListener('click',function(e){
//     body.style.backgroundColor = 'black';
//     body.style.color= 'white';
// })