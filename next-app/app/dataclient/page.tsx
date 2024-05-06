'use client'
import {useState, useEffect} from 'react'

const Data: React.FC= () => {
    const[product, setProduct] = useState<any>(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
              const response = await fetch("https://api.example.com/data");
              const jsonData = await response.json();
              setProduct(jsonData);
            } catch(error){
              console.error('Error fetching data:', error)
            }
        };
        fetchData();
      }, []);
      
  return (
    <div>
      {product ? (
        <ul>
          {product.map((item: any) => (
            <li key={item.id}>{item.name}</li>
         ))}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  )
}

export default Data