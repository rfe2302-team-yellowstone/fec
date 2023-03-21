import React, {useState, useEffect} from "react";
import axios from "axios";

const NewReview = ({product, reviews}) => {

  // console.log(product, '-------PRODUCT--------')

  const [form, setForm] = useState(false)

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const [characteristics, setCharacteristics] = useState({
    125031: 3,  //fit
    125032: 3, //length
    125033: 3, // comfort
    125034: 3 // quality
  })

  const [reviewData, setReviewData] = useState({
    product_id: product.id,
    rating: 3,
    summary: 'THIS IS A TEST',
    body: 'THIS IS ALSO A TEST',
    recommended: false,
    name: 'TEST123',
    email: 'TESTER123@TESTER.TEST',
    photos: [],
    characteristics: characteristics
  })

  const [formErrors, setFormErrors] = useState({
    rating: false,
    recommended: false,
    body: false,
    reviewer_name: false,
    email: false
  })

  const handleFormSubmit = (e) => {
    console.log('submitted')
    e.preventDefault()
    console.log(characteristics, '---------CHARACTERISTICS---------')
    setReviewData((prevState) => ({
      ...prevState,
      characteristics: characteristics
    }))
    // axios post request (reset form fields too)
    console.log(reviewData, '-------REVIEWDATA--------')
    axios.post('/reviews', reviewData)
    .then(() => {
      setForm(false)
    })
    .catch((err) =>{
      console.log(err)
      setForm(false)
    })
  }

  const disabledButtonChecker = () => {
    if (reviewData.name !== '' && reviewData.email !== '' && reviewData.rating !== 0 && reviewData.body !== '')
    {
      setIsSubmitDisabled(false)
    } else {
      // alert('Fill our all mandatory fields')
      setIsSubmitDisabled(true)
    }
  }

  const changeHandler = (e) => {
    disabledButtonChecker()
    const {name, value} = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    if (formErrors.name) {
      setFormErrors({[name]: true})
    }
  }

  const characteristicsChangeHandler = (e) => {
    disabledButtonChecker()
    const {name, value} = e.target;
    let id;
    if (name === 'fit') {
      id = 125031
    } else if (name === 'length') {
      id = 125032
    } else if (name === 'comfort') {
      id = 125033
    } else if (name === 'quality') {
      id = 125034
    }
    setCharacteristics((prevState) => ({
      ...prevState,
      [id]: {
        value: value
      }
    }))
  }

  const photoHandler =(e) => {
    const photoFiles = Array.from(e.target.files).slice(0, 5);
    setReviewData(photoFiles)
  }



  return (
    <div>
      <button type="button"  className="btn btn-active btn-primary" onClick={() => setForm(true)}>Add a review</button>
      {form && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset=0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidformerden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-5 sm:p-6 sm:pb-4">
              <h2 className="text-lg leading-6 font-medium text-green-900">Leave a review</h2>
              <form onSubmit={handleFormSubmit}>
                <label>
                  {/* Overall Rating:
                  <input type="number" min="1" max="5" name="rating" value={Number(reviewData.rating)} onChange={changeHandler} required></input>
                </label>
                <label> */}

                <div>

                    <label className="block font-medium text-gray-700 mb-2">
                    Overall Rating
                    </label>
                    <input type="range" min="1" max="5" step="1" name="rating" value={reviewData.rating} onChange={changeHandler} className="w-full">
                    </input>
                    <div className="flex justify-between text-sm text-gray-600">
                    <span>Terrible</span>
                    <span>So-so</span>
                    <span>Great!</span>
                    </div>
                    </div>
                Recommended:
                <select name="recommended" value={reviewData.recommended} onChange={changeHandler} required>
                  <option value="">Select an option</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
                </label>

              {/* <div>
                <label className="block font-medium text-gray-700 mb-2">
                Size score (1 if too small, 3 if perfect, 5 if too large)
                </label>

                ---SIZE
                <input type="range" min="1" max="5" step="1" name="size" value={reviewData.size} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Too Small</span>
                <span>Perfect</span>
                <span>Too Large</span>
                 </div>
                </div>
                <div>
                <label className="block font-medium text-gray-700 mb-2">

               -----Width-------
                </label>
                <input type="range" min="1" max="5" step="1" name="width" value={reviewData.width} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Too Small</span>
                <span>Perfect</span>
                <span>Too Large</span>
                 </div>
                </div> */}
                <div>

                <label className="block font-medium text-gray-700 mb-2">
               Comfort
                </label>
                <input type="range" min="1" max="5" step="1" name="comfort" value={reviewData.comfort} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Terrible</span>
                <span>So-so</span>
                <span>Great!</span>
                 </div>
                </div>
                <div>
                <label className="block font-medium text-gray-700 mb-2">
               Quality
                </label>
                <input type="range" min="1" max="5" step="1" name="quality" value={reviewData.quality} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Poor</span>
                <span>What I expected</span>
                <span>Perfect</span>
                 </div>
                </div>
                <div>
                <label className="block font-medium text-gray-700 mb-2">
               Length
                </label>
                <input type="range" min="1" max="5" step="1" name="length" value={reviewData.length} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Runs short</span>
                <span>Perfect</span>
                <span>Runs long</span>
                 </div>
                </div>
                <div>
                <label className="block font-medium text-gray-700 mb-2">
               Fit
                </label>
                <input type="range" min="1" max="5" step="1" name="fit" value={reviewData.fit} onChange={characteristicsChangeHandler} className="w-full">
                </input>
                <div className="flex justify-between text-sm text-gray-600">
                <span>Runs tight</span>
                <span>Perfect</span>
                <span>Runs long</span>
                 </div>
                </div>
                <label>
                  Summary (60 characters or fewer) {reviewData.summary.length} characters
                <textarea rows="4" maxLength="60" name="summary" value={reviewData.summary} onChange={changeHandler} className="w-full border border-gray-400 rounded lg py-2 px-3 mb-4" placeholder="Enter your review here...">
                </textarea>
                </label>
                <label className="block font font-medium text-gray-700 mb-2">
                  Review Body
                </label>
                <p className="text-gray-600 mb-4">
                  Please enter a detailed description here that is between 50 and 1000 characters
                </p>
                <textarea rows="4" minLength="50" maxLength="1000" name="body" value={reviewData.body} onChange={changeHandler} className="w-full border border-gray-400 rounded lg py-2 px-3 mb-4" placeholder="Enter your review here!" required>
                </textarea>
                <input
                type="file"
                accept="image/*"
                multiple
                onChange={photoHandler}
                className="mt-4 mb-4"
                ></input>
                <div className="flex flex-wrap -mx-2">
                  {reviewData.photos.map((photo, index) => (
                    <div key={index} className="w-1/5 px-2 mb-4">
                    <img src={URL.createObjectURL(photo)} alt={`Photo ${index + 1}`} className="w-full h-auto rounded-lg"></img>
                    </div>
                  ))}
                </div>
                <label className="block font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input type="text" name="name" value={reviewData.name} onChange={changeHandler} className="w-full border border-gray-400 rounded-lg py-2 px-3 mb-4" placeholder="username" required></input>
                <label className="block font-medium text-gray-700 mb-2">
                  email
                </label>
                <input type="email" name="email" value={reviewData.email} onChange={changeHandler} className="w-full border border-gray-400 rounded-lg py-2 px-3 mb-4" placeholder="username" required></input>
                <button type="button" className="btn btn-active btn-primary" disabled={isSubmitDisabled} onClick={handleFormSubmit}>Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

   {/* <button className="btn btn-active btn-primary" onClick={handleButtonClick}>Submit</button> */}

export default NewReview