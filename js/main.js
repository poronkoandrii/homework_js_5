// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость)
let auto = {
  manufactur: "volkswagen",
  model: "golf",
  "year of issue": "2012",
  speed: "100",
};
// Функция для вывода на экран информации об автомобиле;
about = (obj) => {
  for (let key in obj) {
    console.log(obj[key]);
  }
};
about(auto);

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
timeOfDistance = (S, obj) => {
  let t;
  if (obj.speed) {
    v = obj.speed;
  }
  t = S / v;
  t = Math.round(t);
  //   t = Math.floor(t * 100) / 100;
  //   t = (t - Math.floor(t)) * 0.6 + Math.floor(t);
  //   t = Math.floor(t * 100) / 100;
  if (!(t % 4)) {
    t = t / 4 - 1 + t;
  } else {
    t = Math.floor(t / 4) + t;
  }
  return t;
};
console.log(timeOfDistance(3901, auto));

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби
let number1 = {
    x: 6,
    y: 9,
  },
  number2 = {
    x: 4,
    y: 8,
  },
  number3 = {};
plus = (obj1, obj2, obj3) => {
  obj3.x = obj1.x + obj2.x;
  obj3.y = obj1.y + obj2.y;
  return obj3;
};
minus = (obj1, obj2, obj3) => {
  obj3.x = obj1.x - obj2.x;
  obj3.y = obj1.y - obj2.y;
  return obj3;
};
multi = (obj1, obj2, obj3) => {
  obj3.x = obj1.x * obj2.x;
  obj3.y = obj1.y * obj2.y;
  return obj3;
};
division = (obj1, obj2, obj3) => {
  obj3.x = obj1.x * obj2.x;
  obj3.y = obj1.y * obj2.y;
  return obj3;
};
reduction = (obj1, obj) => {
  if (obj1.x <= obj1.y) {
    for (let i = 1; i <= obj1.x; i++) {
      if (!(obj1.x % i) && !(obj1.y % i)) {
        obj.x = obj1.x / i;
        obj.y = obj1.y / i;
      }
    }
  } else {
    for (let i = 1; i <= obj1.y; i++) {
      if (!(obj1.x % i) && !(obj1.y % i)) {
        obj.x = obj1.x / i;
        obj.y = obj1.y / i;
      }
    }
  }
  return obj;
};
// Создать объект, описывающий время (часы, минуты, секунды)
let time = {
  hour: 3,
  minutes: 15,
  seconds: 30,
};
// Функция вывода времени на экран;
showTime = (obj) => {
  let result = "";
  for (let key in obj) {
    result += key + ":" + obj[key] + " ";
  }
  console.log(result);
};
showTime(time);

// Функция изменения времени на переданное количество секунд;
changeSeconds = (s, obj) => {
  if (obj.seconds) {
    obj.seconds += s;
    if (obj.seconds >= 60 && obj.minutes) {
      obj.minutes += Math.floor(obj.seconds / 60);
      obj.seconds = obj.seconds % 60;
    }
  }
};
changeSeconds(30, time);
// Функция изменения времени на переданное количество минут;
changeMinutes = (m, obj) => {
  if (obj.minutes) {
    obj.minutes += m;
    if (obj.minutes >= 60 && obj.hour) {
      obj.hour += Math.floor(obj.minutes / 60);
      obj.minutes = obj.minutes % 60;
    }
  }
};
changeMinutes(30, time);
// Функция изменения времени на переданное количество часов.
changeHour = (h, obj) => {
  if (obj.hour) {
    obj.hour += h;
    if (obj.hour > 24 && obj.hour) {
      obj.day = Math.floor(obj.hour / 24);
      obj.hour = obj.hour % 24;
    }
  }
};
changeHour(30, time);
showTime(time);
