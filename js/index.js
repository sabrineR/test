/*var nom = "sabrine";
nom+=" "+ "what happen"

function myFunction (nom){
    return "hello" + nom ;
}
console.log(myFunction(nom));

document.getElementById('demo').innerHTML= typeof(nom)  ;*/
/*
var x = myFunction(20,6);
document.getElementById('demo').innerHTML = x;
function myFunction(a,b){
    return a *b;
}*/

/*
 function toCelsius(m){
     return (5/9) * (m-32);
 }
 document.getElementById('demo').innerHTML= toCelsius(77);*/

//Fonctions utilisées comme valeurs de variable
function toCelsius(m){
    return (5/9) * (m-32);
}
var x = "the temperature is : " + toCelsius(77) + " celsius" 
document.getElementById('demo').innerHTML= x;

//les objets
var car = {
name : 'BMW',
model:'2020',
color :'white'
};
document.getElementById('demo').innerHTML= 'the name of my car is : ' + car['model'];

var person ={
    nom:'sabrine',
    prenom:'sassi',
    nomComplet : function(){
        return this.nom +' ' + this.prenom;
    }
}

document.getElementById('demo').innerHTML= person.nomComplet();
//event
 function displayDate(){
     document.getElementById('demo').innerHTML= Date();
 }

 //string 
 var txt='   Sabrina raoui taiem   ';
 var txt2 ="love";
 var l = txt.length;
 var res = txt.concat(" ",txt2);

 var re= txt.trim();
 document.getElementById('demo').innerHTML= re;

 //Accès à la propriété
 var str = "hello world";
 document.getElementById('demo').innerHTML= str[0];
 //convertir string to array
 function conv (){
     var str = "sabrina";
     var arr =str.split("");
     document.getElementById('demo').innerHTML=arr[0];
 }
