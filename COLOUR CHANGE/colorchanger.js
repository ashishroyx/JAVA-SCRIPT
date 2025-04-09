const button = document.querySelectorAll('.button2')
const body= document.querySelector('body')

button.forEach((changer)=>{
    changer.addEventListener('click',function(e){

        if(e.target.id === 'blue')
        {
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id === 'green')
            {
                body.style.backgroundColor=e.target.id
            }
            if(e.target.id === 'yellow')
                {
                    body.style.backgroundColor=e.target.id
                }
                if(e.target.id === 'brown')
                    {
                        body.style.backgroundColor=e.target.id
                    }
    })
})