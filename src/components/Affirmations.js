import React from 'react'
import affirmationList from '../data/affirmationList'

const Affirmations = () => {
    return (
        <div> 
            {affirmationList[Math.floor(Math.random() * affirmationList.length)]}
        </div>
    )
       
}
  
   

   
   export default Affirmations
   
   