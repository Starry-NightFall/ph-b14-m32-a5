# Dev Stack

Build a practical development stack by exploring popular frontend, backend, database, language, and DevOps technologies. Add your choices to a personal stack, compare the details, and remove items whenever your plan changes.

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- Lucide React
- React Toastify
- JSON data

## Features

1. **Explore technology cards**: View each technology's icon, badge, category, description, difficulty, and rating.
2. **Build a personal stack**: Add technologies to the sidebar, prevent duplicate selections, remove individual items, or clear the entire stack.
3. **Responsive and interactive UI**: Use the site on mobile, tablet, or desktop with loading feedback and toast notifications for stack actions.


## React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like elements inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like in a clear and readable way.

### 2. What is the difference between props and state?

Props are values passed from a parent component to a child component. State is data managed inside a component that can change and update the screen.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook stores changing data in a component. This project uses it in `TechnologiesContent` to store the technologies selected in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders, such as fetching data from an API. This project does not use `useEffect` for loading because it uses React's `use` hook with `Suspense` to read the JSON promise and show a loading fallback.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each list item. This allows React to update only the items that changed instead of rebuilding the whole list.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition. In `TechStack`, the empty message is shown when there are no selected technologies:

```tsx
{
  selectedTechnologies.length === 0 ? <p>Your stack is empty. Add technologies to get started.</p> : <div>Selected technologies are shown here.</div>;
}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props. A child can send information back by calling a function that the parent passes as a prop. In this project, `TechnologiesContent` passes `addToStack` to `TechCards`, and a card calls that function when its button is clicked.

## Project Structure

```text
src/
├── components/
│   ├── Banner.tsx
│   ├── Navbar.tsx
│   ├── TechCard.tsx
│   ├── TechCards.tsx
│   ├── Technologies.tsx
│   └── TechStack.tsx
├── types/
│   └── type.ts
└── App.tsx
```

## Links

GitHub Repository: https://github.com/Starry-NightFall/ph-b14-m32-a5

Live Website: https://dev-stack-by-siam.netlify.app/
