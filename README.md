## Description

This demonstration project showcases my development skills using [Next.js](https://nextjs.org) which is based in React framework bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 

The site displays a carefully designed home page and a router link that leads to the page that searches characters of one of the most popular contemporary cartoons aired as of the date called Rick and Morty.

Character data is sourced from [`Rick and Morty API`](https://rickandmortyapi.com) and the sites requirements are indicated in this [Link](https://docs.hireoverseas.com/Frontend-Developer-HW-Assignment-257eb907ec1e80119d7df1ec49b5ebb4)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Sample test script is also available in this project using Jest and React Testing Library. The script is available under __test__ folder. To run it, type:

```bash
npm test
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

This project is also deployed in a hosting site called [Render](https://render.com/) and is now live. Visit it by clicking on this site https://rickandmortycharacterexplorer-subrado.onrender.com

## Features
These are the primary features of the web app. 
- Home page with navigation and welcome note.
- Router link to a character search page.
- Character search functionality using Rick and Morty API as provided.
- Filtering characters by name with special character validation.
- Display of character cards (with animation, consistent sizing, and Material UI styling).
- Responsive design using Tailwind CSS that caters desktop and mobile devices.
- Transparent navigation and footer components with resource links.
- Custom hooks for data fetching and input validation.
- Integration and unit testing setup with Jest and React Testing Library.


## Technology Stack

The technology stack and libraries used in this app are as follows:

- Next.js (_React framework for SSR/SSG and routing_)
- React (_UI library_)
- TypeScript (_For type safety_)
- Tailwind CSS (_Utility-first CSS framework_)
- Material UI (_React UI component library. Used buttons and card only_)
- Rick and Morty API (_External data source_)
- Jest and React Testing Library (_For testing modules_)

Other dependencies may include Next.js built-in features and custom hooks for fetching and validation. 


## Structure and Design

The structure of the project is based on the Next.js built-in boiler plate added with extra folders for custom components. All the main components such as navigation, footer, and main pages are added in the app folder. This arrangement is done for optimization and maintainability purposes.

Here's the mapping focused only on folders and files that have significant changes:

- public (_Main storage for media in this case photos_)
- src (_Main source folder_)
    - __tests__
        - **<ins>structure.test.tsx</ins>** (_Contains sample testing scripts handled by Jest and React Testing Library._)
    - app (_For main components_)
        - characters
            - **<ins>CharacterCard.tsx</ins>** (_Contains component card to display single character information._)
            - **<ins>page.tsx</ins>** (_Contains main component for /characters router._)
        - **<ins>footer.tsx</ins>** (_Footer component that contains Rick image and resources._)
        - **<ins>globals.css</ins>** (_Built-in global styles_)
        - **<ins>layout.tsx</ins>** (_Built-in layout for font and header metadata._)
        - **<ins>navigation.tsx</ins>** (_Top navigation component_)
        - **<ins>page.tsx</ins>** (_Main home page_)
    - custom (_Custom folder for special ui components._)
        - **<ins>TrasparentBtn.tsx</ins>** (_Transparent styled button_)
    - hooks
        - **<ins>useFetch.tsx</ins>** (_A hook created to get fetch data from a server, inputs the API and returns the data and error handler._)
        - **<ins>useInputValidation.tsx</ins>** (_This hook filters out special characters. Can be customizable to include other characters or keyboard commands._)
- **<ins>babel.config.ts</ins>** (_Converts JSX and typescript into format that Jest can understand_)
- **<ins>jest.config.ts</ins>** (_Jest configuration_)
- **<ins>jest.setup.ts</ins>** (_Jest setup_)

As for the design, initial boiler plate created is preconfigured with styles and layout as indicated in globals.css and layout.tsx. 

### Home Page

In this page (page.tsx), I've deleted some of the pre created elements and leave only tailwind's flex classes which serves as the main layout. I've chosen this since it already supports responsive screen sizing. There are three sections in the page and each is separated Tailwind's flex and row-start-[n]. These are Navigation, Main and Footer. 

Navigation contains a route to the character search page and the footer contains links for resources. Main for the header image and welcome note.  

### Character Page

This is the main search functionality. Using the useFetch hook, I've created a state to get character data from the API and display them initially by iterating the card component (CharacterCard.tsx). The maximum of 14 Cards are initially displayed to represent the first page. This is done using the splice method. 

The page still uses tailwind's flex capabilities derived from the main home page with exception of card iteration that uses the Card Material UI component. The search input is located on top center after the "Characters" text. I've added a special character filter which is supported by the hook called useInputValidation. I've also added a simple animation for the cards.

Once a letter is typed in, the input data will first be evaluated by useInputValidation and if it is valid, it will be sent back and fed to the filter method that filters the data. And it will be displayed in the screen.

The current implementation is assumed to apply only to data with few entries. To make this more scalable please check the recommendations.

## Optimization and Scalability Recommendations

- For optimized page renders, use only few UI libraries and avoid nested loops.

- For multiple children, use only props with up to second level. Avoid prop drilling. For deeper components use either useContext or third party third party state management such as Redux or Zustand.

- For CSS styling dependent libraries, separate it and put them in a CDN. This will lessen size of the project

- To make this scalable for larger datasets, the filter characted must be transferred from the use of a mare filter method to API by adding a filter parameter. 

- Use lazy loading for images especially on dealing larger data sets.

- Use memoization techniques to lessen rerenders, especially useMemo, and useCallback. A third party data management hook called useQuery (Tanstack) is also advantageous in dealing with massive datasets.
   

## Testing

Here are some recommendations to test the app:

1. Manual Testing
    - Click through navigation links (Home, Characters) and verify page transitions.
    - Try filtering characters and check that the results update and error messages display correctly.
    - Test edge cases (empty filter, special characters, no results).

2. Unit & Integration Testing
    - Use [Jest](https://jestjs.io/) and [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/) for component and hook tests.
    - Example: Test that CharacterCard renders character info, and useInputValidation blocks special characters.
    - These libraries are added in this app.

3. End-to-End Testing (_Suggestion_)
    - Use [Cypress](https://www.cypress.io/) to automate user flows (navigation, filtering, error handling).

4. Accessibility & Responsiveness
    - Check with browser dev tools for mobile layouts.
    - Use Lighthouse Google Chrome plugin for accessibility audits.

5. API & Network Testing
    - Simulate slow or failed API responses to verify error handling.

Start with manual testing, then add automated tests for critical components and flows.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
