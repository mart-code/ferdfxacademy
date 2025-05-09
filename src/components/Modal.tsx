import { motion } from "framer-motion";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
      >
        {" "}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          {" "}
          ❌{" "}
        </button>{" "}
        {children} {}{" "}
      </motion.div>{" "}
    </div>
  );
}
