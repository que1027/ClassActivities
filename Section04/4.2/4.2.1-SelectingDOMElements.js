// select all unordered list (ul) elements
const ul = document.getElementsByTagName("ul");
const ul2 = document.querySelectorAll("ul");
// select all elements with the class "class-week"
const list1 = document.getElementsByClassName("class-week");
const list2 = document.querySelectorAll(".class-week");
// select all elements with the class "nav-bar"
const nav1 = document.getElementsByClassName("navbar");
const nav = document.querySelectorAll(".navbar");
// select the element with the id "dog-picture" and save it to a variable
const pic = document.getElementById("dog-picture");
const pic2 = document.querySelectorAll("#dog-picture");
//demonstrate a complex selector that finds all the child li elements with the class of navbar
const list4 = document.querySelectorAll("ul.navbar li");

//the next activity

// select the root node
const root = document.querySelector("body");
// select the last child of the root node
const lastChild = root.lastElementChild;
// select all the children of the body element
const kids = root.children;
// select the next sibling of the h2 node
const sibling = document.querySelector("h2").nextElementSibling;
// select the parent element of the h1 node
const parent = document.querySelector("h2").parentElement;

// print the outer HTML of the navigation bar
console.log(document.getElementById("unorderedList").outerHTML);
// print the inner HTML of the navigation bar
console.log(document.getElementById("unorderedList").innerHTML);
// print the text content of the #class-schedule-list element
console.log(document.querySelector("h3").textContent);
// select the classList for the first class-week, then add the class "week-1"
document.querySelector("h2").classList.add("small-text");
// select the img element and add a src attribute
document.querySelector("img").src = "https//path/to/img";
// change the font color of the h1 element
document.querySelector("h1").style.color = "red";

//next

// create a new unordered list (ul) element

// remove the paragraph element in the nav-bar

// add your new ul element to the nav-bar

// create two new list item (li) elements, and add some text to them

// add the li elements to the ul in the nav-bar
const unorderedList = document.createElement("ul");
const listItem = document.createElement("li");
listItem.textContent = "My First Item";
listItem.style.color = "blue";
listItem.id = "my-item";
unorderedList.appendChild(listItem);
document.querySelector("body").appendChild(unorderedList);

document.querySelector("h1").remove();

//next

// add an event listener to the dog picture that listens for a "click" and gives an alert
document.getElementById("my-item").addEventListener("click", event => {
  alert("my item was clicked.");
  console.info("event:", event);
});
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("h3").addEventListener("mouseover", event => {
  event.target.style.color = "red";
  console.info("event:", event);
});
document.querySelector("h3").addEventListener("mouseout", event => {
  event.target.style.color = "black";
  console.info("event:", event);
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document
  .querySelector('a[href="http://www.google.com"]')
  .addEventListener("click", event => {
    event.preventDefault();
  });
