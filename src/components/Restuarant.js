import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { data } from '../data'
import ReactStars from "react-rating-stars-component";

// import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/swiper-bundle.css'
import { Card } from 'react-bootstrap';

// SwiperCore.use([Navigation, Pagination])


const Restuarant = () => {
    const [shop, setShop] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const shop = data.restaurants.filter((shop) => shop.id == id)
        // console.log("shop found:", shop)
        setShop(shop)
    }, [])



    return (
        <div className="shop">
            {  shop.map((item) => {
                const { id, photograph, name, cuisine_type, neighborhood, address, operating_hours, reviews } = item
                return (

                    <div id={id} className="row">
                        <div className="shopImg">
                            <img src={photograph} alt="restaurant" />
                        </div>
                        <div className="shopDetails">
                            <span id="shopName">{name}</span><br />
                            <span><i><b>{cuisine_type}</b></i></span><br />
                            <span><i>{neighborhood}</i></span><br />
                            <span><i>{address}</i></span><br />
                            <br />
                            <div id="operatingTime">
                                <span id="title"><b>Operating Hours</b></span><br />

                                {

                                    Object.entries(operating_hours).map((item) => {
                                        return (
                                            <div className="menuTime">
                                                <span className="day"><i>{item[0]}</i></span>:<span className="time"><i>{item[1]}</i></span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="reviews container mt-5">
                            <span className="mb-5"><b>Customer Reviews</b><hr /></span>
                            <div>
                                {
                                    reviews.map((item, index) => {
                                        const { name, date, rating, comments } = item
                                        return (

                                            <Card style={{ width: '100%', minHeight: '50px', marginBottom: '20px' }} id={index} key={Math.random()}>
                                                <Card.Body>
                                                    <Card.Title><small>{name}</small></Card.Title>
                                                    <Card.Text>
                                                        <small><i>{date}</i></small><br />

                                                        <ReactStars size="20" value={rating} edit={false} />
                                                        <small><b>"</b><i>{comments}</i><b>"</b></small>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                )
            })

            }
        </div>
    )
}

export default Restuarant
