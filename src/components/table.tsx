import React from "react";
import "/src/styles/NoBorderTable.css";

const NoBorderTable: React.FC = () =>  {

    return (
        <table className="no-border-table">
            <thead>
            <tr>
                <th>CI/CD</th>
                <th>Kubernetes</th>
                <th>Linux</th>
                <th>Coding</th>
                <th>AI</th>
                <th>Cloud</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a>a</a></td>
                    <td><a>a</a></td>
                    <td><a>a</a></td>
                    <td><a>a</a></td>
                    <td><a>a</a></td>
                    <td><a>a</a></td>
                </tr>
            </tbody>
        </table>
    );
}

export default NoBorderTable;