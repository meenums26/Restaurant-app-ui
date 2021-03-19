
import React, { useEffect,useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useLocation } from "react-router-dom";
const SearchResult = () => {
    const[shops,setShops]=useState([])
    const location = useLocation();

    useEffect(() => {
    //    console.log(location.pathname); // result: '/secondpage'
    //    console.log(location.search); // result: '?query=abc'
    //    console.log(location.state.result); // result: 'some_value'
       setShops(location.state.result)
    }, [location]);
    const history = useHistory()
     
     const handleRestuarant=(id)=>{
       
        history.push(`/restuarant/${id}`)
    }
    return (
        <div className="container searchRestaurants">
            <div className="restuarants">
            <span>Search resluts...<hr /></span>
            <div className="container">
            
                {!(shops.length===0)?
                    shops.map((shop)=>{
                       // console.log(shop.shop)
                        const{id,name,photograph,cuisine_type}=shop.shop
                        
                        
                        return(
                            <Card id={id}>
                            <Card.Img variant="top" src={photograph}/>
                            <Card.Body>
                                <Card.Title style={{'width':'100%'}}>{name}<br/><sm><i>{cuisine_type}</i></sm></Card.Title>
                                <Button className="btn btn-danger btn-sm" onClick={()=>handleRestuarant(id)}>View Details</Button>
                            </Card.Body>
                        </Card>
                        )
                       
                    }):null
                    
                }
               
            </div>
        </div>
        </div>
    )
}

export default SearchResult

