import React, {useEffect, useState} from "react"
import { Container } from "@mui/material"
import { ApartmentsCard } from "./ApartmentsCard"
import { useOutletContext } from "react-router-dom"


export function Apartments () {
    const {setSelectedApartment} =useOutletContext()
    const [apartments, setApartments] = useState([])
    console.log(apartments)
    useEffect ( () => {
        fetch('/apartments')
        .then( (resp) => {
            if (resp.ok) {
                resp.json().then(setApartments)
            } else {
                console.log('not signed in')
            }
        })
    },[])
   
    return (
        <>
        <Container maxWidth='sm'>
         {apartments.map( apartment => <ApartmentsCard key = {apartment.id} setSelectedApartment={setSelectedApartment} apartment = {apartment} />)}
         </Container>
    
        
        
        </>
    )
}