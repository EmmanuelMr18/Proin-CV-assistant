# Proin-CV-assistant

With Proin-CV-assistant you have a free and open source solution to create your curriculum and switch between multiple designs.

Fill your data once and switch between designs as you want.

```
This is software is currently in alpha
```

### Which technologies do we use?

1. Vitejs
2. React
3. Typescript (on coming)
4. SASS
5. Material UI

## How to install it?

1. Clone the project `git clone git@github.com:EmmanuelMr18/Proin-CV-assistant.git`
2. Install deps `pnpm i`
3. Run your dev environment `pnpm run dev`

We are using [pnpm](https://pnpm.io/) as package manager. You can use npm, but please don't submit the changes made in package.json
If you need to install a new dependency, you must use pnpm.

## Contributing

Please send your commits using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format

### How to create new templates?

It's pretty easy, here you have a little guide of how to do it:

**You must use _YOUR_TEMPLATE_NAME_ to name your component, styles, and template screenshot**

1. Create a component in `src>components>templates>YOUR_TEMPLATE_NAME.jsx`.
   1.1 Use `UserContext` to access to all the user's data stored
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
2. Create your template styles in `src>components>templates>YOUR_TEMPLATE_NAME.scss`.

   _We recommend you to develop your templates using CSS grid and BEM methodology_

3. Load styles in your component. **Load inline your styles**
   ```
   import styles from './SquareDesign.scss?inline';
   <style>{styles}</style>
   ```
4. Take a screenshot of your design and save it in `public>assets>templates>YOUR_TEMPLATE_NAME.png`.

   **Your image must be .png**

5. Add _YOUR_TEMPLATE_NAME_ to the template list in `src>data>templates`
   ```
   export  const  templateList  = ['BasicDesign',  'SquareDesign', ... , YOUR_TEMPLATE_NAME];
   ```
