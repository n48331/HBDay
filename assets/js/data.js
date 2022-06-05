var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, '0'));
var mm = parseInt(String(today.getMonth()).padStart(2, '0'));

var over = '<i class="uil uil-check"></i>'
var notOver = '<i class="uil uil-arrow-up"></i>'
var bday = '<i class="uil uil-gift"></i>'
x = 30
var dayToday = mm * x + dd
/*
Jan : 0
Feb : 1
Mar : 2
April : 3
May :  4
June : 5
July : 6
August : 7
Sept : 8
Oct : 9
Nov : 10
Dec : 11
*/
var persons = [
  {
    "name": "Nabeel",
    "dateOfBirth": "Nov 14",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Nabeel.svg",
    "over": 10 * x + 14 == dayToday ? bday : notOver,
    "day": 10 * x + 14,
  },
  {
    "name": "Nawaf",
    "dateOfBirth": "Sept 20",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Nawaf.svg",
    "over": 8 * x + 20 == dayToday ? bday : notOver,
    "day": 8 * x + 20,
  },
  {
    "name": "Shaheef",
    "dateOfBirth": "May 19",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Shaheef.svg",
    "over": 4 * x + 19 == dayToday ? bday : notOver,
    "day": 4 * x + 19,
  },
  {
    "name": "Saurav",
    "dateOfBirth": "Nov 02",
    "image": "https://avatars.dicebear.com/api/miniavs/male/saurav.svg",
    "over": 10 * x + 2 == dayToday ? bday : notOver,
    "day": 10 * x + 2,
  },
  {
    "name": "Arjun",
    "dateOfBirth": "Jun 16",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Arjun.svg",
    "over": 5 * x + 16 == dayToday ? bday : notOver,
    "day": 5 * x + 16,

  },
  {
    "name": "Alan",
    "dateOfBirth": "Jan 03",
    "image": "https://avatars.dicebear.com/api/miniavs/male/alan.svg",
    "over": 0 * x + 3 == dayToday ? bday : notOver,
    "day": 0 * x + 3,
  },
  {
    "name": "Melbin",
    "dateOfBirth": "Dec 26",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Melbin.svg",
    "over": 11 * x + 26 == dayToday ? bday : notOver,
    "day": 11 * x + 26,
  },
  {
    "name": "Sandesh",
    "dateOfBirth": "Jan 17",
    "image": "https://avatars.dicebear.com/api/miniavs/male/sandesh.svg",
    "over": 0 * x + 17 == dayToday ? bday : notOver,
    "day": 0 * x + 17,
  },
  {
    "name": "Ujwal",
    "dateOfBirth": "Oct 24",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Ujwal.svg",
    "over": 09 * x + 24 == dayToday ? bday : notOver,
    "day": 09 * x + 24,
  },
  {
    "name": "Arun",
    "dateOfBirth": "Oct 31",
    "image": "https://avatars.dicebear.com/api/miniavs/male/arun.svg",
    "over": 09 * x + 31 == dayToday ? bday : notOver,
    "day": 09 * x + 31,
  },
  {
    "name": "Shameer",
    "dateOfBirth": "Feb 10",
    "image": "https://avatars.dicebear.com/api/miniavs/male/Shameer.svg",
    "over": 01 * x + 10 == dayToday ? bday : notOver,
    "day": 01 * x + 10,
  },
  {
    "name": "Shahabas",
    "dateOfBirth": "Jul 03",
    "image": "https://avatars.dicebear.com/api/miniavs/male/shahbas.svg",
    "over": 06 * x + 3 == dayToday ? bday : notOver,
    "day": 06 * x + 3,
  },
  {
    "name": "Minhaj",
    "dateOfBirth": "April 15",
    "image": "https://avatars.dicebear.com/api/miniavs/male/minhaj.svg",
    "over": 03 * x + 15 == dayToday ? bday : notOver,
    "day": 03 * x + 15,
  },
]

persons.sort((a, b) => {
  if (!b.day < dayToday && a.day < dayToday) return 1;
  else if (!a.day < dayToday && b.day < dayToday) return -1;
  else return a.day - b.day;
});

if (persons[0].day > dayToday) {
  persons[0].over = '<i class="uil uil-arrow-left"></i>'
}
// persons[0].over ='<i class="uil uil-arrow-left"></i>'
function check(a, today) {
  var notOver = '<i class="uil uil-arrow-up"></i>'
  var bday = '<i class="uil uil-gift"></i>'
  if (a == today) return bday
  else return notOver
}
