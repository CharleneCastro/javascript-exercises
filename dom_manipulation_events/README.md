# [The Odin Project - Foundations Course - DOM Manipulation and Events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)


## [Active learning: A dynamic shopping list](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)



In this challenge we want to make a simple shopping list example that allows you to dynamically add items to the list using a form input and button. When you add an item to the input and press the button:

* The item should appear in the list.
* Each item should be given a button that can be pressed to delete that item off the list.
* The input should be emptied and focused ready for you to enter another item.


The finished demo will look something like this:

![Demo layout of a shopping list. A 'my shopping list' header followed by 'Enter a new item' with an input field and 'add item' button. The list of already added items is below, each with a corresponding delete button.](shopping-list.png)


To complete the exercise, follow the steps below, and make sure that the list behaves as described above.

1. To start with, download a copy of our [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) starting file and make a copy of it somewhere. You'll see that it has some minimal CSS, a div with a label, input, and button, and an empty list and [`<script>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) element. You'll be making all your additions inside the script.

2. Create three variables that hold references to the list ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)), [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input), and [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) elements.

3. Create a [function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) that will run in response to the button being clicked.
4. Inside the function body, start off by storing the current [value](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties) of the input element in a variable.

5. Next, empty the input element by setting its value to an empty string — ''.

6. Create three new elements — a list item ([`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)), [`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span), and [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), and store them in variables.

7. Append the span and the button as children of the list item.

8. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.

9. Append the list item as a child of the list.

10. Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (`<li>...</li>`).

11. Finally, use the [focus()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) method to focus the input element ready for entering the next shopping list item.


<br>

Note: If you get really stuck, have a look at our [finished shopping list](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([see it running live also](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).
