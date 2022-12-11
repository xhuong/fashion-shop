import { Modal } from "antd";

const ModalNotifycation = ({ title, ...parameters }) => {
  let secondsToGo = 2;

  const modal = Modal.success({
    title,
    content: `This modal will be destroyed after ${secondsToGo} second.`,
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
