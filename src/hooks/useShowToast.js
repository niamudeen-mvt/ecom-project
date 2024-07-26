import { useState } from "react";

export default function useShowToast() {
  const [showToast, setShowToast] = useState(false);

  const showToastHandler = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 500);
  };

  return { showToast, showToastHandler };
}
