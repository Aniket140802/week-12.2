"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Rachit', age: 21 }, { name: 'Aniket', age: 22 });
console.log(age);
