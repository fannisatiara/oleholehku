import royanImage from '../../public/profile/royan.jpg';

const addProfileImage = {
  addRoyanImage() {
    const containerRoyan = document.querySelector('#royan');
    containerRoyan.src = royanImage;
  },
};

export default addProfileImage;
