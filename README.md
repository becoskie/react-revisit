# react-revisit
Looking to expand react understanding


## pure-react branch
basic setup. Used scripts to bring in react and babel.  
Render to the DOM an H1 with inline style.  
```
<h1 id='title' className='header' style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>Hello World</h1>,
    document.getElementById('react-container')
```
## activity branch

Project to get the head wrapped around older react and how to deal with it.

*Creating Stateless Functional Components*   
Stateless functional components are functions that take in property information, and return JSX elements.

```
const MyComponent = (props) => (<div>{props.title}</div>)
```

It's typically a good idea to use stateless components, whenever possible. Stateless components offer a functional way to work with components, and, also, the React team has hinted that there may be some performance benefits of using these functions, rather than using createClass, or ES6 classes. 