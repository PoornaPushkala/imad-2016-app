//counter code
var button =document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make a request to the counter endpoint
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
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclick = function () {
        //make request to server and send name
        //cappture the list of name and render it as a list
        var names = ['name1','name2','name3','name4'];
        var list ='';
        for (var i=0; i< names.lenght; i++) {
            list += '<li>' + names[i] + '</li>';
        }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};