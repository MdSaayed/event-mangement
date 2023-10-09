#Live Link:
https://app.netlify.com/sites/cute-bubblegum-232919/deploys/6523fae82068950ef68b5b43

# Five featured of this aplication.
* Error Handling: Handles form submission and validation, displaying error messages for invalid email/password combinations.
* Private Route: User can't see the private route without login. If an user can try to visit on private route (event details) without  signin then he/she will be redirect to the sigin page.
* Purshase Ticket: Anyone can do purshase an event ticket and he see the onwn ticket (already buyed) on the your ticket page.
* User Acceout: User can do easily create an account on this application and get event related service from us.
* Taost Message: User can do see display success and warning messages after signing / signout / purshase ticket etc.





<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer C</b></summary>
<p>

#### Answer: ?

<i>The code has a typo, using "greetign" instead of "greeting," causing a ReferenceError as it's not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer A</b></summary>
<p>

#### Answer: ?

<i>The code adds a number and a string, leading to automatic type conversion and a result of 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer A</b></summary>
<p>

#### Answer: ?

<i>The info object's property changes, but the original food array remains the same, resulting in ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer B</b></summary>
<p>

#### Answer: ?

<i>The function sayHi is called without an argument, making name undefined, resulting in "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer C</b></summary>
<p>

#### Answer: ?

<i>The code iterates through the nums array, incrementing count for each truthy value, resulting in 3.</i>

</p>
</details>
