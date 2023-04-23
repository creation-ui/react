import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import { optionListClasses } from './classes'
import { useAutocomplete } from './context'
import { Option } from './option'

export const OptionsList = () => {
  const {
    floatingContext,
    props: { option, list },
    text,
    options,
    open,
  } = useAutocomplete()

  return (
    <FloatingPortal>
      {open && (
        <FloatingFocusManager
          context={floatingContext}
          initialFocus={-1}
          visuallyHiddenDismiss
        >
          <ul {...list} className={optionListClasses({ open: true })}>
            {options.length ? (
              options.map((item, index) => (
                <Option {...option(item, index)} option={item} />
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
