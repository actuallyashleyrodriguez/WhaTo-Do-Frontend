import React from 'react'
import affirmationList from '../data/affirmationList'

const Affirmations = () => {
    return (
        <div className="affirmations"> 
            {affirmationList[Math.floor(Math.random() * affirmationList.length)]}
        </div>
    )
       
}
  
   

   
   export default Affirmations
   
   