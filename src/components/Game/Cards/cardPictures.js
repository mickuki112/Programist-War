import React from 'react';
import python from "./img/python.jpg";
import react from "./img/react.png";
import vue from "./img/vue.png";

const cardPictures=[
    {//PIXEL
        clipPath:' polygon(38% 10%, 44% 0, 53% 0, 58% 7%, 53% 14%, 56% 22%, 65% 23%, 70% 32%, 90% 57%, 62% 38%, 58% 53%, 72% 100%, 51% 68%, 43% 100%, 41% 55%, 40% 41%, 21% 62%, 37% 26%, 46% 23%, 44% 15%)',
        backgroundColor:'#00CCFF',
        //animation: 'pixel 6s linear 0s infinite alternate none',
    },
    {//PYTHON
        backgroundImage: `url(${python})`,
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top center',
        //animation: 'pixel 6s linear 0s infinite alternate none',
    },
    {//REACT
        backgroundImage: `url(${react})`,
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top center',
        //animation: 'pixel 6s linear 0s infinite alternate none',
    },
    {//VUE
        backgroundImage: `url(${vue})`,
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'top center',
        //animation: 'pixel 6s linear 0s infinite alternate none',
    },
]
export default cardPictures
