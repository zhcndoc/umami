import * as React from 'react';
import type { SVGProps } from 'react';
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M440.594 59.317c-42.571-42.5-111.857-42.5-154.429.071-34 34.071-41.643 85.928-19.428 128L50.38 403.674c-14.715 14.785-14.357 38.286 0 52.643 14.5 14.5 38.071 14.5 52.571-.072l23.785-23.714 49.929 49.928a7.112 7.112 0 0 0 10.071 0l29.643-29.643c2.785-2.785 2.785-7.285 0-10.143l-20.571-20.5 21.429-21.429 20.5 20.571c2.786 2.786 7.357 2.786 10.143 0l29.572-29.572a7.112 7.112 0 0 0 0-10.071l-49.928-49.928 94.214-94.214c40.428 16.786 87.643 7.5 118.857-23.714 42.57-42.571 42.57-111.856-.001-154.499zm-44.786 109.714c-17.857 17.857-46.929 17.857-64.857 0-17.857-17.857-17.786-46.929.072-64.786 17.714-17.786 46.714-18.214 64.786-.072 17.999 17.858 17.999 46.858-.001 64.858z" />
  </svg>
);
export default SvgKey;