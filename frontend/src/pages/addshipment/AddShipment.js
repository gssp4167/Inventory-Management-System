import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { selectIsLoading } from "../../redux/features/product/productSlice";
import axios from "axios";
import { toast } from "react-toastify";


const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
};

const AddShipment = () => {
    const navigate = useNavigate();

    const isLoading = useSelector(selectIsLoading);


    const saveshipment = async (e) => {
        e.preventDefault();

        let data = {
            id: e.target.id.value,
            type: e.target.type.value,
            quantity: e.target.quantity.value,
            time: e.target.dateAndTime.value
        }


        const res = await axios.post(`http://localhost:5000/api/shipments/`, data);


        if (res.status == 201) {
            toast.success("Shipment Added");
            navigate("/manage-shipment");
        }
        else {
            toast.error("Error");
        }
    };

    return (
        <div className="add-product">
            {isLoading && <Loader />}
            <h3 className="--mt">Add New Shipment</h3>
            <Card cardClass={"card"}>
                <form onSubmit={saveshipment}>

                    <label>Shipment Id:</label>
                    <input
                        type="text"
                        placeholder="Shipment Id"
                        name="id"
                    />

                    <label>Shipment Type:</label>
                    <input
                        type="text"
                        placeholder="Shipment Type"
                        name="type"
                    />

                    <label>Shipment Quantity:</label>
                    <input
                        type="text"
                        placeholder="Shipment Quantity"
                        name="quantity"
                    />

                    <label>Shipment Dispatch Time:</label>
                    <input
                        type="datetime-local"
                        name="dateAndTime"
                    />

                    <div className="--my">
                        <button type="submit" className="--btn --btn-primary">
                            Add Shipment
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddShipment;
