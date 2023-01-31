import { useState } from "react";

function Rating() {
  const [selected, setSelected] = useState([]);
  const [selectedTemp, setSelectedTemp] = useState([]);
  const rateId = [1, 2, 3, 4, 5];

  const setSelectedStar = async (value) => {
    for (let i = value; i >= 0; i--) {
      console.log(i);
      selectedTemp.push(i);
    }
    setSelected([...selectedTemp]);
  };

  const remSelectedStar = (value) => {
    for (let i = 0; i <= value; i++) {
      selectedTemp.pop(i);
    }
    selectedTemp.pop(0);
  };

  return (
    <div className="  mt-5">
      {rateId.map((rateid, index) => {
        return (
          <div
            className={selected.includes(index) ? "star selected" : "star"}
            onMouseEnter={() => setSelectedStar(index)}
            onMouseLeave={() => {
              remSelectedStar(index);
            }}
            onMouseOut={() => {
              remSelectedStar(5);
            }}
            onClick={() => setSelectedStar(index)}
          ></div>
        );
      })}
    </div>
  );
}

export default Rating;
