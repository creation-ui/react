import { Card, Cards } from '@components/card'
import { Icon } from '@creation-ui/react'

const URL = '/docs/components/core'

const getTitle = (id: string) =>
  id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const getUrl = (id: string) => [URL, id].join('/')

export const cards = [
  {
    title: 'clear-button',
    icon: <Icon icon='clear' />,
  },
  {
    title: 'dark-mode-toggle',
    icon: <Icon icon={'light_mode' as any} />,
  },
  {
    title: 'dropdown-chevron',
    icon: <Icon icon='expand_more' />,
  },
  {
    title: 'error-text',
    icon: <Icon icon='warning' />,
  },
  {
    title: 'loader',
    icon: <Icon icon={'restart_alt' as any} />,
  },
  {
    title: 'loading-overlay',
    icon: <Icon icon='check_box_outline_blank' />,
  },
  {
    title: 'select-option',
    icon: <Icon icon={'checklist_rtl' as any} />,
  },
  {
    title: 'theme',
    icon: <Icon icon='format_paint' />,
  },
]

export const CardsList = () => (
  <Cards>
    {cards.map(({ title, ...card }) => (
      <Card
        {...card}
        key={title}
        href={getUrl(title)}
        title={getTitle(title)}
      />
    ))}
  </Cards>
)
