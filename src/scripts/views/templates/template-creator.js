/* eslint-disable import/prefer-default-export */
const createOlehOlehTemplate = (data) => `

    <div class="col-lg-4 col-md-6 portfolio-item filter-jkt">
        <div class="portfolio-wrap">
            <img src="${data['img-url']}" title="${data.name}" tabindex="0">
            <div class="portfolio-info">
                <h4>${data.name}</h4>
                <p>${data.desc}</p>
                <div class="portfolio-links">
                    <a href="${data['img-url']}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${data.name}"><i class="bx bx-plus"></i></a>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createOlehOlehTemplate,
};
