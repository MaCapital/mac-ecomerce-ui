import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProductManager() {
  const warehouseUserInfo = JSON.parse(localStorage.getItem('loginData'));
  const warehouseid = warehouseUserInfo.warehouseid;
  console.log(warehouseid);
  const [load, setLoad] = useState(0);
  const [subcategory, setSubcategory] = useState([]);
  const [subCategoryMap, setSubCategoryMap] = useState({});
  const [product, setProduct] = useState([]);
  const [itemListObj, setItemListObj] = useState({});

  const [name, setName] = useState("");
  const [subcategoryI, setSubcategoryI] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");
  const [measure, setMeasure] = useState("");
  const [brand, setBrand] = useState("");
  const [about, setAbout] = useState("");
  const [itemId, setItemId] = useState("");



  useEffect(() => {
    async function getData() {
      let responseData;
      await axios.get("http://localhost:8081/subcategories")
        .then((response) => responseData = response.data);
      fillSubCategoriesColumns(responseData);
    }
    async function getDataWarehouse() {
      let responseDataw;
      await axios.get("http://localhost:8081/warehouseitem?wid=" + warehouseid)
        .then((responsew) => responseDataw = responsew.data);
      console.log(responseDataw)
      fillItemsRows(responseDataw);
    }
    getDataWarehouse();
    getData();
  }, [load]);

  const fillSubCategoriesColumns = (data) => {
    let counter = 0;
    let categoryList = [];
    let categoryObj = {};

    data.forEach(category => {
      //console.log("caaat0" + JSON.stringify(category))
      counter++;
      let categoryName = category.name;
      categoryObj[categoryName + ""] = category.subcategoryid;
      categoryList.push(
        <option key={counter} className="dropdown-item" > {category.name}</option>
      )
    });
    console.log("this is my cat obj " + JSON.stringify(categoryObj))
    setSubCategoryMap(categoryObj);
    setSubcategory(categoryList);
  }
  const fillItemsRows = (data) => {
    let counter = 0;
    let itemsList = [];
    let itemListObjTemp = {};
    data.forEach(item_ => {
      itemListObjTemp[item_.itemid] = item_;
      counter++;
      itemsList.push(
        <tr key={counter}>
          <th scope="row">{counter}</th>
          <td>{item_.brand}</td>
          <td>{item_.name}</td>
          <td>{item_.price}</td>
          <td>{item_.date}</td>
          <td>{item_.about}</td>
          <td>
            {/* Call to action buttons */}
            <label className="text-primary " type="button" data-placement="top" title="Delete" onClick={() => handleUpdate(item_)} data-toggle="modal" data-target="#myModalAdd2">Update</label>
          </td>
          <td>
            {/* Call to action buttons */}
            <label className="text-danger " type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={() => handleDelete(item_.itemid)} >Delete</label>
          </td>
        </tr>
      )
    });
    console.log("listObj", itemListObjTemp);
    setItemListObj(itemListObjTemp);
    setProduct(itemsList);
  }

  const handleDelete = async (itemidD) => {
    const itemid = itemidD;
    console.log('delete item' + itemid)
    const res_itemDeleted = await axios.delete("http://localhost:8081/deleteitem?itemid=" + itemid);
    console.log(res_itemDeleted);
    const load_ = load + 1
    setLoad(load_);
  }

  const handleUpdate = async (item) => {

    setItemId(item.itemid);
    setName(item.name);
    setSubcategoryI("");
    console.log("this is the price " + item.unitprice)
    setPrice(item.unitprice);
    setImage({});
    setColor(item.color);
    setMeasure(item.measure);
    setBrand(item.brand);
    setAbout(item.about);


    //const itemid = itemidD;
    //console.log('delete item' + itemid)
    //const res_itemDeleted = await axios.delete("http://localhost:8081/deleteitem?itemid=" + itemid);
    //console.log(res_itemDeleted);
    //const load_ = load + 1
    //setLoad(load_);
  }

  const handleSaveUpdate = async () => {


    const objBody = {
      itemid: itemId,
      name: name,
      subcategory: subcategoryI,
      price: price,
      image: image,
      color: color,
      measure: measure,
      brand: brand,
      about: about,
    }

    await axios.post("http://localhost:8081/updateitem", objBody)


    setItemId("");
    setName("");
    setSubcategoryI("");
    setPrice(0);
    setImage({});
    setColor("");
    setMeasure("");
    setBrand("");
    setAbout("");

    const load_ = load + 1
    setLoad(load_);

    //const itemid = itemidD;
    //console.log('delete item' + itemid)
    //const res_itemDeleted = await axios.delete("http://localhost:8081/deleteitem?itemid=" + itemid);
    //console.log(res_itemDeleted);
    //const load_ = load + 1
    //setLoad(load_);
  }



  //UserManager.js<a className="dropdown-item" href="#">Action</a>

  const userInfo = JSON.parse(localStorage.getItem('loginData'));
  const warehouse = userInfo.warehouseid + "";
  const handleAdd = async () => {
    //const cartdetailid = detailid;
    console.log(name)
    console.log(price)
    console.log(subcategoryI)
    console.log(color)
    console.log(measure)
    console.log(brand)
    console.log(about)
    console.log(warehouse)
    console.log(image)
    if (name != '' && price != 0 && subcategoryI != '' && color != '' && measure != '') {
      const res_cartDetail = await axios.post("http://localhost:8081/addItem?name=" + name + "&unitprice=" + price + "&subcategoryid=" + subcategoryI + "&image=" + null + "&color=" + color + "&measure=" + measure + "&brand=" + brand + "&about=" + about + "&warehouse=" + warehouse);
      await axios.post("http://localhost:8081/saveimage", {
        image64: image,
        name: name
      })
      console.log(res_cartDetail)
      const load_ = load + 1;
      setLoad(load_);
    }
    else {
      console.log('no add, there are empty fields')
    }
  }

  const handleOnChangeName = async (event) => {
    setName(event.target.value);

    //console
  }
  const handleOnChangePrice = async (event) => {
    setPrice(event.target.value);

    //console
  }
  const handleOnChangeAbout = async (event) => {
    setAbout(event.target.value);

    //console
  }
  const handleOnChangeMeasure = async (event) => {
    setMeasure(event.target.value);

    //console
  }
  const handleOnChangeSci = async (event) => {
    console.log("ss before " + JSON.stringify(subCategoryMap))
    setSubcategoryI(subCategoryMap[event.target.value + ""]);

    //console
  }
  const handleOnChangeColor = async (event) => {
    setColor(event.target.value);
    //console
  }


  const handleOnChangeBrand = async (event) => {
    setBrand(event.target.value);
    //console
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  const handleOnChangeImage = async (event) => {
    //console.log("my image ", event.target.files[0])

    const file = event.target.files[0];
    getBase64(file).then(base64 => {
      setImage(base64);
      console.log("file stored", base64);
    });


    //console
  }

  const restartAddItem = () => {
    setItemId("")
    setName("");
    setSubcategoryI("");
    setPrice(0);
    setImage({});
    setColor("");
    setMeasure("");
    setBrand("");
    setAbout("");
  }



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
              data-placement="top" title="Edit" data-toggle="modal" data-target="#myModalAdd" onClick={restartAddItem}>Add Item</button>

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
                          <th scope="col">Nro</th>
                          <th scope="col">Marca</th>
                          <th scope="col">Nombre</th>
                          <th scope="col"></th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Descripcion</th>
                        </tr>
                      </thead>
                      <tbody>

                        {product}

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
              {/**name  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Product name</span>
                </div>
                <input type="text" className="form-control" placeholder={name} value={name} aria-label="Username" aria-describedby="basic-addon1" onChange={handleOnChangeName} />
              </div>

              {/**price  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Price</span>
                </div>
                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={price} value={price} onChange={handleOnChangePrice} />
              </div>
              {/**subcatid */}
              <div className="input-group mb-3">

                <div class="form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Select a Subcategory</span>
                  </div>
                  <select class="form-control" id="exampleFormControlSelect1" placeholder='Select' onChange={handleOnChangeSci}>
                    <option className="dropdown-item text-white" > SELECT..</option>
                    {subcategory}
                  </select>
                </div>


              </div>
              {/**date  */}
              {/**image  */}
              <div className="input-group mb-3 ">
                <label htmlFor="exampleFormControlFile1" className='text-dark'>Upload item image</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleOnChangeImage} />
              </div>
              {/**color  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Color</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={color} value={color} onChange={handleOnChangeColor} />
              </div>
              {/**measure  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Size</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={measure} value={measure} onChange={handleOnChangeMeasure} />
              </div>
              {/**brand  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Brand</span>
                </div>
                <input type="text" className="form-control" aria-label="" placeholder={brand} value={brand} onChange={handleOnChangeBrand} />
              </div>
              {/**about */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Description</span>
                </div>
                <textarea className="form-control" aria-label="With textarea" value={about} onChange={handleOnChangeAbout} />
              </div>
              {/**warehouse  */}

            </div>
            <div className="modal-footer">
              <button type="restart" className="btn btn-secondary" data-dismiss="modal" onClick={restartAddItem}>Close</button>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleAdd}>Save</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="myModalAdd2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Add a New Product</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/**name  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">Product name</span>
                </div>
                <input type="text" className="form-control" placeholder={name} value={name} aria-label="Username" aria-describedby="basic-addon1" onChange={handleOnChangeName} />
              </div>

              {/**price  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Price</span>
                </div>
                <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={price} value={price} onChange={handleOnChangePrice} />
              </div>
              {/**subcatid */}
              <div className="input-group mb-3">

                <div class="form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Select a Subcategory</span>
                  </div>
                  <select class="form-control" id="exampleFormControlSelect1" placeholder='Select' onChange={handleOnChangeSci}>
                    <option className="dropdown-item text-white" > SELECT..</option>
                    {subcategory}
                  </select>
                </div>


              </div>
              {/**date  */}
              {/**image  */}
              <div className="input-group mb-3 ">
                <label htmlFor="exampleFormControlFile1" className='text-dark'>Upload item image</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" onChange={handleOnChangeImage} />
              </div>
              {/**color  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Color</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={color} value={color} onChange={handleOnChangeColor} />
              </div>
              {/**measure  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Size</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder={measure} value={measure} onChange={handleOnChangeMeasure} />
              </div>
              {/**brand  */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Brand</span>
                </div>
                <input type="text" className="form-control" aria-label="" placeholder={brand} value={brand} onChange={handleOnChangeBrand} />
              </div>
              {/**about */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">Description</span>
                </div>
                <textarea className="form-control" aria-label="With textarea" value={about} onChange={handleOnChangeAbout} />
              </div>
              {/**warehouse  */}

            </div>
            <div className="modal-footer">
              <button type="restart" className="btn btn-secondary" data-dismiss="modal" onClick={restartAddItem}>Close</button>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleSaveUpdate}>Save</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductManager;