import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TailwindcssModal, useModal } from '../src';

export default {
  title: 'TailwindcssModal',
  component: TailwindcssModal,
} as ComponentMeta<typeof TailwindcssModal>;

const Template: ComponentStory<typeof TailwindcssModal> = args => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <button
        className="text-black mt-52 bg-red-400 px-2 py-1 rounded-md"
        onClick={onOpen}
      >
        open modal
      </button>
      <TailwindcssModal
        {...args}
        isOpen={isOpen}
        onClose={onClose}
        closeButton={true}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem
          quos nemo pariatur laudantium sunt quisquam non ipsam, ut dolore.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
          consectetur.
        </p>
      </TailwindcssModal>
    </>
  );
};

const Primary = Template.bind({});
Primary.args = {};

export { Primary };
