🚀 DevStack

DevStack is a React-based web application where you can explore some different kinds of technologies. You can also build a web application by using those technologies.

🛠️ Technologies Used
React
TypeScript
Vite
Tailwind CSS
Custom CSS
JavaScript
React Icons
React Hot Toast
✨ Features
Users can learn about different technologies.
Users can explore different technologies.
Users can select technologies and make their own application using those technologies.
📚 React Questions & Answers
1. What is JSX, and why is it used in React?

JSX is basically a syntax that we use to write HTML-like code in JavaScript. It makes it easier to write the UI in React.

2. What is the difference between props and state?

Props are a kind of data that comes from the parent component and is passed to the child component.

State is the updated data that is managed inside a component.

3. What does the useState hook do, and where did you use it in this project?

useState is basically used to store data and update it.

I used useState to manage the selected technologies in this project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to load the JSON data after the component renders.

5. Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key so React can identify each item properly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it here to show whether any technology is selected or not:

<p className="count">
  {selectedTechnologies.length === 0
    ? "No technologies selected."
    : `${selectedTechnologies.length} Technology Selected`}
</p>

{selectedTechnologies.length === 0 && (
  <div className="empty-stack">
    <p>Your Stack is empty</p>
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We can pass data from a parent component to a child component using props.

For example:

<Technologys technology={technology} />