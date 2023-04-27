import React, { useEffect, useState } from 'react'
import ShipmentList from './shipmentlist'
import axios from 'axios'

const ManageShipment = () => {

    const [data, setdata] = useState({
        isLoading: false,
        list: []
    })

    const getShipments = async () => {

        setdata({ ...data, isLoading: true })
        const res = await axios.get(`http://localhost:5000/api/shipments/`);
        setdata({ ...data, isLoading: false, list: res.data });

    }

    useEffect(() => {
        getShipments();
    }, [])


    return (
        <div>
            <ShipmentList shipments={data.list} isLoading={data.isLoading} />
        </div>
    )
}

export default ManageShipment