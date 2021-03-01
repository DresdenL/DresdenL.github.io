//XMLHttp request code I referenced from the 290 modules week 6 and I edited it for my website.

document.getElementById("formSubmit").addEventListener("click", function(event){
    var theRequest = new XMLHttpRequest();
    console.log(theRequest);
    var message = document.getElementById("commentbox").value;
    var subscribe = document.getElementById("checkbox").value;
    var information = {textinput:null, checkbox:null};
    information.textinput = message
    information.checkbox = subscribe
    theRequest.open("POST", "http://httpbin.org/post", true);
    theRequest.setRequestHeader("Content-type", "application/json")
    theRequest.addEventListener("load", function(){
        if (theRequest.status >= 200 && theRequest.status < 400){
            var confirmation = document.createElement("p");
            var form = document.getElementById("subForm");
            form.appendChild(confirmation);
            confirmation.textContent = "Thank you for your comment!";
            confirmation.style.marginLeft = "100px";
            var button = document.getElementById("formSubmit");
            button.remove()
        }
    });
    theRequest.send(JSON.stringify(information));
    event.preventDefault();
});