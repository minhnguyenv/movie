import { useEffect, useState } from "react";

interface UsePullToRefreshProps {
  onRefresh: () => void;
}

function usePullToRefresh({ onRefresh }: UsePullToRefreshProps) {
  const [startPoint, setStartPoint] = useState(0);
  const [pullChange, setPullChange] = useState(0);

  const handleStartPull = (event: TouchEvent) => {
    const { screenY } = event.targetTouches[0];
    setStartPoint(screenY);
  };

  const handlePull = (e: TouchEvent) => {
    const { screenY } = e.targetTouches[0];
    let pullLength = startPoint < screenY ? Math.abs(screenY - startPoint) : 0;
    setPullChange(pullLength);
  };

  const handleEndPull = (event: TouchEvent) => {
    setStartPoint(0);
    setPullChange(0);
    if (pullChange > 200) {
      onRefresh();
    }
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleStartPull);
    window.addEventListener("touchmove", handlePull);
    window.addEventListener("touchend", handleEndPull);
    return () => {
      window.removeEventListener("touchstart", handleStartPull);
      window.removeEventListener("touchmove", handlePull);
      window.removeEventListener("touchend", handleEndPull);
    };
  });
}

export default usePullToRefresh;
