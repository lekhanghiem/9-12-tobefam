import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useCopy = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  useEffect(() => {
    if (copySuccess) {
      setTimeout(() => {
        setCopySuccess(false);
      }, 1000);
    }
  }, [copySuccess]);
  const onCopy = (value: string) => {
    try {
      navigator.clipboard.writeText(value).then(
        () => {
          setCopySuccess(true);
          toast.success("Copy Successfully!");
        },
        () => {
          setCopySuccess(false);
        }
      );
    } catch (error) {
      setCopySuccess(false);
    }
  };
  return { copySuccess, onCopy };
};
export default useCopy;
