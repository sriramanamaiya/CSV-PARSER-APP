import React from 'react'

const ListingUsers = (props) => {
    const { userDataFilter, findHost, userDataProp } = props

    const hours = Math.floor(findHost[userDataProp[2]]/60)
    const minutes = Math.round( (findHost[userDataProp[2]]/60 -hours) * 60 )

    return (
        <div className="listinguser">
            <h2 className="listinguser-heading">Host - { findHost[userDataProp[0]] } </h2>
            <h3 className="listinguser-heading">Total Participants - {userDataFilter.length}</h3>
            <h3 className="listinguser-heading">Duration - { hours } hour(s) {minutes} Minute(s) </h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    { userDataFilter.map((ele,i) => {
                        return (
                            <tr key={i}>
                                <td>{ele[userDataProp[0]]}</td>
                                <td>{ele[userDataProp[1]]}</td>
                                <td>{ele[userDataProp[2]]}</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export default ListingUsers