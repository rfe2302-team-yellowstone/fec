import React, { useEffect, useRef } from 'react';

const UploadWidget = ({setImageURLs}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dpmnfzxgr',
      uploadPreset: 'q0asd8f7',
      maxFiles: 5
    }, (err, result) => {
      // console.log('result:', result);
      if (err) {
        console.log('error:', err);
      }
      if (result.event === 'queues-end') {
        let urls = result.data.info.files.map(file => file.uploadInfo.secure_url)
        setImageURLs(urls);
      }
    });
  }, [])

  const handleUploadClick = e => {
    e.preventDefault();
    widgetRef.current.open();
  }

  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Your Images</span>
      </label>
      <button className='btn' onClick={handleUploadClick}>Upload</button>
      <label className="label">
        <span className="label-text-alt">Up to 5 images allowed.</span>
      </label>
    </div>
  )
}

export default UploadWidget;