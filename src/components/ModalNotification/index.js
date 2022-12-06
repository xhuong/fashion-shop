import { Modal } from "antd";

const ModalNotifycation = ({ title, content, ...parameters }) => {
  const secondsToGo = 20;
  const modal = Modal.success({
    title,
    content,
  });

  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be distroyed after ${secondsToGo} seconds`,
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
};

export default ModalNotifycation;
