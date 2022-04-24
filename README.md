# Proin-CV-assistant
With proin you have a free and open source solution to create your curriculum and switch between multiple designs.

Fill your data once and swtich between designs as you want.

``` 
This is software is currently in alpha, needs a lot of work. 
```
### Which technologies do we use?

1. Vitejs
2. React
3. Typescript (comming)
4. SASS
5. Material UI

## How to install it?
1. Clone the project
2. Run     ``` pnpm i ```
3. Run ``` pnpm run dev ```

Currently I'm using pnpm to install dependencies. You can use npm too but please don't submit the changes made in package.json.

If you need to install a new dependency, please use pnpm.

## Contributing
Please send your commits using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format
### How to create new templates?
it's pretty easy, here you have a little guide of how to do it:
1. Create a component (your template name) in ```src>components>templates```.

    1.1 Use ```UserContext``` to access to all the data stored
    ```
     {
          name,
          job,
          description,
          userImg,
          experience,
          contacts,
          skills,
          languages,
          education,
          achievements,
      } = useContext(UserContext);
    ```
3. Crete your template styles in ```src>components>templates```. **Use the same name as your component**

    3.1 Load this styles in your template component inline
    ```
    import styles from './SquareDesign.scss?inline'; 
    <style>{styles}</style>
    ```
5. Take a screenshot of your design and save it in ```src>assets>templates```. **Use the same name as your component**
6. Add this component in Home.jsx
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
**We recomend you to develop you templates ussing CSS grid and BEM metodology**
