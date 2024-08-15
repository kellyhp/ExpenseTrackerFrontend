import { useState, useEffect } from "react";
import styles from "../OutcomeTypes/OutcomeTypes.module.scss";
import FoodIcon from "../../../../../public/index/food-icon.png";
import PersonalCareIcon from "../../../../../public/index/personal-care-icon.png";
import AcademicsIcon from "../../../../../public/index/academics-icon.png";
import HousingIcon from "../../../../../public/index/housing-icon.png";
import TravelIcon from "../../../../../public/index/travel-icon.png";
import MiscIcon from "../../../../../public/index/misc-icon.png";
import Image from "next/image";

const OutcomeTypes = () => {
  const [outcomeData, setOutcomeData] = useState(null);

  useEffect(() => {
    fetchOutcomeData();
  }, []);

  const fetchOutcomeData = async () => {
    try {
      const response = await fetch(`https://expensetracker-dz2s.onrender.com/users/outcome-types`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
        },
      });
      const data = await response.json();
      console.log("Outcome data:", data); // Log the response data
      setOutcomeData(data);
    } catch (error) {
      console.error("Error fetching outcome types:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Outcome Statistics</h2>
      {outcomeData && (
        <div>
          <div className={styles.typeList}>
            <Image src={FoodIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFood}
                  style={{ width: `${outcomeData.percentages.food}%` }}
                ></div>
              </div>
              <p className={styles.label}>Food</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages.food),
            )}%`}</p>
          </div>
          <div className={styles.typeList}>
            <Image src={AcademicsIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressAcademics}
                  style={{ width: `${outcomeData.percentages.academics}%` }}
                ></div>
              </div>
              <p className={styles.label}>Academics</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages.academics),
            )}%`}</p>
          </div>
          <div className={styles.typeList}>
            <Image src={PersonalCareIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressPersonal}
                  style={{
                    width: `${outcomeData.percentages["personal care"]}%`,
                  }}
                ></div>
              </div>
              <p className={styles.label}>Personal Care</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages["personal care"]),
            )}%`}</p>
          </div>
          <div className={styles.typeList}>
            <Image src={HousingIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressHousing}
                  style={{ width: `${outcomeData.percentages.housing}%` }}
                ></div>
              </div>
              <p className={styles.label}>Housing</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages.housing),
            )}%`}</p>
          </div>
          <div className={styles.typeList}>
            <Image src={TravelIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressTravel}
                  style={{ width: `${outcomeData.percentages.travel}%` }}
                ></div>
              </div>
              <p className={styles.label}>Travel</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages.travel),
            )}%`}</p>
          </div>
          <div className={styles.typeList}>
            <Image src={MiscIcon} width={40} height={40} alt="Logo" />
            <div className={styles.typeItem}>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressMisc}
                  style={{ width: `${outcomeData.percentages.misc}%` }}
                ></div>
              </div>
              <p className={styles.label}>Misc</p>
            </div>
            <p className={styles.percentage}>{`${Math.round(
              parseFloat(outcomeData.percentages.misc),
            )}%`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutcomeTypes;
