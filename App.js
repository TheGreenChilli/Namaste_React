
// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");

// console.log(heading); // it will give object


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// nested html structure inside react application
/*

<div id="parent">
    <div id="child">
      <h1>I'm h1 tag</h1>
    </div>
</div>

*/

// const parent = React.createElement("div", {id: "parent"},
//   React.createElement("div", {id: "child"},
//     React.createElement("h1", {}, "I'm an h1 tag")
//   )
// );

// console.log(parent); 

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// if we have to add one more children 

/*

<div id="parent">
    <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
</div>

*/

// we have to add one more children using square brackets 
// we have to create an array of childrens 

// const parent = React.createElement("div", {id: "parent"},
//   React.createElement("div", {id: "child"}, [
//     React.createElement("h1", {}, "I'm an h1 tag"),
//     React.createElement("h2", {}, "I'm an h2 tag"),
//   ])
// );

// console.log(parent); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);



/*

<div id="parent">
    <div id="child">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
  <div id="child2">
      <h1>I'm h1 tag</h1>
      <h2>I'm h2 tag</h2>
    </div>
</div>

*/

const parent = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// this code looks too complex and tidy thats why jsx occur
// jsx makes our life too easy when we have to create tags