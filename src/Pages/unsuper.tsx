// import React, { useState } from 'react';
import '../mumhead.css';
import React from 'react';

// const UnsupervisedDataAnalysis: React.FC = () => {
//   return (
//     <div>
//       <div>
//         <h1>Unsupervised Data Analysis</h1>
//         <br></br>
//         <img src='../mummyplot.jpg' alt='analytics' width='250' />
//         <br></br>
//         <p>This is a visualization of our analytics of the change in burial practices over time. We chose to measure 
//             the changes of 2 variables over time. The first being the use of facebundles, and the second being the use
//             of decorations like ribbons, tunics, blankets, and fragments of other decorations buried with the body. 
//             To determine the age of the burial, we are using the depth of the grave because the deeper bodies are 
//             the older bodies. As you can see, a lot of the older bodies were not found with face bundles or decorations.
//             Both the practice of face bundles and adding decoratioins begin commonly appear around 1.5 meters deep. This 
//             means that over time, they began to start bundling faces and adding decorations to their burial practices.
//         </p>
//       </div>
//     </div>
//   );
// };

function UnsupervisedDataAnalysis(){
    return(
        <>
        <h1>Unsupervised Data Analysis</h1>
        <br></br>
        <img src={require('../mummyplot.jpg')} alt='analytics' width='850' />
        <br></br>
        <p>This is a visualization of our analytics of the change in burial practices over time. We chose to measure 
            the changes of 2 variables over time. The first being the use of facebundles, and the second being the use
            of decorations like ribbons, tunics, blankets, and fragments of other decorations buried with the body. 
            To determine the age of the burial, we are using the depth of the grave because the deeper bodies are 
            the older bodies. As you can see, a lot of the older bodies were not found with face bundles or decorations.
            Both the practice of face bundles and adding decoratioins begin commonly appear around 1.5 meters deep. This 
            means that over time, they began to start bundling faces and adding decorations to their burial practices.
        </p>
        </>
    );
};

export default UnsupervisedDataAnalysis;



// function Picture()
// {
//     return(
//         <div>
//         <div>
//         <h1>Unsupervised Data Analysis</h1>
//         <br></br>
//         <img src='../mummyplot.jpg' alt='analytics' width='250' />
//         <br></br>
//         <p>This is a visualization of our analytics of the change in burial practices over time. We chose to measure 
//             the changes of 2 variables over time. The first being the use of facebundles, and the second being the use
//             of decorations like ribbons, tunics, blankets, and fragments of other decorations buried with the body. 
//             To determine the age of the burial, we are using the depth of the grave because the deeper bodies are 
//             the older bodies. As you can see, a lot of the older bodies were not found with face bundles or decorations.
//             Both the practice of face bundles and adding decoratioins begin commonly appear around 1.5 meters deep. This 
//             means that over time, they began to start bundling faces and adding decorations to their burial practices.
            
//         </p>
//         </div>
//         </div>
//     );
// }

// export default Picture()