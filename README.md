# Proin-CV-assistant
With proin you have a free and open source solution to create your curriculum and switch between multiple designs.

Fill your data once and swtich between designs as you want.

``` 
This is software is currently in alpha, needs a lot of work. 
```
## How to install it?
1. Clone the project
2. Run     ``` npm i ```
3. Run ``` npm run dev ```

Currently I'm using pnpm to install dependencies, You can use it too if you want.

## Which technologies do we use?

1. Vitejs
2. React
3. Typescript (comming)
4. SASS
5. Material UI

# Contributing
Please send your commits using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format
## How to create new templates?
Create templates is very easy, here you have how I do it:
1. Create a component (your template name) in ```src>components>templates```
2. Crete your template styles in ```src>components>templates```. **Use the same name as your component**
3. Take a screenshot of your design and save it in ```src>assets>templates```. **Use the same name as your component**
4. Add this component in Home.jsx
```
<a className='designs__item dim' href="/preview?design=YOUR_TEMPLATE_NAME">
  <img className='designs__item__img' src={YOUR_TEMPLATE_IMG} alt="YOUR_TEMPLATE_NAME" />
</a>
```
5. Add your component name in Preview.jsx
```
 case 'YOUR_TEMPLATE_NAME':
            return <YOUR_TEMPLATE_NAME />;
```

We recomend you to develop you templates with css grid and ussing the BEM metodology
