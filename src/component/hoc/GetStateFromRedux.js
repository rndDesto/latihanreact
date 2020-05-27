import React, { Component } from 'react'

import { connect } from 'react-redux'

class GetStateFromRedux extends Component {
    render() {
        console.log(this.props)

        const dataList = this.props.data.map(data => {
            return (
                    <li key={data.id}>{data.id} - {data.first_name} - {data.last_name}</li> 
            )
        })

        return (
            <React.Fragment>
                <ul>
                    {dataList}
                </ul>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.notes
    }
}


export default connect(mapStateToProps)(GetStateFromRedux);

