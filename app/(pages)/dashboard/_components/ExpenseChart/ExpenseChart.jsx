import React, { useState, useEffect, useRef } from "react";
import styles from "./ExpenseChart.module.scss";
import Chart from "chart.js/auto";

const ExpenseChart = () => {
  const [chartData, setChartData] = useState(null);
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartData) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the previous chart instance
      }

      const ctx = chartContainerRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: "Total Expenses",
              data: chartData.data,
              backgroundColor: "rgba(54, 162, 235, 0.5)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Daily Expenses",
              },
            },
            x: {
              title: {
                display: true,
                text: "Days",
              },
            },
          },
          plugins: {
            legend: {
              onClick: () => {}, // Disable legend interactivity
            },
          },
        },
      });
    }
  }, [chartData]);

  useEffect(() => {
    const fetchExpenseData = async () => {
      try {
        const uid = sessionStorage.getItem("UID");
        if (!uid) return; // If UID is not available, exit early
  
        const response = await fetch("http://localhost:3001/users/expenses-by-week", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${uid}`,
          },
        });
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log("Chart data:", data);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching expense data:", error);
      }
    };
  
    fetchExpenseData();
  }, []); // Dependency array to run effect only once on component mount

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartHeader}></h2>
      <canvas
        height="300px"
        width="400px"
        ref={chartContainerRef}
        id="expenseChart"
      ></canvas>
    </div>
  );
};

export default ExpenseChart;
