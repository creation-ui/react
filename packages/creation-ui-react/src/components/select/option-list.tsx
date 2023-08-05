import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import { optionListClasses } from '../../classes'
import { useSelect } from './context'
import { Option } from './option'

export const OptionsList = () => {
  const {
    floatingContext,
    props: { option, list },
    text,
    options,
    open,
    optionComponent: OptionComponent = Option,
  } = useSelect()

  return (
    <FloatingPortal>
      {open && (
        <FloatingFocusManager
          initialFocus={-1}
          context={floatingContext}
          visuallyHiddenDismiss
        >
          <ul {...list} className={optionListClasses({ open })}>
            {options.length ? (
              options.map((item, index) => (
                <OptionComponent {...option(item, index)} option={item} />
              ))
            ) : (
              <li className={'py-2 px-3 w-full text-center'}>
                {text.notFound}
              </li>
            )}
          </ul>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  )
}
