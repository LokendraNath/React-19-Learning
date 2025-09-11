import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NotificationToast = () => {
  const [notiMsg, setNotiMsg] = useState<boolean>(false);

  const handleToast = () => {
    setNotiMsg(true);
    setTimeout(() => {
      setNotiMsg(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <button className="btn" onClick={handleToast}>
        Order Place
      </button>
      <AnimatePresence>
        {notiMsg && (
          <motion.div
            className="fixed top-4 right-4 bg-white text-green-500 py-2 px-3 rounded-2xl"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
          >
            <h1 className="text-xl font-bold">
              Your Order Placed{" "}
              <span
                className="ml-3 cursor-pointer"
                onClick={() => setNotiMsg(false)}
              >
                ❌
              </span>
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default NotificationToast;
