import React from 'react'
import { UserDetails } from '../types/userDerails'

type Props={
    location:UserDetails["location"];
}

function Address(props:Props) {
    const {street,city,state,country,postcode}=props.location;
    const address=[`${street.number} ${street.name}`,city,state,country];
  return <h2>{address.join(", ")} - {postcode}</h2>
}

export default Address