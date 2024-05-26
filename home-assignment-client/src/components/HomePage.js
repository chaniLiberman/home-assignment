import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/ItemAction";
import { getImagesByCategory } from "../redux/ItemAction";
import ShowModal from "./ShowModal";



const HomePage = () => {


    // Receiving information from the store
    const items = useSelector((state) => state.itemsState.imageArray);
    const loading = useSelector((state) => state.itemsState.loading);

    // Sending information to Store
    const dispatch = useDispatch()

    const [page, setPage] = useState(0);

    const [chooseCategory, setChooseCategory] = useState("CHOOSE CATEGORY");

    const [modalItem, setModalItem] = useState(null);


    const handleCategorySelection = (category) => {
        dispatch(getImagesByCategory(category, page));
        setChooseCategory(category)
        setPage(0)
    };

    useEffect(() => {
        items === null && dispatch(setItems())
    }, [chooseCategory]);

    useEffect(() => {
        dispatch(getImagesByCategory(chooseCategory, page));
    }, [page]);

    useEffect(() => {
    }, [loading]);

    // next
    const handleNext = () => {
        setPage(page => page + 1);
    };


    // prev
    const handlePrev = () => {
        setPage(page => page - 1);
    };


    return (<>
        <div className="container">

            {modalItem ? <ShowModal item={modalItem} onHide={() => setModalItem(null)} /> : <></>}

            <button className="btn btn-danger col-md-3 mt-5 m-2" disabled={page === 0} onClick={() => handlePrev()}>Prev</button>
            <button className="btn btn-success col-md-3 mt-5 m-2" disabled={page === 3} onClick={() => handleNext()}>Next</button>


            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{chooseCategory}</button>
                <ul className="dropdown-menu">
                    <li className="list-group-item" onClick={() => handleCategorySelection('animals')} data-dismiss="modal">Animals</li>
                    <li className="list-group-item" onClick={() => handleCategorySelection('flowers')} data-dismiss="modal">Flowers</li>
                    <li className="list-group-item" onClick={() => handleCategorySelection('sports')} data-dismiss="modal">Sports</li>
                    <li className="list-group-item" onClick={() => handleCategorySelection('cars')} data-dismiss="modal">Cars</li>
                    <li className="list-group-item" onClick={() => handleCategorySelection('work')} data-dismiss="modal">Work</li>
                </ul>
            </div>


        </div>

        {loading ?
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            :


            items && items[0]
                ?
                <div className="container">
                    <div className="row">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="col-md-4 d-flex justify-content-center align-items-center my-2"
                                style={{ width: "8rem", height: "8rem" }}
                            >
                                <img
                                    src={item.previewURL}
                                    className="img-fluid"
                                    alt={item.user}
                                    onClick={() => setModalItem(item)}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                :
                <p>No Photos Yet</p>
        }
     
        <button
            className="btn btn-sm bg-secondary shadow"
            style={{
                position: "fixed",
                bottom: "1rem",
                right: "1rem",
                width: "5rem",
                height: "5rem",
                fontSize: "1.3rem",
                color: "#fff",
                zIndex: 1000
            }}
        >
            PAGE: {page}
        </button>

    </>);
}

export default HomePage;


