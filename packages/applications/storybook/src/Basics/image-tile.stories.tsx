// import type { Meta, StoryObj } from '@storybook/react';
// import { ImageTile as ImageTileComponent } from '@bashtex/blocks/image-tile';

// const meta = {
//   title: 'Blocks / ImageTile',
//   component: ImageTileComponent,
//   parameters: {
//     layout: 'centered',
//   },
//   argTypes: {},
//   args: {
//     imgDesktop: {
//       url: 'https://lewisbritton.com/images/general/home.jpg',
//       alt: 'intro-tile-image',
//     },
//     imgMobile: {
//       url: 'https://lewisbritton.com/images/general/home-mobile.jpg',
//       alt: 'intro-tile-mobile-image',
//     },
//     gradient: {
//       opacity: 40,
//     },
//     heading: 'Welcome to BrittonsBashRC',
//     subHeading: 'Where autism aligns at its finest',
//     body: 'Congratulations, you’ve found yourself in BrittonsBashRC. Rogue one. If you ended up here through any other path then my personal recommendation, I would love to know how. What is the point of this website? Well knowing me, I could be offed, booked, locked-up, fall off a Munro top, or fire too many bullets, at any moment. So, my thought was, why not put everything that’s ever gone through my mind right here? Head on with it at your own risk, and either follow the links to the right for my main projects (and Projects), or keep reading to dive into the deeper and darker realms.',
//     ctas: [
//       { content: 'Instant Gram', href: '#/blog/instant-gram' },
//       { content: 'Sport', href: '#/blog/sport' },
//       { content: 'BritonsFoodRC', href: '#/blog/brittons-foodrc' },
//       { content: 'Weather', href: '#/utils/weather' },
//       { content: 'Conquest', href: '#/utils/conquest' },
//     ],
//     invert: true,
//   },
// } as Meta<typeof ImageTileComponent>;

// export const ImageTile: StoryObj<typeof meta> = {
//   args: {},
// };

// export default meta;

// TODO: remove temp button replication once blocks are built
import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponentTemp } from '@bashtex/basics/button';
import { fn } from '@storybook/test';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const meta = {
  title: 'BasicsTemp / ButtonTemp',
  component: ButtonComponentTemp,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'clear', 'solid', 'inverse'],
    },
    typeVariant: {
      control: 'select',
      options: ['t1', 't2', 'h1', 'h2', 'h3', 'h4', 'body', 'caption', 'footnote', 'tiny'],
    },
    typeColor: {
      control: 'select',
      options: [
        'black',
        'darkerGrey',
        'darkGrey',
        'mediumGrey',
        'lightGrey',
        'lighterGrey',
        'lightBlue',
        'white',
        'transparent',
      ],
    },
    content: { control: 'text' },
    subContent: { control: 'text' },
    subContentTop: { control: false },
    icon: { control: false },
    value: { control: 'text' },
    func: { control: false },
    link: { url: { control: 'text' } },
    space: { control: 'boolean' },
    width: { control: 'select' },
    padding: { control: 'select' },
    transition: { control: 'boolean' },
  },
  args: {
    typeVariant: 'body',
    typeColor: 'white',
    content: 'Button',
    func: fn(),
    width: 'default',
    padding: 'coarse',
  },
} as Meta<typeof ButtonComponentTemp>;

export const Default: StoryObj<typeof meta> = {
  args: { variant: 'default' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponentTemp {...args} />
      <ButtonComponentTemp {...args} subContentTop />
    </div>
  ),
};

export const Solid: StoryObj<typeof meta> = {
  args: { variant: 'solid' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponentTemp {...args} />
      <ButtonComponentTemp {...args} subContentTop />
    </div>
  ),
};

export const Clear: StoryObj<typeof meta> = {
  args: { variant: 'clear' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponentTemp {...args} />
      <ButtonComponentTemp {...args} subContentTop />
    </div>
  ),
};

export const Inverse: StoryObj<typeof meta> = {
  args: { variant: 'inverse' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponentTemp {...args} />
      <ButtonComponentTemp {...args} subContentTop />
    </div>
  ),
};

export const Spaced: StoryObj<typeof meta> = {
  args: {
    variant: 'default',
    width: 'full',
  },
  render: ({ ...args }) => {
    const [handleIcon, setHandleIcon] = useState(<FontAwesomeIcon icon={faChevronDown} />);

    return (
      <div style={{ width: '1000px' }}>
        <ButtonComponentTemp
          {...args}
          func={() => setHandleIcon(<FontAwesomeIcon icon={faChevronUp} />)}
          icon={handleIcon}
        />
      </div>
    );
  },
};

export default meta;
