import React from 'react'
import './Ninja.css'

const Ninja = ({ ninjaList,hapusNinja }) => {
    const ninja = ninjaList.map(data => {

        // if (data.nama !== 'desto') {
        //     return (
        //         <div className="ninjas" key={data.name + data.usia}>
        //             <div>Nama : {data.nama} </div>
        //             <div>Usia: {data.usia}</div>
        //             <div>Status: {data.status}</div>
        //         </div>
        //     )
        // }
        // else {
        //     return null
        // }
        return (
            <div className="ninjas" key={data.name + data.usia}>
                <div>Nama : {data.nama} </div>
                <div>Usia: {data.usia}</div>
                <div>Status: {data.status}</div>
                <div><button onClick={ () => {hapusNinja(data.id)} }>hapus</button></div>
            </div>
        )

    })
    return (
        <div>
            {ninja}
        </div>
    )
}

export default Ninja;
