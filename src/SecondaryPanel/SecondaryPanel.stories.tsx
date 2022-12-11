import React from 'react'

import { SecondaryPanel } from './SecondaryPanel'

export default {
  title: 'SecondaryPanel',
  component: SecondaryPanel
}

export const Component: React.FC = () => <SecondaryPanel main="Компонент" secondary="Я самостоятельный компонент" gender="male"/>
