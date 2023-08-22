const button = document.querySelector(".Submit");
const listItems = document.querySelector("#list");
const input = document.querySelector(".input");
button.addEventListener("click", function(){
    button.style.backgroundColor = "#d0d6d6";
    setTimeout(function(){
        button.style.backgroundColor = "#ffffff";
    }, 100);
    if(input.value===''){
        alert("Please enter any text to submit ");
    }
    else{
        const text = input.value;
        if(text.length> 44){
            var num = text.length - 44;
            alert("Please reduce the number of charecters by " +num );
        }
        else{
            const list = document.createElement("li");
            list.innerHTML = text;
            listItems.appendChild(list);
            let span = document.createElement("span");
            span.textContent = "\u2702";
            list.appendChild(span);
        }
    }
    input.value ="";
    save();
})
document.addEventListener("keydown", function(e){
    if(e.key==="Enter"){
        button.style.backgroundColor = "#d0d6d6";
        setTimeout(function(){
            button.style.backgroundColor = "#ffffff";
        }, 100);
        if(input.value===''){
            alert("Please enter any text to submit ");
        }
        else{
            const text = input.value;
            if(text.length> 44){
                var num = text.length - 44;
                alert("Please reduce the number of charecters by " +num );
            }
            else{
                const list = document.createElement("li");
                list.innerHTML = text;
                listItems.appendChild(list);
                let span = document.createElement("span");
                span.textContent = "\u2702";
                list.appendChild(span);
            }
        }
        input.value ="";
        save();
    }
})
document.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    save();
})
function save(){
    localStorage.setItem("d", listItems.innerHTML);
}
function show(){
    listItems.innerHTML = localStorage.getItem("d");
}
show();