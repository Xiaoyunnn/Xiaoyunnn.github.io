import Modal from "@/components/modal/Modal";

const FailureModal = ({ isOpen, onClose, message }) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={"Something went wrong!"}
            message={message}
            isFailure={true}
        />
    );
};

export default FailureModal;
