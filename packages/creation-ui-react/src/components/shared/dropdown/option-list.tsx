import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import { optionListClasses } from '../../../classes'
import { useDropdown } from './context'
import { Option } from './option'

export const OptionsList = () => {
  const {
    floatingContext,
    props: { option, list },
    text,
    options,
    open,
    optionComponent: OptionComponent = Option,
    zIndex,
  } = useDropdown()

  return (
    <FloatingPortal>
      {open && (
        <FloatingFocusManager
          initialFocus={-1}
          context={floatingContext}
          visuallyHiddenDismiss
        >
          <ul
            {...list}
            className={optionListClasses({ open })}
            style={{ zIndex: zIndex?.list }}
          >
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
