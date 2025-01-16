import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

const GoalContext = createContext(null);

export function GoalProvider({ children }) {
  const [goalAmount, setGoalAmount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [previousBalance, setPreviousBalance] = useState(null);

  return (
    <GoalContext.Provider
      value={{
        goalAmount,
        setGoalAmount,
        progress,
        setProgress,
        previousBalance,
        setPreviousBalance,
      }}
    >
      {children}
    </GoalContext.Provider>
  )
}

GoalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


export function useGoal() {
  return useContext(GoalContext);
}
