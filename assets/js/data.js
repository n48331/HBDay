var today = new Date();

var dd = parseInt(String(today.getDate()).padStart(2, "0"));
var mm = parseInt(String(today.getMonth()).padStart(2, "0"));

var over = '<i class="uil uil-check"></i>';
var notOver = '<i class="uil uil-arrow-up"></i>';
var bday = '<i class="uil uil-gift"></i>';
var dayToday = setDay(mm, dd);

const month = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  Sept: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};
const data = [
  {
    name: "Nabeel",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 14 },
  },
  {
    name: "Razeena",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 1 },
  },
  {
    name: "Anjun",
    dob: { mm: month.July, mmstr: "July", dd: 1 },
  },
  {
    name: "Nawaf",
    dob: { mm: month.Sept, mmstr: "Sept", dd: 20 },
  },
  {
    name: "Shaheef",
    dob: { mm: month.May, mmstr: "May", dd: 19 },
  },
  {
    name: "Saurav",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 02 },
  },
  {
    name: "Arjun",
    dob: { mm: month.June, mmstr: "Jun", dd: 16 },
  },
  {
    name: "Alan",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 03 },
  },
  {
    name: "Melbin",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 26 },
  },
  {
    name: "Sandesh",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 17 },
  },
  {
    name: "Ujwal",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 24 },
  },
  {
    name: "Nafi",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 25 },
  },
  {
    name: "Arun",
    dob: { mm: month.Oct, mmstr: "Oct", dd: 31 },
  },
  {
    name: "Shameer",
    dob: { mm: month.Feb, mmstr: "Feb", dd: 10 },
  },
  {
    name: "Shahabas",
    dob: { mm: month.July, mmstr: "Jul", dd: 03 },
  },
  {
    name: "Minhaj",
    dob: { mm: month.April, mmstr: "April", dd: 15 },
  },
  {
    name: "Fidha",
    dob: { mm: month.Nov, mmstr: "Nov", dd: 22 },
  },
  {
    name: "Navas",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 3 },
  },
  {
    name: "Aseeb",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 13 },
  },
  {
    name: "Sneha",
    dob: { mm: month.Jan, mmstr: "Jan", dd: 13 },
  },
  {
    name: "Fouz",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 4 },
  },
  {
    name: "Nihal",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 9 },
  },
  {
    name: "Thaniya",
    dob: { mm: month.Dec, mmstr: "Dec", dd: 22 },
  },
  {
    name: "Famraz",
    dob: { mm: month.April, mmstr: "April", dd: 18 },
  },
  {
    name: "Malik",
    dob: { mm: month.July, mmstr: "July", dd: 12 },
  },
  {
    name: "Aflah",
    dob: { mm: month.July, mmstr: "July", dd: 17 },
  },
  {
    name: "Shiril",
    dob: { mm: month.August, mmstr: "August", dd: 14 },
  },
];

var imageLink = "https://avatars.dicebear.com/api/personas/";
var persons = [];

for (let i = 0; i < data.length; i++) {
  persons.push({
    name: data[i].name,
    dateOfBirth: `${data[i].dob.mmstr} ${data[i].dob.dd}`,
    image: imageLink + `${data[i].name}.svg`,
    over: isDay(setDay(data[i].dob.mm, data[i].dob.dd)),
    day: setDay(data[i].dob.mm, data[i].dob.dd),
  });
}

persons.sort((a, b) => {
  if (!b.day < dayToday && a.day < dayToday) return 1;
  else if (!a.day < dayToday && b.day < dayToday) return -1;
  else return a.day - b.day;
});

if (persons[0].day > dayToday) {
  persons[0].over = '<i class="uil uil-arrow-left"></i>';
}
// persons[0].over ='<i class="uil uil-arrow-left"></i>'
function check(a, today) {
  var notOver = '<i class="uil uil-arrow-up"></i>';
  var bday = '<i class="uil uil-gift"></i>';
  if (a == today) return bday;
  else return notOver;
}
function setDay(m, d) {
  return m * 30 + d;
}
function isDay(x) {
  return x == dayToday ? bday : notOver;
}
