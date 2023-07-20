import Modal from "@/components/modal/Modal";

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={"Message sent!"}
            message={"Thank you for your message, I will get to you ASAP! ☺️"}
            isFailure={false}
        />
    );
};

export default SuccessModal;
