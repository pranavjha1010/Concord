import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
  { key: 1, value: "Business-Friendly" },
  { key: 2, value: "Environmental" },
  { key: 3, value: "Goevernment-Organized" },
  { key: 4, value: "International" },
  { key: 5, value: "Quasi-Autonomous" },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [AddressValue, setAddressValue] = useState("");
  const [ContactValue, setContactValue] = useState("");
  const [CategoryValue, setCategoryValue] = useState(1);
  const [ProjectValue, setProjectValue] = useState("");
  const [UrlValue, setUrlValue] = useState("");
  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
    console.log(props);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };
  const onContactChange = (event) => {
    setContactValue(event.currentTarget.value);
  };
  const onAddressChange = (event) => {
    setAddressValue(event.currentTarget.value);
  };
  const onUrlChange = (event) => {
    setUrlValue(event.currentTarget.value);
  };
  const onProjectChange = (event) => {
    setProjectValue(event.currentTarget.value);
  };

  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !DescriptionValue || !CategoryValue || !Images) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: TitleValue,
      description: DescriptionValue,
      contact: ContactValue,
      project: ProjectValue,
      url: UrlValue,
      address: AddressValue,
      images: Images,
      Category: CategoryValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload NGO Details</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        <label>Title</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Description</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />
        <label>Address</label>
        <TextArea onChange={onAddressChange} value={AddressValue} />
        <br />
        <br />
        <label>Contact</label>
        <Input onChange={onContactChange} value={ContactValue} />
        <br />
        <br />
        <label>Project (Purpose)</label>
        <Input onChange={onProjectChange} value={ProjectValue} />
        <br />
        <br />
        <label>Website Url(if any)</label>
        <Input onChange={onUrlChange} value={UrlValue} />
        <br />
        <br />
        <select onChange={onCategorySelectChange}>
          {Category.map((item) => (
            <option key={item.key} value={item.key}>
              {item.value}{" "}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
