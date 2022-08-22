
import React, {useState, useEffect} from "react";
import {
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {Form, Button, Card} from "react-bootstrap";
import {API, Storage} from "aws-amplify";
import {v4 as uuid} from "uuid";
import PuffLoader from "react-spinners/PuffLoader";
import EditModal from "../components/Edit/Editmodal";
import tempColors from "css-color-names";
import Input from "../components/Input/InputField";
import DeleteModal from "../components/Delete/DeleteModal";
import Badge from "../components/Badge/Badge";

let reader = new FileReader();
const colors = [];

const override = {
  display: "block",
  margin: "0 auto",
};

for (const [key, value] of Object.entries(tempColors)) {
  colors.push(key);
}

function Shop() {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    category: "",
    price: 0,
    colors: [],
    sizes: [],
    images: [],
    description: ""
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState("");
  const [priceError, setPriceError] = useState(false);
  const [priceErrorMessage, setPriceErrorMessage] = useState("");
  const [imageError, setImageError] = useState(false);
  const [imageErrorMessage, setImageErrorMessage] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [brandError, setBrandError] = useState(false);
  const [brandErrorMessage, setBrandErrorMessage] = useState("");
  const [colorsError, setColorsError] = useState(false);
  const [colorsErrorMessage, setColorsErrorMessage] = useState("");
  const [sizesError, setSizesError] = useState(false);
  const [sizesErrorMessage, setSizesErrorMessage] = useState("");
  const [images, setImages] = useState([]);
  const [color, setColor] = useState("#ff0000");

  const [visible, setVisible] = useState(false);
  const handleSetVisible = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    console.log("Upload files", data);
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (id) => {
    console.log("Remove image id", id);
  };

  useEffect(() => {
    async function getProducts(){
      try{
        let data = await API.get("shopapi", "/products");
        let tempdata = data.data.Items;
        console.log(tempdata);

        const signedFiles = await Promise.all(tempdata.map(async file => {
          const signedFile = [];
          for (let i = 0; i < file.images.length; i++){
            let tempSigned = await Storage.get(file.images[i].key);
            signedFile.push({key: file.images[i].key, url: tempSigned});
          }

          return {...file, images: signedFile};
        }))
          
        console.log(signedFiles);
        setProducts(signedFiles)

      } catch(err){
        console.log(err);
      }
    }

    getProducts();
  }, [])

  function handleChange(e){
    let name = e.target.name;
    console.log(e.target.value);

    switch (name){
      case "name":
        setNameError(false);
        break;

      case "price":
        setPriceError(false);
        break;

      case "images":
        setImageError(false);
        break;

      case "colors":
        setColorsError(false);
        break;

      case "description":
        setDescriptionError(false);
        break;
    }

    if (name === "images"){
      setValues({...values, [name]: [...values.images, ...e.target.files]});
    } else if (name === "colors"){
      let temp = [...values.colors];
      
      if (temp.indexOf(e.target.value) === -1){
        setValues({...values, [name]: [...values.colors, e.target.value]});  
      } else{
        console.log("already in");
      }
    } else {
      setValues({...values, [name]: e.target.value});
    }

    console.log(values);
  }

  function deleteImage(index){
    let tempImageArray = [...values.images];
    tempImageArray.splice(index, 1);
    setValues({...values, images: tempImageArray});
  }

  function validate(){
    let valid = true;
    console.log(values);

    if (!values.name){
      valid = false;
      setNameError(true);
      setNameErrorMessage("Please enter a valid name")
    }

    if (!values.brand){
      valid = false;
      setBrandError(true);
      setBrandErrorMessage("Please enter a brand name")
    }

    if (values.price <= 0){
      valid = false;
      setPriceError(true);
      setPriceErrorMessage("Please specify a price")
    }

    if (values.images.length <= 0){
      valid = false;
      setImageError(true);
      setImageErrorMessage("Please import an image")
    }

    if (!values.description){
      valid = false;
      setDescriptionError(true);
      setDescriptionErrorMessage("Please type in description")
    }

    return valid;
  }
  
  function handleSubmit(e){
    e.preventDefault();
    let valid = validate();
    
    if (valid){
      setLoading(true);

      async function saveProduct(){
        try{
          let imageKeys = [];
          for (let i = 0; i < values.images.length; i++){
            let key = await Storage.put(`${uuid()}-${values.images[i].name}`, values.images[i]);
            imageKeys.push(key);
          }
          let data = await API.post("shopapi", "/products", {body: {...values, images: imageKeys}});
          setLoading(false);
          console.log(data);
        } catch(err){
          console.log(err);
        }
      }

      saveProduct();
    }
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Add Menu</CardTitle>
              </CardHeader>
              <CardBody style={{overflow: "hidden"}}>
                <Form onSubmit={handleSubmit}>
                  {loading && <div className="spinner-container">
                    <div style={{marginTop: "200px"}}>
                      <PuffLoader color={color} loading={loading} cssOverride={override} size={100}/>
                    </div>
                  </div>}
                  <Input 
                    name="name" 
                    type="text"
                    placeholder="Name"
                    label="Name"
                    required={true}
                    onChange={handleChange}
                    error={nameError}
                    errorMessage={nameErrorMessage}/> 

                  <Input 
                    name="brand" 
                    type="text"
                    placeholder="Brand"
                    label="Brand"
                    required={true}
                    onChange={handleChange}
                    error={brandError}
                    errorMessage={brandErrorMessage}/> 

                  <Input 
                    name="category" 
                    type="select"
                    placeholder="Category"
                    label="Category"
                    required={true}
                    onChange={handleChange}
                    error={categoryError}
                    errorMessage={categoryErrorMessage}
                  >
                    <option value=""> - Category - </option>
                    <option value="Electronics">Electronics</option>
                    <option value="Travel Supplies">Travel Supplies</option>
                    <option value="Kitchen Accessories">Kitchen Accessories</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Furniture">Furniture</option>
                  </Input>
                  <div>
                    {values.colors.map((color, i) => (
                      <Badge key={i} color={color}/>
                    ))}
                  </div>

                  <Input 
                    name="colors"
                    type="select"
                    placeholder="Color"
                    label="Color"
                    required={true}
                    onChange={handleChange}
                    error={colorsError}
                    errorMessage={colorsErrorMessage}
                  >
                    <option value=""> - Color - </option>
                    {colors.map((color, i) => (
                      <option key={i} value={color}>{color}</option>
                    ))}
                  </Input>

                  <Input 
                    name="price" 
                    type="number"
                    placeholder="Price"
                    label="Price"
                    required={true}
                    error={priceError}
                    onChange={handleChange}
                    errorMessage={priceErrorMessage}/>

                  <Input 
                    name="images" 
                    type="file"
                    placeholder="Image"
                    label="Image"
                    required={true}
                    error={imageError}
                    errorMessage={imageErrorMessage}
                    onChange={handleChange}
                    multiple={true}/>

                  {values.images.map((image, i) => (
                    <div style={{display: "inline-block", position: "relative"}} key={i}>
                      <img src={window.URL.createObjectURL(image)} key={i} width={100} height={100} style={{margin: 10}}/>
                      <Button variant="danger" style={{position: "absolute", left: 10}} onClick={() => deleteImage(i)}>X</Button>
                    </div>
                  ))}
                  
                  <Input 
                    name="description" 
                    type="textarea"
                    placeholder="Leave a comment here"
                    label="Price"
                    required={true}
                    error={descriptionError}
                    onChange={handleChange}
                    errorMessage={descriptionErrorMessage}/>

                  <Button variant="danger" type="submit" onSubmit={handleSubmit}>
                    Submit
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Order Table</CardTitle>
              </CardHeader>
              <CardBody style={{overflow: "hidden"}}>
                <Row>
                  {products.map((product, i) => (
                    <Col key={i}>
                      <Card style={{ width: '18rem', height: "20rem" }}>
                        <Card.Img variant="top" src={product.images[0].url} style={{ width: '288px', height: "130px" }}/>
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Text>
                            {product.description.length >= 30 ? `${product.description.slice(0, 30)}...` : product.description}
                          </Card.Text>
                          <DeleteModal menu={product}/>
                          <EditModal menu={product}/>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Shop;

/**
 * 
 * const aws = require('aws-sdk');

exports.handler = async (event, context, callback) => {
  const cognitoProvider = new aws.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});
  
  let isAdmin = false
  const adminEmails = ["admin@grillzandmoore.com.ng", "isahsaidu418@gmail.com"];
  
  // If the user is one of the admins, set the isAdmin variable to true
  if (adminEmails.indexOf(event.request.userAttributes.email) !== -1) {
    isAdmin = true
  }
  
  const groupParams = {
    UserPoolId: event.userPoolId,
  }
  
  const userParams = {
    UserPoolId: event.userPoolId,
    Username: event.userName,
  }

  if (isAdmin) {
    groupParams.GroupName = 'Admin',
    userParams.GroupName = 'Admin'
    // First check to see if the group exists, and if not create the group
    try {
      await cognitoProvider.getGroup(groupParams).promise();
    } catch (e) {
      await cognitoProvider.createGroup(groupParams).promise();
    }
    // If the user is an administrator, place them in the Admin group
    try {
      await cognitoProvider.adminAddUserToGroup(userParams).promise();
      return event;
    } catch (e) {
      return event;
    }
  } else {
    // If the user is in neither group, proceed with no action
    return event;
  }
}


 * 
 */
