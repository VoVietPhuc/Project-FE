import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../data"; // Import danh sách sản phẩm từ file data.js

function Admin() {
  const [productList, setProductList] = useState(products);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (productId) => {
    // Xóa sản phẩm với ID được chỉ định
    const updatedProducts = productList.filter(
      (product) => product.id !== productId
    );
    setProductList(updatedProducts);
  };

  const handleEdit = (productId) => {
    // Lấy sản phẩm cần sửa dựa trên ID
    const productToEdit = productList.find((product) => product.id === productId);
    setEditingProduct(productToEdit);
  };

  const handleSave = (editedProduct) => {
    // Cập nhật sản phẩm sau khi chỉnh sửa
    const updatedProducts = productList.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProductList(updatedProducts);
    setEditingProduct(null);
  };

  return (
    <div className="container mt-5">
      <h2>Quản trị sản phẩm</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Mô tả</th>
            <th>Thể loại</th>
            <th>Chỉnh sửa/Xóa</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        title: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.title
                )}
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <input
                    type="text"
                    value={editingProduct.description}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  product.description
                )}
              </td>
              <td>{product.category}</td>
              <td>
                {editingProduct && editingProduct.id === product.id ? (
                  <button
                    className="btn btn-success btn-sm mr-2"
                    onClick={() => handleSave(editingProduct)}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm mr-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Sửa
                  </button>
                )}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(product.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;



