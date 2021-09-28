"use strisct"

//1 задание: Напишите функцию deepEqual,чтоб она проверяла что два объекта идентичны
//вариант 1
function deepEqual (obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log(deepEqual({name: 'test'}, {name: 'test'}));
console.log(deepEqual({name: 'test'}, {name: 'test1'}));
console.log(deepEqual({name: 'test'}, {name: 'test, age: 10'}));

//вариант 2
function deepEqual(x, y) {
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) { 
      if (Object.keys(x).length != Object.keys(y).length) return false;
      for (let prop in x) {
        if (y.hasOwnProperty(prop)) return deepEqual(x[prop], y[prop]);
       } 
    } else if (x !== y) return false;
    else return true;
}

console.log(deepEqual({name: 'test'}, {name: 'test'}));
console.log(deepEqual({name: 'test'}, {name: 'test1'}));
console.log(deepEqual({name: 'test'}, {name: 'test, age: 10'}));



//2 задание: Напишите функцию chunkArray,которая разбивает массив на подмассивы на заданное количество элементов
function chunkArray(array, chunk) {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
       newArray.push(array.slice(i, i+chunk));
    }
    return newArray;
}

const result = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(result)


//3 задание: Напишите функцию обертку которая на вход принимает асинхронный метод и массив аргументов а отдает нам Promise с результатом
const toPromise = new Promise((resolve) => {
  const asyncPlus = (x, y) => (x + y);
  resolve(asyncPlus(1,2));
});
toPromise.then((response) => {
  console.log(response);
});

//4 задание: Напишите метод firstUnique который возвращает первый уникальный элемент в массиве
function firstUnique(arr) {
    let newArr = [];
    for (let element of arr) {
        if (newArr.includes(element))
            newArr.splice(newArr.indexOf(element), 1);
        else
            newArr.push(element);
    }
    return newArr;
}
console.log(firstUnique([1,2,3,2,1,3,4,5,5]))



//9 задача: Создайте прототип для String toTitleCase каждый первый символ строки переводит в верхний регистр
function toTitleCase(str) {
    let arr = str.toLowerCase().split(" ");
    let res = [];
    for (let i = 0; i<arr.length; i++) {
      let world = arr[i];
      res.push(world[0].toUpperCase() + world.slice(1));
    }
    return res.join(" ");
}
let x = 'test task';
console.log(toTitleCase(x));



//10 задача: Создайте прототип который удаляет дубликаты из строки
function removeDuplicate(s) {
    let charArray = s.split("");
      for (let i = 0; i < charArray.length; i++) {
        for (let j = i + 1; j < charArray.length; j++)
          if (charArray[i] == charArray[j]) {
            charArray.splice(j, 1);
            j--;
          }
      }
      return charArray.join("");
    }
let xy = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";
console.log(removeDuplicate(xy));



//11 задача: Напишите методы добавления/удаления строчки внизу таблицы
const btnInsert = document.getElementById('btnInsert');
const btnRemove = document.getElementById('btnRemove');
const table = document.getElementById('sampleTable');
let index = 1;

function addRowCell (n) {
	return `<td>Row${n} cell1</td><td>Row${n++} cell2</td>`;
}

function deleteLastRow () {
	table.querySelector('tbody tr:last-child').remove();
	index--;
}

function addRow (index) {
	table.querySelector('tbody').insertAdjacentHTML('beforeend', addRowCell(index));
}

btnInsert.addEventListener('click', function () {
	addRow(index);
	index++;
})


btnRemove.addEventListener('click', deleteLastRow);






