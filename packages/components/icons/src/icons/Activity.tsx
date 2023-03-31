import { IconProps } from '../Types'

export const Activity = ({
  title,
  fill = 'currentColor',
  stroke = 'none',
  ...props
}: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.38462 4C4.28261 4 4.18478 4.04052 4.11265 4.11265C4.04052 4.18478 4 4.28261 4 4.38462V7.84615C4 8.39844 3.55228 8.84615 3 8.84615C2.44772 8.84615 2 8.39844 2 7.84615V4.38462C2 3.75218 2.25124 3.14564 2.69844 2.69844C3.14564 2.25124 3.75218 2 4.38462 2H7.84615C8.39844 2 8.84615 2.44772 8.84615 3C8.84615 3.55228 8.39844 4 7.84615 4H4.38462ZM15.1538 3C15.1538 2.44772 15.6016 2 16.1538 2H19.6154C20.2478 2 20.8544 2.25124 21.3016 2.69844C21.7488 3.14564 22 3.75217 22 4.38462V7.84615C22 8.39844 21.5523 8.84615 21 8.84615C20.4477 8.84615 20 8.39844 20 7.84615V4.38462C20 4.28261 19.9595 4.18478 19.8873 4.11265C19.8152 4.04052 19.7174 4 19.6154 4H16.1538C15.6016 4 15.1538 3.55228 15.1538 3ZM9.23577 6.15386C9.65444 6.15595 10.0275 6.41863 10.1706 6.8121L12.1453 12.2426L13.8748 8.78356C14.038 8.45711 14.3661 8.24551 14.7309 8.23151C15.0956 8.2175 15.4389 8.4033 15.6267 8.71627L17.4123 11.6923H20.3077C20.86 11.6923 21.3077 12.14 21.3077 12.6923C21.3077 13.2446 20.86 13.6923 20.3077 13.6923H16.8462C16.4949 13.6923 16.1694 13.508 15.9887 13.2068L14.849 11.3073L12.8944 15.2164C12.7157 15.5738 12.3415 15.7905 11.9426 15.7676C11.5437 15.7446 11.1967 15.4865 11.0602 15.111L9.21634 10.0403L8.09017 13.0434C7.94381 13.4337 7.57069 13.6923 7.15385 13.6923H3.69231C3.14002 13.6923 2.69231 13.2446 2.69231 12.6923C2.69231 12.14 3.14002 11.6923 3.69231 11.6923H6.46085L8.29444 6.80272C8.44145 6.41071 8.8171 6.15177 9.23577 6.15386ZM3 15.1538C3.55228 15.1538 4 15.6016 4 16.1538V19.6154C4 19.7174 4.04052 19.8152 4.11265 19.8873C4.18478 19.9595 4.28261 20 4.38462 20H7.84615C8.39844 20 8.84615 20.4477 8.84615 21C8.84615 21.5523 8.39844 22 7.84615 22H4.38462C3.75217 22 3.14564 21.7488 2.69844 21.3016C2.25124 20.8544 2 20.2478 2 19.6154V16.1538C2 15.6016 2.44772 15.1538 3 15.1538ZM21 15.1538C21.5523 15.1538 22 15.6016 22 16.1538V19.6154C22 20.2478 21.7488 20.8544 21.3016 21.3016C20.8544 21.7488 20.2478 22 19.6154 22H16.1538C15.6016 22 15.1538 21.5523 15.1538 21C15.1538 20.4477 15.6016 20 16.1538 20H19.6154C19.7174 20 19.8152 19.9595 19.8873 19.8873C19.9595 19.8152 20 19.7174 20 19.6154V16.1538C20 15.6016 20.4477 15.1538 21 15.1538Z"/>',
    }}
  />
)

export const tags = ['activity', 'account']
