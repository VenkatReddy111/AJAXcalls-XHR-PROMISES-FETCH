/////////for this watch tutorials of javascript in ''thispc javascript API" of youtube channel traversy media 

/////////using url  data into table

// var xhttp=new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     if(this.readyState == 4 && this.status == 200){
//         var response=JSON.parse(xhttp.responseText);
//          var capital=response[0].capital
//          var country=response[0].name
//          document.getElementById("num1").innerHTML=capital;
//          document.getElementById("num2").innerHTML=country;
//     }
// }
// xhttp.open("GET","https://restcountries.eu/rest/v2/name/aruba?fullText=true",true);
// xhttp.send();







//////////////using .txt file sending text into html


//  var xhr=new XMLHttpRequest();
//  xhr.open('GET','venkat.txt',true)

//  xhr.onreadystatechange=function(){
//      if(this.readyState==4 && this.status==200){
//          var res=xhr.responseText;
//         document.getElementById("num12").innerHTML=res;
//      }
//  }
//  xhr.send();











 ///// using .json file pushing data into unordered list

//  var xhr=new XMLHttpRequest();
//  xhr.open('GET','venkat.json',true);
//  xhr.onreadystatechange=function(){
//      if(xhr.readyState==4 && xhr.status==200){
//          var res=xhr.responseText;
//          var data=JSON.parse(res);
//         var output='';
//           for(i in data){
//         //output+=`<ul> <li>${data[i].name}</li></ul>`
//         output+=
        
//         `
//         <td>  
//         ${data[i].name}</td>
//         `
      
//           }
//  }
//  document.getElementById('user').innerHTML=output;
//  }
//  xhr.send();










////////using promises and getting data from api  (GET METHOD)///////////


//  getApiData=function(method,url,bool){

// var promise=new Promise(function(resolve,reject){


// var xhr=new XMLHttpRequest();

// xhr.open(method,url,bool);

// xhr.onload=function(){
//         var res=JSON.parse(xhr.response)
//         var newRes=res.data;
//          resolve(newRes);
// }
// xhr.send();
// })
// return promise;
// }


// function getData(){

// getApiData('GET','https://reqres.in/api/users',true).then(function(result){
//    console.log(result);
  
// })
// }












/////// using promises and posting data to api (POST METHOD )  


// postApiData=function(method,url,data){

// var promise=new Promise(function(resolve,reject){

//     var xhr=new XMLHttpRequest();
//     xhr.open(method,url);

//     if(data){
//         xhr.setRequestHeader('Content-Type','application/json')
//     }

//     xhr.onload=function(){
//         var response=JSON.parse(xhr.response);
//         resolve(response);
//     }
//     xhr.send(JSON.stringify(data));
// })
// return promise;
// }

// function postData(){
//     postApiData('POST','https://reqres.in/api/register',{
        
//             email: "eve.holt@reqres.in",
//             password: "pistol"
        
// }).then(function(result){
//         console.log(result);
//     });
// }










////Error responses when POST method is applied



// postApiData=function(method,url,data){

// var promise=new Promise(function(resolve,reject){

//     var xhr=new XMLHttpRequest();
//     xhr.open(method,url);

//     if(data){
//         xhr.setRequestHeader('Content-Type','application/json')
//     }

//     xhr.onload=function(){
//         if(this.status>=400){
//             reject(xhr.response)
//         }else{
//         var response=JSON.parse(xhr.response);
//         resolve(response);
//         }
//     }
//      xhr.onerror=function(){
//          reject('something went wrong!')
//      }

//     xhr.send(JSON.stringify(data));
// })
// return promise;
// }

// function postData(){
//     postApiData('POST','https://reqres.in/api/register',{
        
//             email: "eve.holt@reqres.in",
//             //////password: "pistol"//////  hide this for error
        
// }).then(function(result){
//         console.log(result);
//     }).catch(function(err){
//         console.log(err)

//     })
// }








/////////////////using fetch() method getting data from api (GET)



///////////async await //////

// async function main(){
//     var data=await fetch('https://reqres.in/api/users');
//     var result=await data.json();
//     console.log(result);
//   }
//   main();