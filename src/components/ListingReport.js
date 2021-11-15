import React from 'react'
import Chart from "react-google-charts"

import ListingUsers from './ListingUsers'

const ListingReport = (props) => {
    const { userData } = props

    const userDataProp = Object.keys(userData[0])

    const userDataFilter = userData.filter((user) => {
        return user[userDataProp[0]] !== null
    })

    const findHost = userData.find((user) => {
        return user[userDataProp[3]] === 'No'
    })

    const sortArr = userDataFilter.slice(0).sort((a,b) => {
        return a[userDataProp[2]] - b[userDataProp[2]]
    })

    const arr = sortArr.map((ele) => {
        return [ele[userDataProp[0]],ele[userDataProp[2]]]
    })
    
    return (
        <div className="fileReport">
            <h3 className="listing-heading">Report</h3>
            <div className="flexcontainer">
                <ListingUsers 
                    userDataFilter={userDataFilter} 
                    findHost={findHost} 
                    userDataProp={userDataProp}
                /><br/>
                <Chart width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Name of Students', 'Total Minutes Attended']].concat(arr)
                    }
                    options={{
                        colors: ['#b0120a'],
                        chart: {
                        title: 'Zoom Report',
                        subtitle: 'Total Minutes Students Attended',
                        },
                    }}
                    className="chart"
                />
            </div>
        </div>
    )
}

export default ListingReport