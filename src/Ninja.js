import React from 'react'

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
        <React.Fragment>
            {ninja}
        </React.Fragment>
    )
}

export default Ninja;
