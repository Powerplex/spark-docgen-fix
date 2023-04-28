import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const ShoeSize = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.00512 6.33749C10.8668 6.39659 11.4296 8.80741 11.5238 9.29003C11.8177 10.803 11.7099 12.7631 11.2116 14.9648C11.1767 15.2641 11.4106 16.252 11.4129 16.2611C11.6628 17.1945 11.6316 17.9158 11.3217 18.403C11.0734 18.7932 10.6359 19.0477 10.0146 19.1599C8.90486 19.3546 8.0853 18.8379 7.64173 17.6582C7.36525 16.9241 7.29082 16.1126 7.25664 15.483C7.21866 15.1496 7.03029 14.6852 6.81154 14.1473C6.49861 13.3775 6.10972 12.4214 6.02921 11.4978C5.87882 9.77189 6.31404 8.21493 7.22322 7.22545C7.74882 6.65343 8.37925 6.33749 9.00512 6.33749ZM10.5128 15.4063L8.03062 15.7685L7.96074 15.7783L7.96606 15.8488C8.06328 17.214 8.37849 17.9166 8.90106 18.2977C9.09322 18.4393 9.31349 18.5098 9.55731 18.5098C9.66592 18.5098 9.7791 18.4954 9.89683 18.4674C10.3115 18.3939 10.588 18.2461 10.7422 18.0143C11.0042 17.6211 10.8744 17.0483 10.7232 16.3861L10.6944 16.2596C10.6176 15.9209 10.5462 15.7836 10.5197 15.4859L10.5128 15.4063ZM15.0035 4.19995C15.621 4.19995 16.2499 4.51513 16.7763 5.08791C17.6855 6.07663 18.1207 7.63435 17.9711 9.36026C17.8905 10.2831 17.5009 11.2392 17.1887 12.0082C16.97 12.5469 16.7808 13.0113 16.7421 13.35C16.7087 13.9751 16.6342 14.7865 16.3585 15.5207C15.915 16.6996 15.0954 17.2193 13.9789 17.0208C13.3636 16.9102 12.9261 16.6556 12.6778 16.2654C12.3679 15.7783 12.3375 15.057 12.5874 14.1236C12.5897 14.1145 12.8228 13.1265 12.7871 12.8189C12.2904 10.624 12.1825 8.66475 12.4765 7.15325C12.5699 6.66987 13.1327 4.25981 14.9929 4.19995H15.0035ZM13.4859 13.2519L13.4798 13.3314C13.4533 13.6315 13.3819 13.7841 13.3051 14.1228L13.2763 14.2493C13.1259 14.9115 12.996 15.4835 13.2588 15.8768C13.4122 16.1086 13.6887 16.2563 14.1027 16.3291C14.2204 16.3571 14.3343 16.3715 14.4422 16.3715C14.686 16.3715 14.9055 16.301 15.0984 16.1601C15.6218 15.779 15.9362 15.0596 16.0342 13.6944L16.0395 13.6239L13.4859 13.2519ZM9.0036 7.04134H8.98917C8.38381 7.11786 7.87567 7.43608 7.47843 7.98688C6.68014 9.09683 6.56317 10.8152 6.79255 11.941C6.84127 12.18 7.06969 12.8237 7.31564 13.504L7.42981 13.8192C7.63565 14.3859 7.82934 14.9216 7.88175 15.1171L7.89922 15.183L10.5356 14.7973L10.547 14.7466C11.2481 11.6175 11.0696 8.81726 10.092 7.61336C9.78897 7.23909 9.41527 7.04134 9.0036 7.04134ZM15.002 4.9038H14.9891C14.5857 4.9038 14.2113 5.10079 13.9075 5.47507C12.9299 6.67896 12.7514 9.47921 13.4525 12.609L13.4639 12.6598L16.0334 13.0356L16.1003 13.0454L16.1178 12.9803C16.1702 12.7841 16.3638 12.2499 16.5689 11.684C16.8553 10.8953 17.1507 10.08 17.2069 9.80349C17.4363 8.67763 17.3201 6.96005 16.5211 5.8501C16.1246 5.29853 15.6165 4.98032 15.002 4.9038Z"/>',
      }}
    />
  )
)

ShoeSize.displayName = 'ShoeSize'

export const tags = ['shoe-size', 'criteria', 'mode']
