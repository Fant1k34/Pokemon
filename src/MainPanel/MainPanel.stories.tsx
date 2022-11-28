import React from 'react';

import { MainPanel } from './MainPanel';

export default {
    title: 'MainPanel',
    component: MainPanel,
};

export const Component = () => <MainPanel main="Компонент" secondary="Я самостоятельный компонент" gender="male"/>;
