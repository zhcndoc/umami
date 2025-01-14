import * as React from 'react';
import type { SVGProps } from 'react';
const SvgProperty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    viewBox="0 0 512.002 512.002"
    {...props}
  >
    <path d="M225.999 173.502c36.219 0 66.522-25.808 73.491-60h91.509v30h30v-30h30v60h30v-90H299.49c-6.968-34.192-37.271-60-73.491-60-41.355 0-75 33.645-75 75s33.645 75 75 75m0-120c24.813 0 45 20.187 45 45s-20.187 45-45 45-45-20.187-45-45 20.187-45 45-45m275.396 193.241c-29.24-29.239-76.818-29.24-106.057 0l-10.625 10.625c-7.58-14.188-22.535-23.867-39.714-23.867h-52.925c-16.956-18.908-41.497-30-67.075-30-27.806 0-54.383 13.104-71.325 35.112l-75.038 75.038-15.002-15.001L0 362.285 126.214 488.5l63.635-63.635-15-15 26.363-26.363H385.85L512.002 257.35zm-375.181 199.33-83.788-83.788 21.208-21.209 83.788 83.789zm247.21-92.571H188.786l-35.15 35.15-53.787-53.787 76.51-76.51c.11-.092 17.428-24.853 48.64-24.853 35.265 0 50.739 28.433 52.5 30h67.5c8.271 0 15 6.729 15 15s-6.729 15-15 15h-90v30h90c17.046 0 31.908-9.527 39.542-23.536l32.009-32.009c13.825-13.824 34.485-16.754 51.206-8.789z" />
  </svg>
);
export default SvgProperty;