import React, {useEffect,useState} from 'react'

function Home() {
    const[products, setProducts]=useState([]);

    useEffect(()=>{
        const fetchdata = async () => {
             const products = await fetch("https://dummyjson.com/products?limit=100&skip=0&select=title,price");
             if(products){
                const data=await products.json();
                setProducts(data.products);
             }
        }
        
        fetchdata();

    },[])

  return (
    
    <>
    <ul >
            {products.map(product=>(
                <li key={product.id} className='bg-secondary text-white mb-3 p-2'>
                    
                    
                    
                    <h2>{product.id}</h2>
                    <h3>{product.title}</h3>
                    <h4>{product.price}</h4>
                    
                    </li>
               
            ))}

    </ul>
           
    </>
  )
}

export default Home