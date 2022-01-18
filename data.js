var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() +1).padStart(2, '0'); 

var over ='<i class="uil uil-check"></i>'
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'

var persons= [
    {"name":"Nabeel",
    "dateOfBirth":"Nov 14",
    "image":"https://randomuser.me/api/portraits/men/32.jpg",
    "mm": mm-11,//
   "dd": dd-14,
   "over":mm==11&&dd==15?over:notOver,
   "day":(mm*30+dd)-(10*30+14),
   },
   {"name":"Arjun",
   "dateOfBirth":"Jun 16",
   "image":"https://randomuser.me/api/portraits/men/32.jpg",
   "mm": mm-6,//166
   "dd": dd-16,
   "over":mm==1&&dd==15?over:notOver,
   "day":mm*30+dd-5*30+16,
   
},
{"name":"Alan",
"dateOfBirth":"Jan 03",
  "image":"https://randomuser.me/api/portraits/men/32.jpg",
  "mm": mm-1,//3
  "dd": dd-3,
  "over":mm==1&&dd==15?over:notOver,
  "day":mm*30+dd-0*30+3,

},
{
    "name":"Melbin",
    "dateOfBirth":"Dec 26",
    "image":"https://randomuser.me/api/portraits/men/32.jpg",
    "mm": mm-12,//356
    "dd": dd-26,
    "over":mm==1&&dd==15?over:notOver,
    "day":mm*30+dd-11*30+26,
},

]

persons.sort((a, b) => b.day - a.day);


