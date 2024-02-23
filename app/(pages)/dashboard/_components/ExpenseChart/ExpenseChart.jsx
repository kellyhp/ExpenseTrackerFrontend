import React, { useState, useEffect, useRef } from 'react';
import styles from './ExpenseChart.module.scss';
import Chart from 'chart.js/auto';

const ExpenseChart = () => {
  const [chartData, setChartData] = useState(null);
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartData) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the previous chart instance
      }
      
      const ctx = chartContainerRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: [{
            label: 'Total Expenses',
            data: chartData.data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Daily Expenses'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Days'
              }
            }
          },
          plugins: {
            legend: {
              onClick: () => {}, // Disable legend interactivity
            },
          },
        }
      });
    }
  }, [chartData]);

  useEffect(() => {
    fetch('http://localhost:3001/users/expenses-by-week')
      .then((response) => response.json())
      .then((data) => {
        console.log("Chart data:", data);
        setChartData(data);
      })
      .catch((error) => console.error("Error fetching expense data:", error));
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartHeader}></h2>
      <canvas height="300px" width="400px" ref={chartContainerRef} id="expenseChart"></canvas>
    </div>
  );
};

export default ExpenseChart;
