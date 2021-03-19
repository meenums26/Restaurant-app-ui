import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {data} from '../data'

const Restuarants = () => {
    const history = useHistory()
    const restuarants = data.restaurants
    const handleRestuarant=(id)=>{
        // console.log("id :",id)
       
        history.push(`/restuarant/${id}`)
    }
    return (
        <div className="restuarants mt-5 container">
            <span><b>Popular Restuarants </b><hr /></span>
            <div className="container">
                {
                    restuarants.map((item)=>{
                        const{id,name,photograph,cuisine_type}=item
                        return(
                            <Card  id={id} key={id}>
                            <Card.Img variant="top" src={photograph}/>
                            <Card.Body>
                                <Card.Title style={{'width':'100%'}}>{name}<br/><small><i>{cuisine_type}</i></small></Card.Title>
                                <Button className="btn btn-danger btn-sm" onClick={()=>handleRestuarant(id)}>View Details</Button>
                            </Card.Body>
                        </Card>
                        )
                    })
                }
               
            </div>
        </div>
    )
}

export default Restuarants
