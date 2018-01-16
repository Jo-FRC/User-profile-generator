var btn = document.querySelector('#btn');
var avatar = document.querySelector('#avatar');
var fullName = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var url = ' https://randomuser.me/api/';

btn.addEventListener('click', function(){
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(displayErrors);
});

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function parseJSON (res){
  return res.json().then(function(parsedData){
    return parsedData.results[0];
});
}

function updateProfile (data){
    var fullname = data.name.first + " " + data.name.last;
    fullName.innerText = fullname;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err){
  console.log("INSIDE displayErrors!");
  console.log(err);
}
