import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const generateStyle = (type) => {
    const snap = useSnapshot(state);
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  return (
    <div
      className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default CustomButton;
