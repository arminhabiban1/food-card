import { useState } from "react"
import ReactApexChart from "react-apexcharts"


const UnpaidChart = () => {

const [state]=useState(
    {
        series:[52],
        option:{
            chart:{
                height:150,
                types:'radialbar',

            },
            colors:['#fc5151'],
            plotOptions:{
                radiaBar:{
                    hollow:{
                        size:'65%'
                    }

                }

            },
            labels:['Paid']
        },





    }




)



  return (
    <div id="chart">
        <ReactApexChart
        options={state.option}
        series={state.series}
        type='radialBar'
        height={140}
        
        
        
        
        />

    </div>
  )
}

export default UnpaidChart