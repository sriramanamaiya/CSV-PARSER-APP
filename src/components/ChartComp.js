import React from 'react'

import Chart from "react-google-charts"

const ChartComp = (props) => {
    const { userChartData } = props

    return (
        <>
            <Chart width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Name of Students', 'Total Minutes Attended']].concat(userChartData)
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
        </>
    )
}

export default ChartComp