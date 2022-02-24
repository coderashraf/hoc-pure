Higher Order Component: A component which can send the data to the wrapped component without even being rendered on screen.
We do not render HOC on the screen, we just receice the data from it.

export default App;  //Normal Component

export default UserHOC(App)  // Component wrapped with HOC

App is wrapped component, UserHOC id wrapping component. HOC component will pass the data to App Component.

It is a functional component or a function which takes a component as a parameter and returns a new component.

**Pure Component**: A component will be rendered only in the case when the state variables value will be changed or updated. Ex: if initially state variable name="John", now this value gets updated to name="Doe", then rendering the component again is good and we should. But if the state variable gets updated with the same value name="John", then in this case we should not re-render our component.

Class component: React Provides React.PureComponent to create a pure component which inside runs shouldComponentUpdate lifecycle method to checkif the prev state or props value has been updated with new value or not. If the value is new then only the new component will be rendered on the screen.

Function Component: Earlier we were not able to create the pure componet in Functional components. A third party named as Recompose,pure, Wrap your functional component with pure then your component will become a pure component.
But later React released memo module in its library.