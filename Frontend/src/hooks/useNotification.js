import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }

  const { hasNewData, setHasNewData } = context;

  const notify = () => setHasNewData(true);
  const clearNotification = () => setHasNewData(false);

  return { hasNewData, notify, clearNotification };
};

export default useNotification;