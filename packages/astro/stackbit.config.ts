import { defineStackbitConfig } from '@stackbit/types';

const config = defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'astro',
    nodeVersion: '18',
    contentSources: [],
});

export default config;
