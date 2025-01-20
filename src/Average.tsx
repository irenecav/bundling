import React from "react";
import { getAvg } from "./averageService";
import "./ComponentStyles.scss";

export const Average : React.FC = () => {
    const [average, setAverage] = React.useState(0);
  
    React.useEffect(() => {
      const scores = [90, 75, 60, 99, 94, 30];
      setAverage(getAvg(scores));
    }, []);
  
    return (
      <div>
        <span className="result-background">
         Ejemplito de componente de react: {average}
        </span>
      </div>
    );
  };