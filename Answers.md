# Answers

1.  What is React JS and what problems does it try and solve?

    React JS solved the performance issue of using the DOM, which would render slowly. React JS uses the virtual DOM which only updates the changes to the tree, instead of the whole tree, which reduces the number of DOM refreshes, and increases performance speeds.

2.  What does it mean to _think_ in react?

    To think in React means to break down the project from one big item into smaller compenents that are then put together for the finished product.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A functional component is a vanilla JS function that accepts props as the arguement and returns a React element.

    With a class component you extend from the React library and create a render function that then returns a React element.

4.  Describe state.

    State is a way to store data in React. It is usually changed through user input, such as typing in a form.

5.  Describe props.

    Props are passed down from the parent component, give access to data and can not be changed.
