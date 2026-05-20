// NotificationContext.js
import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [hasNewData, setHasNewData] = useState(false);

  return (
    <NotificationContext.Provider value={{ hasNewData, setHasNewData }}>
      {children}
    </NotificationContext.Provider>
  );
};