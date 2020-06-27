console.log("connected")
let flag = false
let button_text = "Click me    [  Open  ]"


let btn = document.getElementById('me')
btn.textContent = button_text
btn.onclick = function(){
    flag = !flag
    let main  = document.getElementById("main")
    if(flag == true)
    {
        main.removeAttribute('class')
        btn.textContent = "Click me    [  Close  ]"
    }
    else
    {
        main.setAttribute('class','hide')
        btn.textContent = "Click me    [  Open  ]"
    }
   
}

let sub1 = document.getElementById('sub1')
let flag2  = false

sub1.onclick = function () {
        flag = !flag
        let main2 = document.getElementById("main2")
        if(flag == true)
        {
            main2.removeAttribute('class')
            
        }
        else
        {   
                main2.setAttribute('class','hide')
        }
}

let body = document.getElementsByTagName("body")
console.log(body)
btn.oncancel = function (){
    let main  = document.getElementById("main")
    main.setAttribute('class','hide')

}