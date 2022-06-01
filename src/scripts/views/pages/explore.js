/* eslint-disable no-undef */
import { createOlehOlehTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
    <div class="row portfolio-container">
        <div class="col-lg-4 col-md-6 portfolio-item filter-jkt">
            <div class="portfolio-wrap">
            
            </div>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const oleholeh = await Source.explore();
    const oleholehContainer = document.querySelector('.portfolio-container');
    oleholeh.forEach((data) => {
      oleholehContainer.innerHTML += createOlehOlehTemplate(data);
    });
  },
};

export default Explore;
