
import React from 'react'

const PairMeLogo = ({color}) => {
  return (
	<div>
	  <svg className={`w-24 md:w-48 fill-current text-${color}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 319.7">
	<path d="M268.7 58.3c-55.2-55.2-145-55.2-200.2 0-55.2 55.2-55.2 145 0 200.2 55.2 55.2 145 55.2 200.2 0 55.1-55.2 55.1-145 0-200.2zm-7.2 193c-51.2 51.2-134.6 51.2-185.8 0s-51.2-134.6 0-185.8c51.2-51.2 134.6-51.2 185.8 0 51.2 51.2 51.2 134.6 0 185.8z"/>
	<path d="M252.2 74.8c-12.6-12.6-27.3-21.8-43-27.5.5 1 1 2.1 1.3 3.3 9.3 27.9 2.8 60-19.4 82.2-7.3 7.3-15.6 12.9-24.5 16.8-3.8 1.7-8.1-.8-8.8-4.9-1.4-9-5.6-17.7-12.5-24.6-7.7-7.7-17.5-12-27.5-12.9-5.4-.5-7.8-6.9-4-10.7L169.3 41c.3-.3.6-.6.9-.8-30.8-.4-61.7 11.1-85.2 34.6-46.2 46.2-46.2 121.1 0 167.3 12.6 12.6 27.3 21.8 43 27.5-.5-1-1-2.1-1.3-3.3-9.3-28-2.8-60 19.4-82.3 7.3-7.3 15.6-12.9 24.5-16.8 3.8-1.7 8.1.8 8.8 4.9 1.4 9 5.6 17.7 12.5 24.6 7.7 7.7 17.5 12 27.5 12.9 5.4.5 7.9 6.9 4 10.7l-55.5 55.5c-.3.3-.6.5-.8.8 30.8.4 61.7-11.1 85.2-34.6 46.1-46.1 46.1-121-.1-167.2zm-99.7 79.4c-.1 2-.4 4.1-.9 6.1-1.5 6.9-5 13.5-10.4 18.9-15.2 15.2-39.8 15.2-55.1 0-10.6-10.6-13.8-25.9-9.6-39.3.6-2 1.4-3.9 2.3-5.7 1.9-3.6 4.3-7 7.3-10.1 15.2-15.2 39.9-15.2 55.1 0 8.3 8.3 12 19.3 11.3 30.1zm105.8 28.5c-1.8 3.6-4.2 7-7.3 10.1-15.2 15.2-39.9 15.2-55.1 0-8.3-8.3-12-19.3-11.3-30.2.1-2 .4-4.1.9-6.1 1.6-6.9 5-13.5 10.4-18.9 15.2-15.2 39.9-15.2 55.1 0 10.6 10.6 13.8 25.9 9.6 39.3-.6 2-1.3 3.9-2.3 5.8zM417.7 187.5v47.8h-33V99h53.4c16.2 0 28.5 4 37 12.1 8.5 8 12.7 18.9 12.7 32.5 0 8.5-1.9 16-5.7 22.7-3.8 6.6-9.4 11.8-16.9 15.6-7.5 3.8-16.5 5.7-27.2 5.7h-20.3zm36.7-44c0-12-6.6-17.9-19.9-17.9h-16.8v35.5h16.8c13.3 0 19.9-5.9 19.9-17.6zM566.3 132c5.9 3.7 10.3 8.8 13.1 15.2v-19.5h32.8v107.6h-32.8v-19.5c-2.8 6.4-7.2 11.5-13.1 15.2-5.9 3.7-13 5.6-21.2 5.6-8.9 0-16.8-2.2-23.8-6.7-7-4.4-12.5-10.8-16.6-19.2-4.1-8.4-6.1-18.1-6.1-29.3 0-11.3 2-21.1 6.1-29.4 4.1-8.3 9.6-14.7 16.6-19.1 7-4.4 14.9-6.7 23.8-6.7 8.2.2 15.2 2 21.2 5.8zm-27.7 30.2c-4.3 4.6-6.5 11.1-6.5 19.3 0 8.2 2.2 14.7 6.5 19.3 4.3 4.6 10 6.9 17.1 6.9 6.9 0 12.6-2.4 17.1-7.1 4.4-4.8 6.7-11.1 6.7-19.1 0-8.1-2.2-14.5-6.7-19.2-4.4-4.7-10.1-7-17.1-7-7.1 0-12.8 2.3-17.1 6.9zM637.2 85c3.6-3.3 8.4-4.9 14.3-4.9s10.7 1.6 14.3 4.9c3.6 3.3 5.4 7.4 5.4 12.4 0 4.9-1.8 9-5.4 12.2-3.6 3.3-8.4 4.9-14.3 4.9s-10.7-1.6-14.3-4.9c-3.6-3.3-5.4-7.4-5.4-12.2 0-5 1.8-9.1 5.4-12.4zm30.7 42.7v107.6h-33V127.7h33zM739.6 132.4c6.5-3.9 13.5-5.8 21.1-5.8v35.3h-9.5c-8.7 0-15.5 1.9-20.3 5.6-4.8 3.7-7.2 10-7.2 18.9v49h-33V127.7h33V148c4.1-6.6 9.4-11.8 15.9-15.6zM927.9 99.9v135.4h-33v-84.7l-29.3 84.7h-28.5l-29.5-84.9v84.9h-33V99.9h40.3l36.8 94.3 36.1-94.3h40.1zM1051.9 187.5h-74.6c.4 8.1 2.4 13.9 6.2 17.5 3.7 3.5 8.5 5.3 14.3 5.3 4.9 0 8.9-1.2 12.2-3.7 3.2-2.4 5.3-5.6 6.4-9.5h34.9c-1.4 7.6-4.5 14.4-9.3 20.3-4.8 6-10.8 10.7-18.1 14.1-7.3 3.4-15.5 5.1-24.5 5.1-10.5 0-19.9-2.2-28.1-6.7-8.2-4.4-14.6-10.8-19.2-19.2-4.6-8.4-6.9-18.1-6.9-29.3 0-11.3 2.3-21.1 6.8-29.4 4.6-8.3 11-14.7 19.2-19.1 8.2-4.4 17.6-6.7 28.2-6.7 10.7 0 20.1 2.2 28.2 6.6 8.1 4.4 14.4 10.5 18.8 18.4s6.7 17 6.7 27.3c-.2 2.8-.5 5.8-1.2 9zm-38.1-29.8c-3.9-3.5-8.8-5.3-14.6-5.3-6 0-11.1 1.8-15 5.4-4 3.6-6.2 8.9-6.8 15.8h42c.3-7-1.6-12.3-5.6-15.9z"/>
	</svg>
	</div>
  )
}

export default PairMeLogo

