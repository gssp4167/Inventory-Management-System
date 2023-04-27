import React, { useEffect, useState } from "react";
import { SpinnerImg } from "../../components/loader/Loader";
import "./shipment.scss";

const ShipmentList = ({ shipments, isLoading }) => {


    //   Begin Pagination
    const [currentItems, setCurrentItems] = useState([]);

    return (
        <div className="product-list">
            <hr />
            <div className="table">
                <div className="--flex-between --flex-dir-column">
                    <span>
                        <h3>Shipments</h3>
                    </span>
                </div>

                {isLoading && <SpinnerImg />}

                <div className="table">
                    {!isLoading && shipments.length === 0 ? (
                        <p>-- No shipment found, please add a shipment...</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Type</th>
                                    <th>Quantity</th>
                                    <th>Dispatch Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                {shipments.map((ele, index) => {
                                    const { id, type, time, quantity } = ele;
                                    return (
                                        <tr key={id}>
                                            <td>{id}</td>
                                            <td>{type}</td>
                                            <td>{quantity}</td>
                                            <td>{time}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShipmentList;
