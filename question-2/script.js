fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
  .then((res) => {
    createCards(res);
  })
.catch(err => console.log(err))

function createCards(result){
    var details = document.getElementById('userId');
    for(var i=0; i < result.length; i++){
  details.innerHTML += "<span>UserId: " + result[i].userId + "</span>";
  details.innerHTML += "<span>Id:   " + result[i].id + "</span>";
  details.innerHTML += "<span>Title: " + result[i].title + "</span>";
  details.innerHTML += "<span>Completed:   " + result[i].completed + "</span>";
}
}
