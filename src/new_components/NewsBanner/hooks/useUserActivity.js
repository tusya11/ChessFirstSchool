import { useState, useEffect, useRef } from "react";

export const useUserActivity = (inactivityTimeout = 30000) => {
  const [isUserActive, setIsUserActive] = useState(true);
  const activityTimerRef = useRef(null);

  useEffect(() => {
    const handleActivity = () => {
      setIsUserActive(true);

      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }

      activityTimerRef.current = setTimeout(() => {
        setIsUserActive(false);
      }, inactivityTimeout);
    };

    const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];
    events.forEach((event) => window.addEventListener(event, handleActivity));

    handleActivity();

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      if (activityTimerRef.current) {
        clearTimeout(activityTimerRef.current);
      }
    };
  }, [inactivityTimeout]);

  return isUserActive;
};
