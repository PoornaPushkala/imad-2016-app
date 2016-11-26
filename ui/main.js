//counter code
var button =document.getElementById('counter');

button.onclick = function () {
    
    //create a req obj
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            //TAKE SOME ACTION
            if(request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
            }        
        }
         //not done yet
         
    };
    //make the request
    request.open('GET', 'http://poornapushkala.imad.hasura-app.io/counter', true);
    request.send(null);
};
    //submit name
   
    var submit = document.getElementById('submit_btn');
    submit.onclick = function () {
       //make req to the sever and send the name
       
       //create a req object
       var request =new XMLHttpRequest();
         
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            //TAKE SOME ACTION
            if(request.status === 200) {
        //cappture the list of name and render it as a list
        var names = request.responseText;
        names = JSON.parse(name);
        var list ='';
        for (var i=0; i< names.lenght; i++) {
            list += '<li>' + names[i] + '</li>';
        }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
            }
        }
              //not done yet
         
    };
    //make the request
     var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://poornapushkala.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
        
        
    };