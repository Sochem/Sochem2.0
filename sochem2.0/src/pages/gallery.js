import Navbar from '@/components/navbar'
import React, { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import Footer from '@/components/footer.js'

const Gallery = () => {
  const [imagesByFolder, setImagesByFolder] = useState({});
  const [modalImage, setModalImage] = useState(null); 
  const folderNames = [
    "Deepovan",
    "Holi",
    "Nova",
    "Osmoze",
    "Professors",
    "Sessions and Events",
    "Sports",
  ];

  useEffect(() => {
    const fetchImages = async () => {
      const folderImages = {};

      for (let folderName of folderNames) {
        const folderRef = ref(storage, folderName);
        try {
          const res = await listAll(folderRef);
          const urls = await Promise.all(
            res.items.map((itemRef) => getDownloadURL(itemRef))
          );
          folderImages[folderName] = urls;
        } catch (error) {
          console.error(`Error fetching images from folder "${folderName}":`, error);
        }
      }

      setImagesByFolder(folderImages);
    };

    fetchImages();
  }, []);

  const openModal = (url) => {
    setModalImage(url);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
        <div> <Navbar /></div>
      <h1>Gallery</h1>
      <div className="gallery-container">
        {Object.keys(imagesByFolder).length > 0 ? (
          Object.entries(imagesByFolder).map(([folderName, urls], folderIndex) => (
            <div key={folderIndex} className="gallery-folder">
              <h2>{folderName}</h2>
              <div className="gallery-images">
                {urls.map((url, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => openModal(url)}
                  >
                    <img src={url} alt={`${folderName} Image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>

      {modalImage && (
        <div
          className={`image-modal ${modalImage ? "active" : ""}`}
          onClick={closeModal}
        >
          <img src={modalImage} alt="Zoomed" />
        </div>
      )}
    <div><Footer/></div>
    </div>
  
  );
};

export default Gallery;
