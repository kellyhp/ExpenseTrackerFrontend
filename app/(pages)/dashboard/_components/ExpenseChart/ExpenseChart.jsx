import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import moment from 'moment';

export default function ExpensesChart({ data }) {
  const chartContainer = useRef(null);

  useEffect(() => {
    
    const ctx = chartContainer.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Total Expenses',
          data: data.data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'month',
              displayFormats: {
                month: 'MMM YYYY'
              }
            },
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Total Expenses'
            }
          }
        }
      }
    });

    return () => {
      myChart.destroy();
    };
  }, [data]);

  return (
    <canvas ref={chartContainer} />
  );
}

export async function getServerSideProps(context) {
 
  const res = await fetch('http://localhost:3001/users/expenses-by-month');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}
