import React, { Component } from 'react'

class AddNinja extends Component {

    state = {
        nama: null,
        usia: null,
        status: null
    }


    handleOnChange = (e) => {
        console.log("antap = ", e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelOnSubmit = (e) => {
        e.preventDefault();
        // let vm = this.state
        this.props.tambahNinja(this.state)
        console.log("cmp addninja = ", this.state)
        // this.setState({
        //     nama: null,
        //     usia: null,
        //     status: null
        // })
        // vm.nama = null
        // vm.usia = null
        // vm.status = null
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handelOnSubmit}>
                    <div>
                        <label htmlFor="fname">Nama:</label>
                        <input type="text" id="fname" name="nama" onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="lname">Usia:</label>
                        <input type="text" id="usia" name="usia" onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="lname">Status</label>
                        <input type="text" id="status" name="status" onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNinja
