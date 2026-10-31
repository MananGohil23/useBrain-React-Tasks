# useEffect notes

Answer in your own words, under each question. Short is fine. Some questions need you to look at the playground.

## 1. a: Before your fix, how many times did `Greeting appeared` print in the console while you typed? Explain the difference between no array, `[]` and `[name]`.

Before fixing, the 'Greeting appeared' message would print everytime there was a change in the input box. i.e it would print on every render. 
no array - the useEffect returns on every render
[] - the useEffect returns on the first render.
[name] - the useEffect returns on the first render and then again when ever 'name' changes

## 2. b: Before your fix, what did the Network tab show for the joke card? Why does a fetch need a cleanup function?

Before the fix, I saw multiple fetch() requests from joke.json. A lot of jokes were being rendered at once.
fetch() fucntion needs a cleanup function because it might still be running even after the component is un mounted. So the cleanup function makes it so that only one joke is rendered on the first render, and on every refresh a new joke is rendered.

## 3. c: Why did the slides start skipping after a few key presses? When exactly does a cleanup function run?

Because the addEventListener is not a React function, so react doesnt remove it. So without the cleanup function, every render just stacks another EventListener on top of the previous one. So after a few clicks there are a lot of Listeners that are simultaneously indexing the array. So the elements start skipping.

A cleanup function runs every time the useEffect returns. So in this case, it runs on every render i.e everytime I click on the right arrow key, it removes the previous listener and adds another one.
