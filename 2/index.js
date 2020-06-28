console.log("connected")
let flag = false

let btn = document.getElementById('me')

let main  = document.getElementById("main")
btn.addEventListener('click', function(e){
    
    flag = !flag
    
    if(flag == true)
    {
        main.removeAttribute('class')
       
    }
    else
    {
        main.setAttribute('class','hide')
        
    }
   
})

main.addEventListener('click',function (e){

    btn.textContent = e.target.innerText
    main.setAttribute('class','hide')
})
