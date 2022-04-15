var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth()).padStart(2, '0')); 

var over ='<i class="uil uil-check"></i>'
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'
x=30
var dayToday = mm*x+dd
var persons= [
    {
    "name":"Nabeel",
    "dateOfBirth":"Nov 14",
    "image":"assets/img/profile1.jpg",
    "over":10*x+14==dayToday?bday:notOver,
    "day":10*x+14,
   },
   {
    "name":"Saurav",
    "dateOfBirth":"Nov 02",
    "image":"assets/img/profile5.jpg",
    "over":10*x+2==dayToday?bday:notOver,
    "day":10*x+2,
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
    "image":"assets/img/profile3.jpg",
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
  {
    "name":"Sandesh",
    "dateOfBirth":"Jan 17",
    "image":"assets/img/profile7.jpg",
    "over":0*x+17==dayToday?bday:notOver,
    "day":0*x+17,
  },
  {
    "name":"Ujwal",
    "dateOfBirth":"Oct 24",
    "image":"assets/img/profile9.jpg",
    "over":09*x+24==dayToday?bday:notOver,
    "day":09*x+24,
  },
  {
    "name":"Arun",
    "dateOfBirth":"Oct 31",
    "image":"assets/img/profile6.jpg",
    "over":09*x+31==dayToday?bday:notOver,
    "day":09*x+31,
  },
{
    "name":"Shameer",
    "dateOfBirth":"Feb 10",
    "image":"assets/img/profile8.jpg",
    "over":01*x+10==dayToday?bday:notOver,
    "day":01*x+10,
  },
{
    "name":"Shahabas",
    "dateOfBirth":"Jul 03",
    "image":"assets/img/profile4.jpg",
    "over":06*x+3==dayToday?bday:notOver,
    "day":06*x+3,
  },
    {
    "name":"Minhaj",
    "dateOfBirth":"April 15",
    "image":"assets/img/profile3.jpg",
    "over":03*x+15==dayToday?bday:notOver,
    "day":03*x+15,
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
