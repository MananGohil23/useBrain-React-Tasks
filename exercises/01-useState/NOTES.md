# useState notes

Answer in your own words, under each question. Short is fine. Some questions need you to look at the playground.

## 1. a: Why did the counter never change on screen when it used `let count = 0`? What does calling `setCount` actually do?

--> Because it was being stored in a normal variable. Normal Variable is created every time the webpage re-renders i.e on every hot reload it will lose the previous value. Thus the counter didnt work. useState lets the variable to have memory and thus remember the previous values even after hot reloads.



## 2. b: In the playground, why did three calls to `setSlices(slices + 1)` only add one? Why does `setSlices(previous => previous + 1)` fix it?

--> All setSlices(slices+1) is tell it to set the values to previous value + 1. It doesnt work because react doesnt consider each and every state update. So the updated value of slice isnt used but calling it three times just does 0+1 three times. 
setSlices(prev => prev + 1) allows it to have memory over the updating states. What it does is it takes the current value of 'prev' and returns 'prev+1'.



## 3. c: Why did `todos.push(...)` followed by `setTodos(todos)` not show the new todo? What does React compare to decide whether to re-render?

--> Because the .push method modifies the array in place. And the setTodos(todos) just sent it the same array again. So react doesnt get a new reference to change the state. We need to give it a new array for react to consider a change in state.