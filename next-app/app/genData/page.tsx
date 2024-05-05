import React from 'react'
import Image from 'next/image'
import NatureImage from '@/public/goutham-krishna-h5wvMCdOV3w-unsplash.jpg'

const MetaData = () => {
  return (
    <div>
    { /* <Image src={NatureImage} alt = "Nature Image" width={500} height={500}/> */}
      <Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" 
      alt="our nature image" width={300} height={300}/>
    </div>
  )
}

export default MetaData 

  
