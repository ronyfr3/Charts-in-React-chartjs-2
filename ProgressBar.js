import React from 'react'
import { Pie,Line,Doughnut,Bar } from 'react-chartjs-2';
function ProgressBar() {
    let data = [10, 5,11,12, 3]
    let labels = ["THIS YEAR", "THIS MONTH", "THIS WEEK","LAST YEAR"]
    let customLabels = labels.map((label,index) =>`${label}: ${data[index]}`)

    const chartdata = {
      labels: customLabels,
      datasets: [
        {
          label: "SALES IN COMPANY",
          backgroundColor: [
            "crimson",
            "green",
            "teal",
            "magenta",
            "blue",
          ],
          data: data,
        }]}

    return (
        <div style={{marginLeft:'550px',width:'400px',display:'flex',alignItems:'center',justifyContent:'center',position:"relative",top:'45px'}}>
            
        <Pie
            data={chartdata}
            options={{
            legend: { display: true, position: "right"},

            datalabels: {
                display: true,
                color: "red",
            },
            tooltips: {
                backgroundColor: "gray",
          },
        }}
      />
        <Bar
            data={chartdata}
            options={{
            legend: { display: true, position: "right"},

            datalabels: {
                display: true,
                color: "red",
            },
            tooltips: {
                backgroundColor: "gray",
          },
        }}
      />
        <Line
            data={chartdata}
            options={{
            legend: { display: true, position: "right"},

            datalabels: {
                display: true,
                color: "red",
            },
            tooltips: {
                backgroundColor: "gray",
          },
        }}
      />
        <Doughnut
            data={chartdata}
            options={{
            legend: { display: true, position: "right"},

            datalabels: {
                display: true,
                color: "red",
            },
            tooltips: {
                backgroundColor: "gray",
          },
        }}
      />
      </div>
    )
    }
export default ProgressBar
