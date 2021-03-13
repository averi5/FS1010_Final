import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

function Admin() {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const [listing, setListing] = useState([])
    
    useEffect( () => {
        const getData = async () => {
            const response = await fetch('http://localhost:4000/contact_form/entries', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await response.json()
            setListing(data)
        }
        getData()
    }, [token])
    return (
        <main>
             {listing.length === 0 &&
                <h4>No listings found</h4>
            }
            {listing.length > 0 &&
                listing.map(entry => <div><h4>{entry.id}</h4><h3>{entry.name}</h3><h4>{entry.phoneNumber}</h4><h4>{entry.email}</h4><p>{entry.content}</p></div>)
            }
        </main>
    )
}

export default Admin
