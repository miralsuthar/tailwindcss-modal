
## How to use

update your tailwind.config.js file with this code

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwindcss-modal/**/*.{js,mjs,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```


src/MyComponent.jsx

```
import { TailwindcssModal, useModal } from "tailwindcss-modal";

function App() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div className="w-screen">
      <button
        onClick={onOpen}
        className="font-semibold text-lg w-fit bg-red-400 px-3 py-1 rounded-sm"
      >
        Hello
      </button>
      <TailwindcssModal
        className=""
        isOpen={isOpen}
        onClose={onClose}
        closeButton
        closeOnBackdropClick
      >
        <h1 className="text-xl font-bold">Tailwind css Modal</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          excepturi harum tempore aliquam dolorum corrupti eum quam distinctio
          temporibus est.
        </p>

        <p className="text-center mt-5">build with 💙 by miral.</p>
      </TailwindcssModal>
    </div>
  );
}

export default App;
```

## Props

| name   | type  | required | description     |
|--------|-------|----------|-----------------|
| isOpen | boolean| isRequired |This props is passed to see if modal is open or not.|
| onClose | function | isRequired |This function is used to close the modal if it is open.|
| closeButton | boolean | not required | This boolean is passed to show the close in modal. |
| closeOnBackdropClick | not required |boolean | This boolean is passed to close the modal when we click on backdrop of modal.|
| className | string | not required |This prop is passed to add additional style to your modal. |


