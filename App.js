// async function showPics(){
//   let response = await fetch("https://jsonplaceholder.typicode.com/photos");
//   let photos = await response.json();
//   photos=photos.slice(0,9);
//   console.log(photos);

//   photos.map((photo,index) => {
//     const imageHTML = `<img src='${photo.url}' alt="photo"/>`;
//     return document.body.innerHTML=document.body.innerHTML+imageHTML;
//   });
// }
// showPics();

fetch('https://reqres.in/api/users',{
  method: 'POST',
  headers: {
    'content-type':'application/json'
  },
  body: JSON.stringify({
    name:'user-1'
  }).then(response => {
    return response.json()
  }).then(data => console.log(data))
  .catch(error => console.log(error))
})