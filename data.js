var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 

var over ='<i class="uil uil-check"></i>'
var notOver ='<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'

var persons= [
    {"name":"Nabeel",
    "dateOfBirth":"Nov 14",
    "image":"https://randomuser.me/api/portraits/men/32.jpg",
    "mm": mm-1,
   "dd": dd-15,
   "over":mm==1&&dd==15?bday:over,
   },
   {"name":"Arjun",
   "dateOfBirth":"Jun 16",
   "image":"https://randomuser.me/api/portraits/men/32.jpg",
   "mm": mm-6,
   "dd": dd-16,
   "over":mm==6&&dd>16?mm==6&&dd==16?bday:over:notOver,

  },
  {"name":"Alan",
  "dateOfBirth":"Jan 03",
  "image":"https://randomuser.me/api/portraits/men/32.jpg",
  "mm": mm-1,
  "dd": dd-3,
  "over":mm==1&&dd>3?mm==1&&dd==3?bday:over:notOver,

 },
 {"name":"Melbin",
 "dateOfBirth":"Dec 26",
 "image":"https://randomuser.me/api/portraits/men/32.jpg",
 "mm": mm-12,
 "dd": dd-26,
 "over":mm==12&&dd>26?mm==12&&dd==26?bday:over:notOver,
},
]
persons.sort((a, b) => b.mm - a.mm);