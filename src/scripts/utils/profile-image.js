import royanImage from '../../public/profile/royan.jpg';
import fannisaImage from '../../public/profile/fannisa.jpg';

const addProfileImage = {
  addRoyanImage() {
    const containerRoyan = document.querySelector('#royan');
    containerRoyan.src = royanImage;
  },
  addFannisaImage() {
    const containerFannisa = document.querySelector('#fannisa');
    containerFannisa.src = fannisaImage;
  },
};

export default addProfileImage;
