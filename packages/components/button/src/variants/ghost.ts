import { tw } from '@spark-ui/internal-utils'

export const ghostVariants = [
  {
    intent: 'primary',
    design: 'ghost',
    class: tw([
      'text-primary',
      'enabled:hover:bg-primary/dim-5',
      'enabled:active:bg-primary/dim-5',
      'focus-visible:bg-primary/dim-5',
    ]),
  },
  {
    intent: 'secondary',
    design: 'ghost',
    class: tw([
      'text-secondary',
      'enabled:hover:bg-secondary/dim-5',
      'enabled:active:bg-secondary/dim-5',
      'focus-visible:bg-secondary/dim-5',
    ]),
  },
  {
    intent: 'success',
    design: 'ghost',
    class: tw([
      'text-success',
      'enabled:hover:bg-success/dim-5',
      'enabled:active:bg-success/dim-5',
      'focus-visible:bg-success/dim-5',
    ]),
  },
  {
    intent: 'alert',
    design: 'ghost',
    class: tw([
      'text-alert',
      'enabled:hover:bg-alert/dim-5',
      'enabled:active:bg-alert/dim-5',
      'focus-visible:bg-alert/dim-5',
    ]),
  },
  {
    intent: 'danger',
    design: 'ghost',
    class: tw([
      'text-error',
      'enabled:hover:bg-error/dim-5',
      'enabled:active:bg-error/dim-5',
      'focus-visible:bg-error/dim-5',
    ]),
  },
  {
    intent: 'info',
    design: 'ghost',
    class: tw([
      'text-info',
      'enabled:hover:bg-info/dim-5',
      'enabled:active:bg-info/dim-5',
      'focus-visible:bg-info/dim-5',
    ]),
  },
  {
    intent: 'neutral',
    design: 'ghost',
    class: tw([
      'text-neutral',
      'enabled:hover:bg-neutral/dim-5',
      'enabled:active:bg-neutral/dim-5',
      'focus-visible:bg-neutral/dim-5',
    ]),
  },
  {
    intent: 'surface',
    design: 'ghost',
    class: tw([
      'text-surface',
      'enabled:hover:bg-surface/dim-5',
      'enabled:active:bg-surface/dim-5',
      'focus-visible:bg-surface/dim-5',
    ]),
  },
] as const
