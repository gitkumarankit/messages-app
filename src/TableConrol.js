import Data from "./Data";
import React, { useState } from 'react'
import "./tablestyle.css";

const TableConrol = () => {
    const [table, setTable] = useState(false);
    const [whatsappIndex, setWhatsappIndex] = useState(0);
    const handleButtonClick = () => {
        setTable(true);
        sendMessage(whatsappIndex);
    };
    const sendMessage = async (index) => {
        if (index >= Data.length) {
            setWhatsappIndex(0);
            setTable(false);
            return;
        }

        const number = Data[index].Phone;
        const message = Data[index].message;

        // Simulate opening WhatsApp and sending a message
        console.log(`Sending message to ${number}: ${message}`);

        // Simulate closing WhatsApp
        console.log(`Closing WhatsApp for ${number}`);

        // Move to the next index
        setWhatsappIndex(index + 1);

        // Simulate a delay before sending the next message
        setTimeout(() => sendMessage(whatsappIndex), 1000);
    };
    return (
        <div className="main">
            <h2>Send message to friends</h2>
            <button className="button" onClick={handleButtonClick}> Send Messages </button>

            {table && (
                <table className="tabl">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map((item, index) => (
                            <tr key={index}>
                                <th>{item.Id}</th>
                                <td>{item.Name}</td>
                                <td>
                                    <a
                                        href={`https://web.whatsapp.com/send?phone=${item.Phone}&text=${encodeURIComponent(item.message)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.Phone}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};
export default TableConrol;
