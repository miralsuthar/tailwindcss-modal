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
