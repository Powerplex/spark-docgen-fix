import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const MailOpenFill = React.forwardRef(
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
          '<path d="M19.5333 20.1997C20.9333 20.1997 22 19.0479 22 17.536V9.53604C21.9167 6.60241 19.775 4.19971 16.9833 4.19971H8.58333C9.575 4.2897 10.475 4.64065 11.2167 5.27057C11.55 5.54054 11.875 5.8915 12.125 6.34144C12.6167 7.14234 12.95 8.12322 12.95 9.0951V17.536C12.95 17.716 12.95 17.896 12.8667 18.067H10.4C10.7333 18.067 10.8917 17.797 10.8917 17.536V9.0861C10.8917 7.66427 9.825 6.51242 8.58333 6.33244H8.33333C6.93333 6.33244 5.78333 7.57429 5.78333 9.0861V17.527C5.78333 17.797 6.03333 18.058 6.275 18.058H2.99167C2.41667 18.058 2 18.4989 2 19.1288C2 19.7588 2.40833 20.1997 2.99167 20.1997M19.2083 14.4224C19.2083 14.9534 18.8 15.4933 18.2167 15.4933C17.6333 15.4933 17.225 15.0524 17.225 14.4224V13.2706H14.5083C13.9333 13.2706 13.5167 12.8296 13.5167 12.1997C13.5167 11.5698 14.0083 11.1288 14.5083 11.1288H19.2V14.4134L19.2083 14.4224Z"/>',
      }}
    />
  )
)

MailOpenFill.displayName = 'MailOpenFill'

export const tags = ['mail-open-fill', 'delivery']
