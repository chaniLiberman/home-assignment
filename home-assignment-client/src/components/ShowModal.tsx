import { FunctionComponent } from "react";
import { Modal } from "react-bootstrap";
import Item from "../interfaces/Item";



interface ShowModalProps {
    onHide: Function;
    item: Item;

}

const ShowModal: FunctionComponent<ShowModalProps> = ({ onHide, item }) => {
    return (
        <>
            <Modal
                show={true}
                onHide={() => onHide()}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{item.user}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                tags:   {item.tags}
                </Modal.Body>
                <Modal.Body>
                collections:  {item.collections}
                </Modal.Body>
                <Modal.Body>
                downloads:   {item.downloads}
                </Modal.Body>
                <Modal.Body>
                views:   {item.views}
                </Modal.Body>
            </Modal >
        </>
    );
}

export default ShowModal;