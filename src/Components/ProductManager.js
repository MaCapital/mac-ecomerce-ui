import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
function ProductManager() {
  return (
    <div>
      {/*navbar*/}
      <HeaderNavbar />
      {/*end navbar*/}
      {/*content-items-login-register,etc*/}

      <section className="pb-5 header text-center">
        <div className="container py-5 ">
          <div className='pb-2'>
            <h1>List of Items</h1>
            <button className="btn btn-success " type="button"
              data-placement="top" title="Edit" data-toggle="modal" data-target="#myModalAdd">Add Item</button>

          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" >
              <div className="card border-0 shadow" >
                <div className="card-body p-3" >
                  {/* Responsive table */}
                  <div className="table-responsive" >
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Code</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>00000</td>
                          <td>shoes</td>
                          <td>10/08/2021</td>
                          <td>
                            {/* Call to action buttons */}
                            <ul className="list-inline m-0">

                              <li className="list-inline-item">
                                <button className="btn btn-dark " type="button" data-toggle="tooltip" data-placement="top" title="Edit">Edit</button>
                              </li>
                              <li className="list-inline-item">
                                <button className="btn btn-danger " type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>00000</td>
                          <td>shoes</td>
                          <td>10/08/2021</td>
                          <td>
                            {/* Call to action buttons */}
                            <ul className="list-inline m-0">

                              <li className="list-inline-item">
                                <button className="btn btn-dark " type="button" data-toggle="tooltip" data-placement="top" title="Edit">Edit</button>
                              </li>
                              <li className="list-inline-item">
                                <button className="btn btn-danger " type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>00000</td>
                          <td>shoes</td>
                          <td>10/08/2021</td>
                          <td>
                            {/* Call to action buttons */}
                            <ul className="list-inline m-0">
                              <li className="list-inline-item">
                                <button className="btn btn-dark " type="button" data-toggle="tooltip" data-placement="top" title="Edit">Edit</button>
                              </li>
                              <li className="list-inline-item">
                                <button className="btn btn-danger " type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>00000</td>
                          <td>shoes</td>
                          <td>10/08/2021</td>
                          <td>
                            {/* Call to action buttons */}
                            <ul className="list-inline m-0">
                              <li className="list-inline-item">
                                <button className="btn btn-dark " type="button" data-toggle="tooltip" data-placement="top" title="Edit">Edit</button>
                              </li>
                              <li className="list-inline-item">
                                <button className="btn btn-danger " type="button" data-toggle="tooltip" data-placement="top" title="Delete">Delete</button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/*footer*/}
      <Footer />
      {/*MODAL - ALL*/}
      <div className="modal" id="myModalAdd" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Add a New Product</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/**id */}
              {/**name  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Product name</span>
                </div>
                <input type="text" className="form-control" placeholder="Item's name" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

              {/**price  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Price</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='$' />
              </div>
              {/**subcatid */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">Subcategoria</button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div role="separator" className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Separated link</a>
                  </div>
                </div>
              </div>
              {/**date  */}

              {/**image  */}
              <div className="input-group mb-3">
                <input type="file" className="form-control" placeholder="Search your picture..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Upload</button>
                </div>
              </div>
              {/**color  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Color</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Color' />
              </div>
              {/**measure  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Size</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder='measure' />
              </div>
              {/**brand  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Brand</span>
                </div>
                <input type="text" className="form-control" aria-label="" placeholder='Brand' />
              </div>
              {/**about */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Description</span>
                </div>
                <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
              </div>
              {/**warehouse  */}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {/*END MODAL - ALL*/}
    </div >
  );
}

export default ProductManager;