import React from 'react'

import ListingUsers from './ListingUsers'
import ChartComp from './ChartComp'

const ListingReport = (props) => {
    const { userData } = props

    const userDataFilter = userData.filter((user) => {
        return user['Name (Original Name)']
    })

    const findHost = userData.find((user) => {
        return user['Guest'] === 'No'
    })

    const sortArr = userDataFilter.slice(0).sort((a,b) => {
        return a['Total Duration (Minutes)'] - b['Total Duration (Minutes)']
    })

    const userChartData = sortArr.map((ele) => {
        return [ele['Name (Original Name)'],ele['Total Duration (Minutes)']]
    })
    
    return (
        <div className="fileReport">
            <h3 className="listing-heading">Report</h3>
            <div className="flexcontainer">
                <ListingUsers 
                    userDataFilter={userDataFilter} 
                    findHost={findHost} 
                /><br/>
                <ChartComp userChartData={userChartData} />
            </div>
        </div>
    )
}

export default ListingReport