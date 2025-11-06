import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUpp = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  useEffect(() => {
    const storedUsers = localStorage.getItem("products");
    if (storedUsers) {
      setAllUsers(JSON.parse(storedUsers));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(allUsers));
  }, [allUsers]);
  const submitUser = () => {
    const userData = {
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage,
    };

    if (isEditing) {
      const updatedUsers = [...allUsers];
      updatedUsers[editIndex] = userData;
      setAllUsers(updatedUsers);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newAllUsers = [...allUsers, userData];
      setAllUsers(newAllUsers);
    }
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductCategory("");
    setProductImage("");
  };
  const deleteProduct = (index) => {
    const updatedUsers = allUsers.filter((_, i) => i !== index);
    setAllUsers(updatedUsers);
  };
  const editProduct = (index) => {
    const productToEdit = allUsers[index];
    setProductName(productToEdit.productName);
    setProductPrice(productToEdit.productPrice);
    setProductDescription(productToEdit.productDescription);
    setProductCategory(productToEdit.productCategory);
    setProductImage(productToEdit.productImage);

    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h1 className="h3 mb-0 text-center">
                {isEditing ? "Edit Product" : "Sign Upp here"}
              </h1>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your product name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Your product price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your product description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your product category"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your product image"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={submitUser}
                  >
                    {isEditing ? "Save Changes" : "Sign Upp"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          {allUsers.map((user, index) => (
            <div key={index} className="card mb-3 shadow">
              <div className="card-header bg-success text-white">
                <h2 className="h4 mb-0">Product {index + 1}</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Product Name:</strong> {user.productName}</p>
                    <p><strong>Price:</strong> ${user.productPrice}</p>
                    <p><strong>Category:</strong> {user.productCategory}</p>
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => editProduct(index)}
                    >
                      Edit
                    </button>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Description:</strong> {user.productDescription}</p>
                    <p>
                      <strong>Image:</strong>{" "}
                      <img
                        src={user.productImage}
                        alt=""
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                    </p>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(index)}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpp;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const SignUpp = () => {
//     const [productName, setProductName] = useState("");
//     const [productPrice, setProductPrice] = useState("");
//     const [productDescription, setProductDescription] = useState("");
//     const [productCategory, setProductCategory] = useState("");
//     const [productImage, setProductImage] = useState("");
//     const [allUsers, setAllUsers] = useState([]);
//     useEffect(() => {
//         const storedUsers = localStorage.getItem("products");
//         if (storedUsers) {
//             setAllUsers(JSON.parse(storedUsers));
//         }
//     }, []);
//     useEffect(() => {
//         localStorage.setItem("products", JSON.stringify(allUsers));
//     }, [allUsers]);

//     const submitUser = () => {
//         let userData = {
//             productName, productPrice, productDescription, productCategory, productImage
//         }
//         let newAllUsers = [...allUsers, userData]
//         setAllUsers(newAllUsers)
//         console.log(newAllUsers);

//     }
//     const deleteProduct = (index) => {
//         const updatedUsers = allUsers.filter((_, i) => i !== index);
//         setAllUsers(updatedUsers);
//     };
//     const editProduct = (index) => {
//         const productToEdit = allUsers[index];
//         setProductName(productToEdit.productName);
//         setProductPrice(productToEdit.productPrice);
//         setProductDescription(productToEdit.productDescription);
//         setProductCategory(productToEdit.productCategory);
//         setProductImage(productToEdit.productImage);

//         const remainingUsers = allUsers.filter((_, i) => i !== index);
//         setAllUsers(remainingUsers);
//     };

//     return (
//         <div className="container py-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <div className="card shadow-lg">
//                         <div className="card-header bg-primary text-white">
//                             <h1 className="h3 mb-0 text-center">Sign Upp here</h1>
//                         </div>
//                         <div className="card-body">
//                             <form>
//                                 <div className="mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder='Enter Your product name'
//                                         onChange={(e) => { setProductName(e.target.value) }}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input
//                                         type="number"
//                                         className="form-control"
//                                         placeholder='Enter Your product price'
//                                         onChange={(e) => { setProductPrice(e.target.value) }}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder='Enter your product description'
//                                         onChange={(e) => { setProductDescription(e.target.value) }}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder='Enter your product category'
//                                         onChange={(e) => { setProductCategory(e.target.value) }}
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         placeholder='Enter Your product image'
//                                         onChange={(e) => { setProductImage(e.target.value) }}
//                                     />
//                                 </div>
//                                 <div className="d-grid">
//                                     <button
//                                         type='button'
//                                         className="btn btn-primary btn-lg"
//                                         onClick={submitUser}
//                                     >
//                                         Sign Upp
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <div className="row justify-content-center mt-4">
//                 <div className="col-md-8">
//                     {allUsers.map((user, index) => (
//                         <div key={index} className="card mb-3 shadow">
//                             <div className="card-header bg-success text-white">
//                                 <h2 className="h4 mb-0">Product {index + 1}</h2>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-md-6">
//                                         <p><strong>Product Name:</strong> {user.productName}</p>
//                                         <p><strong>Price:</strong> ${user.productPrice}</p>
//                                         <p><strong>Category:</strong> {user.productCategory}</p>
//                                         <button className="bg-success" onClick={() => editProduct(index)}>Edit</button>
//                                         {/* <button className="bg-success">Edit</button> */}
//                                     </div>
//                                     <div className="col-md-6">
//                                         <p><strong>Description:</strong> {user.productDescription}</p>
//                                         <p><strong>Image:</strong> <img src={user.productImage} /> </p>
//                                         <button className="bg-danger" onClick={() => deleteProduct(index)}>DELETE</button>
//                                         {/* <button className="bg-danger" onClick={deleteProduct(index)}>DELETE</button> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignUpp