var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth()).padStart(2, '0')); 

var over ='<i class="uil uil-check"></i>'
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'
var dayToday = mm*30+dd
x=30
var persons= [
    {
    "name":"Nabeel",
    "dateOfBirth":"Nov 14",
    "image":"assets/img/profile1.jpg",
    "over":10*x+14==dayToday?bday:notOver,
    "day":10*x+14,
   },
   {
    "name":"Arjun",
    "dateOfBirth":"Jun 16",
    "image":"assets/img/profile2.jpg",
    "over":5*x+16==dayToday?bday:notOver,
    "day":5*x+16,
   
  },
  {
    "name":"Alan",
    "dateOfBirth":"Jan 03",
    "image":"assets/img/profile4.jpg",
    "over":0*x+3==dayToday?bday:notOver,
    "day":0*x+3,
  },
  {
    "name":"Melbin",
    "dateOfBirth":"Dec 26",
    "image":"assets/img/profile4.jpg",
    "over":11*x+26==dayToday?bday:notOver,
    "day":11*x+26,
  },

]

persons.sort((a, b)=> {
  if (!b.day<dayToday &&a.day<dayToday) return 1;
  else if(!a.day<dayToday && b.day<dayToday) return -1;
  else return a.day - b.day;
});

if( persons[0].day > dayToday){
  persons[0].over ='<i class="uil uil-arrow-left"></i>'
}
// persons[0].over ='<i class="uil uil-arrow-left"></i>'
function check(a,today) {
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'
  if (a==today) return bday
  else return notOver
}
