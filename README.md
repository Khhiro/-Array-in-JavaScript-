# ЧТО ТАКОЕ `Array in JavaScript?`.

![](https://bugfender.com/wp-content/uploads/2023/05/Untitled.png)


An array is an object that holds values (of any type) not particularly in named
properties/keys, but rather in numerically indexed position
In JavaScript, an array isan ordered list of values. Each value is called an element specified by an index. . First, an array can hold values of mixed types.
An array is a special variable, which can hold more than one value:.



<br>

### 1. `CharAt` 
char charAt(int index) возвращает значение char по указанному индексу. Индекс колеблется от 0 до length()-1.

![](https://www.scaler.com/topics/images/charat-in-javascript_tbh.webp)

<br>




### 2. `concat`

Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

![alt text](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2m4toxyfkz10i5ygw22b.png)


```cs
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
``` 
<br>

### 2. `Array method push`

The push method adds one or more elements to the end of an array and returns the new length of the array.
The elements to add to the end of the array.
Syntax:push(elementO, elementl, /* ... ,*/ elementN)

![alt text](https://cdn.educba.com/academy/wp-content/uploads/2020/01/javascript-array-push.jpg)

### 3. `Array method pop`

The pop method removes the last element from an array and returns that element. This method changes the length of the array.
Syntax: pop

![alt text](https://images.surferseo.art/eee8b1e0-7968-4c08-83fc-fe161104a0ba.png)

### 3. `Array method unshift`

The unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
Syntax:unshift(elementO, elementl, /* ..,*/ elementN)

![alt text](https://favtutor.com/articles/wp-content/uploads/2023/12/array-unshift.png)

### 3. `Array method shift`

The shift  method removes the first element from an array and returns that element. This method changes the length of the array.
Syntax:shift

![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1661590569866/zaVkpnKVy9.jpg)
