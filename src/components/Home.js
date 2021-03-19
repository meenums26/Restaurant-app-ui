import React, { useEffect, useState } from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import Restuarants from './Restuarants'
import axios from 'axios'
import { data } from '../data'
import { getDistance } from 'geolib';
import { useHistory } from 'react-router-dom'
//import { useLocation } from "react-router-dom";

const Home = () => {

    const history = useHistory()
    // const location = useLocation()
    const [address, setAddress] = useState('')
    const [lonSearch, setLonSearch] = useState()
    const [latSearch, setLatSearch] = useState()
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (address === '') {
            setMessage('')
        }
    }, [address])

    const handleSearch = (e) => {

        // const isAvailable = ()=>{
        //     (data.restaurants).map((item)=>{
        //         if((item.address).includes(address)){
        //             return true
        //         }
        //         else{
        //             return false
        //         }
        //     })
        // }
        let result = new Array()

        axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoibWVlbnVtcyIsImEiOiJja21lcnNsdXAwaDk1MndwamdkcDZlODYyIn0.pyiPZjWwuBmMOPsa96gBQA")
            .then((response) => {
                if (!(response.data.features.length === 0)) {
                    let newData = response.data.features[0];
                    let keys1 = Object.keys(newData)
                    let index1 = keys1.indexOf("geometry")
                    let coordinates = newData[keys1[index1]].coordinates
                    setLonSearch(coordinates[0])
                    setLatSearch(coordinates[1])
                    const shops = data.restaurants

                    shops.map((shop) => {
                        const dist = getDistance(
                            { latitude: parseFloat(latSearch), longitude: parseFloat(lonSearch) },
                            { latitude: parseFloat(shop.latlng.lat), longitude: parseFloat(shop.latlng.lng) }
                        )


                        if (((dist / 1000) === 0) || ((dist / 1000) < 5)) {

                            result.push({ shop })
                            // setSearchResult([result])
                        }
                        if (!((dist / 1000) === 0) && (dist / 1000 > 5)) {
                            setMessage('The search result not found')
                        }
                    })

                    if (!(result.length === 0)) {

                        // console.log(result)
                        //history.push(`/search/${address}`)
                        history.push({
                            pathname: `/search/${address}`,
                            search: '?query=abc',
                            state: { result }
                        })
                    }

                }

                else {
                    alert(`Search address ${address} not found!`)

                }
            }).catch((error) => console.log(error))


    }


    return (
        <>
            <div className="landingSection">
                <div className="searchSection">
                    <div className="advQuote">
                        <span id="quote1">Discover & Enjoy</span><br />
                        <span id="quote2">The best restaurants at the best price</span>
                    </div><br />
                    <div>
                    </div>
                    <InputGroup className="mb-3 p-1 bg-white small">
                        <FormControl
                            placeholder="Entr the address"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            className="p-3"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            id="addressInput"
                            required />
                        <InputGroup.Append>
                            <Button className="btn btn-danger btn-sm" onClick={handleSearch}>Search<BsSearch /> </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <span style={{ 'color': 'white' }}><small>{message}</small></span>
                </div>
            </div>
            <Restuarants/>
        </>
    )
}
export default Home

