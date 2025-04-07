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
        result.innerHTML=`<span> ${bmi}</span>`
    }
})