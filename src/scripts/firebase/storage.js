import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

async function saveImage(file) {
  try {
    // 1 - We add a message with a loading icon that will get updated with the shared image.
    // const messageRef = await addDoc(collection(getFirestore(), 'messages'), {
    //   name: getUserName(),
    //   imageUrl: LOADING_IMAGE_URL,
    //   profilePicUrl: getProfilePicUrl(),
    //   timestamp: serverTimestamp()
    // });

    // 2 - Upload the image to Cloud Storage.
    const filePath = `recommendations/${file.name}`;
    const newImageRef = ref(getStorage(), filePath);
    const fileSnapshot = await uploadBytesResumable(newImageRef, file);

    // 3 - Generate a public URL for the file.
    // const publicImageUrl = await getDownloadURL(newImageRef);
    // console.log(publicImageUrl);

    // 4 - Update the chat message placeholder with the image's URL.
    // await updateDoc(messageRef,{
    //   imageUrl: publicImageUrl,
    //   storageUri: fileSnapshot.metadata.fullPath
    // });
  } catch (error) {
    console.error('There was an error uploading a file to Cloud Storage:', error);
  }
}

async function getImageURL(file) {
  // 2 - Upload the image to Cloud Storage.
  const filePath = `recommendations/${file.name}`;
  const newImageRef = ref(getStorage(), filePath);

  // 3 - Generate a public URL for the file.
  const publicImageUrl = await getDownloadURL(newImageRef);
  return publicImageUrl;
}

// Triggered when a file is selected via the media picker.
async function onMediaFileSelected(event) {
  event.preventDefault();
  const file = event.target.files[0];

  // Clear the selection in the file picker input.
  //   imageFormElement.reset();

  // Check if the file is an image.
  // if (!file.type.match('image.*')) {
  //   const data = {
  //     message: 'You can only share images',
  //     timeout: 2000,
  //   };
  //   signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
  //   return;
  // }
  // Check if the user is signed-in
  await saveImage(file);
}

export { onMediaFileSelected, getImageURL };
