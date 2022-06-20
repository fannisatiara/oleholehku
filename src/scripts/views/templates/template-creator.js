/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */

const createOlehOlehTemplate = (data) => /* html */`

    <div data-aos="zoom-in" data-aos-delay="100" class="col-lg-4 col-md-6 portfolio-item">
        <div class="portfolio-wrap">
            <img src="${data.imgUrl}" title="${data.name}" tabindex="0">
            <div class="portfolio-info">
                <h4>${data.name}</h4>
                <p>${data.city}</p>
                <div class="row portfolio-links">
                    <div class="col">
                    <a href="${data.imgUrl}" 
                    class="glightbox"
                    data-type="image"
                    data-title="${data.name}"
                    data-description="${data.desc}"
                    title="info"><i class="fas fa-plus"></i></a>
                    </div>
                    <div id="upvote-${data.id}" class="col">
                        
                    </div>
                    <div id="count-${data.id}" class="col align-self-center">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createUpvoteButton = (city, id) => /* html */ `
    <a data-aos="zoom-in" data-aos-delay="100" id="button-${id}" data-id="${id}" data-city="${city}" class="upvote portfolio-lightbox" title="upvote"><i class="fa-regular fa-thumbs-up"></i></a>
 `;

const createUpvotedButton = (city, id) => /* html */`
    <a data-aos="zoom-in" data-aos-delay="100" id="button-${id}" data-id="${id}" data-city="${city}" class="upvoted portfolio-lightbox" title="upvote"><i class="fa-solid fa-thumbs-up"></i></a>
`;

export {
  createOlehOlehTemplate, createUpvoteButton, createUpvotedButton,
};
