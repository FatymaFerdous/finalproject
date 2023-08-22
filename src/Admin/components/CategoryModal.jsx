import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { storage } from '../utils/FirebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';

function CategoryModal({recallData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [CategoryName, setCategoryName] = useState("")
    const [CategoryImage, setCategoryImage] = useState(null)


    const AddCategory = (e) => {
        e.preventDefault()
        console.log(CategoryImage)

        const storageRef = ref(storage, `images/category/${CategoryImage.CategoryName}`);
        uploadBytes(storageRef, CategoryImage).then((snapshot) => {
            getDownloadURL(snapshot.ref)
                .then((url) => {
                    const payload = { CategoryName, CategoryImage : url }
                    axios.post('http://localhost:2800/api/create-category',payload)
                    .then((json)=>{
                       
                        setShow(false);

                        recallData(json.data.category);
                    })
                    .catch(err=>alert(err.message))
                  
                })
                .catch((error) => alert(error.message));
        });
    }


    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddCategory}>
                        <div className="mb-3">
                            <label htmlFor="CateogoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={CategoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CateogoryName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default CategoryModal;