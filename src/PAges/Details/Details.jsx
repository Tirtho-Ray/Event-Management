
import { useLoaderData, useParams } from 'react-router-dom';
import ShowDetails from './ShowDetails';
import { useEffect, useState } from 'react';

const Details = () => {
    const [detailss,setDetails] = useState([])
    const {id} = useParams()
    const details =useLoaderData();

   
    useEffect(()=>{
        const seeDitels = details?.find(details=>details.id==id);
        setDetails(seeDitels);
        
    },[id,details]);

     const{title}=details;
    return (
        <div>
           
                <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
            
            </div>
        </div>
</div>
        </div>
    );
};

export default Details;