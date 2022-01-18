var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth()).padStart(2, '0')); 

var over ='<i class="uil uil-check"></i>'
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'
var dayToday = mm*30+dd

var persons= [
    {
    "name":"Nabeel",
    "dateOfBirth":"Nov 14",
    "image":"https://randomuser.me/api/portraits/men/32.jpg",
    "over":10*30+14==dayToday?bday:notOver,
    "day":10*30+14,
   },
   {
    "name":"Arjun",
    "dateOfBirth":"Jun 16",
    "image":"https://randomuser.me/api/portraits/men/36.jpg",

    "over":5*30+16==dayToday?bday:notOver,
    "day":5*30+16,
   
  },
  {
    "name":"Alan",
    "dateOfBirth":"Jan 03",
    "image":"https://randomuser.me/api/portraits/men/37.jpg",
    "over":0*30+3==dayToday?bday:notOver,
    "day":0*30+3,
  },
  {
    "name":"Melbin",
    "dateOfBirth":"Dec 26",
    "image":"https://randomuser.me/api/portraits/men/32.jpg",
    "over":11*30+26==dayToday?bday:notOver,
    "day":11*30+26,
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
