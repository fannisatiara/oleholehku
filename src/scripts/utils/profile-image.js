import royanImage from '../../public/profile/royan.jpg';
import fannisaImage from '../../public/profile/fannisa.jpg';
import yogaImage from '../../public/profile/yoga.jpg';
import nadiaImage from '../../public/profile/nadia.jpg';

const addProfileImage = {
  addRoyanImage() {
    const containerRoyan = document.querySelector('#royan');
    containerRoyan.src = royanImage;
  },
  addFannisaImage() {
    const containerFannisa = document.querySelector('#fannisa');
    containerFannisa.src = fannisaImage;
  },
  addYogaImage() {
    const containerYoga = document.querySelector('#yoga');
    containerYoga.src = yogaImage;
  },
  addNadiaImage() {
    const containerNadia = document.querySelector('#nadia');
    containerNadia.src = nadiaImage;
  },
};

export default addProfileImage;
