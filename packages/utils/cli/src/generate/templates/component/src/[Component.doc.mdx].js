import { pascalCase } from 'pascal-case'

export default ({ name, description }) => {
  const componentName = pascalCase(name)

  return `import { ArgsTable, Meta, Canvas } from '@storybook/addon-docs'

import { ${componentName} } from '.'

import * as stories from './${componentName}.stories'

<Meta of={stories} />

# ${componentName}

${description}

## Install

\`\`\`
npm install @spark-ui/${name}
\`\`\`

## Import

\`\`\`
import { ${componentName} } from "@spark-ui/${name}"
\`\`\`

## Props

<ArgsTable of={${componentName}} />

## Variants
<Canvas of={stories.Default} />
`
}
