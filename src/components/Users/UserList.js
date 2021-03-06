import React, { Component } from 'react'
import User from '../Users/User'

class UserList extends Component {
    render() {
        const {data} = this.props
        return (
            <div>
                {data && data.map(e => {
                    return (
                        <User data={e} key={e.id}/>
                    )
                })}
            </div>
        )
    }
}

export default UserList