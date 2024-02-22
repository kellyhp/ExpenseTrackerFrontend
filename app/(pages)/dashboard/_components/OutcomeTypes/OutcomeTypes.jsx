import { useState, useEffect } from 'react';
import styles from '../../../_components/Form/Form.module.scss';

const OutcomeTypes = () => {
  const [outcomeData, setOutcomeData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/users/outcome-types")
      .then((response) => response.json())
      .then((data) => {
        console.log("Outcome data:", data); // Log the response data
        setOutcomeData(data);
      })
      .catch((error) => console.error("Error fetching outcome types:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Outcome Types</h2>
      {outcomeData && (
        <div>
          <div className={styles.typeList}>
            <div className={styles.typeItem}>
              <p>Food</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages.food}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages.food}%</p>
            </div>
            <div className={styles.typeItem}>
              <p>Academics</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages.academics}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages.academics}%</p>
            </div>
            <div className={styles.typeItem}>
              <p>Personal Care</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages["personal care"]}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages["personal care"]}%</p>
            </div>
            <div className={styles.typeItem}>
              <p>Housing</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages.housing}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages.housing}%</p>
            </div>
            <div className={styles.typeItem}>
              <p>Travel</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages.travel}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages.travel}%</p>
            </div>
            <div className={styles.typeItem}>
              <p>Misc</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{ width: `${outcomeData.percentages.misc}%` }}
                ></div>
              </div>
              <p>{outcomeData.percentages.misc}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutcomeTypes;