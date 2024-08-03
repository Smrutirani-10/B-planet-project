import React, { useState } from 'react';
import styled from 'styled-components';
import { useItems } from '../context/ItemContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 40px 20px 20px 20px;
`;

const AddItemBox = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: space-between;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const ImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 10px;
  border: 1px dashed #ccc;
  border-radius: 10px;
`;

const AddItemPage = () => {
  const { addItem } = useItems();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [guide1, setGuide1] = useState('');
  const [guide2, setGuide2] = useState('');
  const [guide3, setGuide3] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title,
      subtitle,
      guides: [
        { guide: guide1, description: guide1 },
        { guide: guide2, description: guide2 },
        { guide: guide3, description: guide3 }
      ],
      description,
      image: imagePreview
    };
    addItem(newItem);
  };

  return (
    <Container>
      <AddItemBox>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Section>
              <Title>Title</Title>
              <Input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Sub title"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </Section>
            <Section>
              <Title>Guide</Title>
              <Input
                type="text"
                placeholder="Guide 1"
                value={guide1}
                onChange={(e) => setGuide1(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Description"
                value={guide1}
                onChange={(e) => setGuide1(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Guide 2"
                value={guide2}
                onChange={(e) => setGuide2(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Description"
                value={guide2}
                onChange={(e) => setGuide2(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Guide 3"
                value={guide3}
                onChange={(e) => setGuide3(e.target.value)}
                required
              />
              <Input
                type="text"
                placeholder="Description"
                value={guide3}
                onChange={(e) => setGuide3(e.target.value)}
                required
              />
            </Section>
            <Section>
              <Title>Description</Title>
              <TextArea
                placeholder="Write your description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Section>
            <Button type="submit">Add Item</Button>
          </Form>
        </FormContainer>
        <ImageContainer>
          <Label>Image</Label>
          <Input type="file" accept="image/*" onChange={handleImageChange} required />
          {imagePreview && <ImagePreview src={imagePreview} alt="Preview" />}
        </ImageContainer>
      </AddItemBox>
    </Container>
  );
};

export default AddItemPage;
