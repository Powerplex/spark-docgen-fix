import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const AddOutline = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M11.9999 7.44118C12.5571 7.44118 13.0088 7.89291 13.0088 8.45015V11.5909H16.1498C16.707 11.5909 17.1588 12.0426 17.1588 12.5999C17.1588 13.1571 16.707 13.6088 16.1498 13.6088H13.0088V16.7496C13.0088 17.3068 12.5571 17.7585 11.9999 17.7585C11.4426 17.7585 10.9909 17.3068 10.9909 16.7496V13.6088H7.85038C7.29314 13.6088 6.84141 13.1571 6.84141 12.5999C6.84141 12.0426 7.29314 11.5909 7.85038 11.5909H10.9909V8.45015C10.9909 7.89291 11.4426 7.44118 11.9999 7.44118Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.15867 2.59985C4.30962 2.59985 2 4.90947 2 7.75852V17.4412C2 20.2902 4.30962 22.5999 7.15867 22.5999H16.8413C19.6904 22.5999 22 20.2902 22 17.4412V7.75852C22 4.90947 19.6904 2.59985 16.8413 2.59985H7.15867ZM4.01793 7.75852C4.01793 6.02394 5.42409 4.61778 7.15867 4.61778H16.8413C18.5759 4.61778 19.9821 6.02394 19.9821 7.75852V17.4412C19.9821 19.1758 18.5759 20.5819 16.8413 20.5819H7.15867C5.42409 20.5819 4.01793 19.1758 4.01793 17.4412V7.75852Z"/>',
      }}
    />
  )
)

AddOutline.displayName = 'AddOutline'

export const tags = ['add-outline', 'images']
