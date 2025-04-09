let form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#result')

    if(height ==='' || height < 0 || isNaN(height)){

        result.innerHTML='enter valid shit bro'

    }
    else if(weight ==='' || weight < 0 || isNaN(weight)){

        result.innerHTML='enter valid shit bro'
    }

    else{
        let bmi = weight / ((height * height)/10000).toFixed(2);

        let message = '';

        if (bmi > 24) {
            message = 'You are overweight 🧁';
        } else if (bmi < 18) {
            message = 'You are underweight 🍃';
        } else {
            message = 'You are fit 💪';
        }

        result.innerHTML = `<span>Your BMI is ${bmi} — ${message}</span>`;

        
        
        
    }
   
})
