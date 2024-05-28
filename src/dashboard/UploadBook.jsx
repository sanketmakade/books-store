import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);

  }
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const  category = form.category.value;
    const bookDescription= form.bookDescription.value;
    const bookPDFURL= form.bookPDFURL.value;



    const bookObj={
      bookTitle,authorName,imageURL, category,bookDescription,bookPDFURL
    }
    console.log(bookObj);
  }
  return (
    <div className=' px-4 my-12 '>
      <h2 className=' mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className=' flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="BookTitle"
                value="Book Title" />
            </div>
            <TextInput
              id="BookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book name"
              required />
          </div>



          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName"
                value="author Name " />
            </div>
            <TextInput
              id="authorName"

              name='authorName'

              type="text"
              placeholder="author Name"

              required />
          </div>

        </div>





        <div className=' flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL"
                value="Book image URL" />
            </div>
            <TextInput
              id=" imageURL"
              name='imageURL'
              type="text"
              placeholder="Book image URL"
              required />
          </div>




          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState"
                value="Book Category" />
            </div>


            <Select id='inputState' name='category' className=' w-full rounded'
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>


          </div>


        </div>




        <div className=' mb-2 block'>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription"

              value="Book image URL" />
          </div>

          <Textarea id=" bookDescription"
            name='bookDescription'
            placeholder="Write Your book description..."
            className='w-full'
            required rows={4} />


        </div>






         
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL"
              value="Book PDF URL" />
          </div>
          <TextInput
            id=" 
              bookPDFURL"
            name=' 
              bookPDFURL'
            type="text"
            placeholder="Book PDF URL"
            required />
         <Button type="submit" className=' mt-5'>UPload Book</Button>

      </form>

    </div>
  )
}

export default UploadBook