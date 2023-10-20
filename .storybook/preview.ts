import { Preview } from '@storybook/angular';

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        // docs: {
        //     // page: () => (
        //     //     <>
        //     //         <Title />
        //     //     <Subtitle />
        //     //     <Description />
        //     //     <Primary />
        //     //     <Controls />
        //     //     <Stories />
        //     //     </>
        //     // ),
        // },
    },
};

export default preview;
