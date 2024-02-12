import { useSelector } from "react-redux/es/hooks/useSelector";
import { setNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const style = {
    border: "2px solid green",
    padding: 10,
    textAlign: "center",
  };

  return <div style={notification && style}>{notification}</div>;
};

export default Notification;
