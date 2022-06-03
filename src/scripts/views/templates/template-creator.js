const createOlehOlehTemplate = (data) => `

    <div class="col-lg-4 col-md-6 portfolio-item">
        <div class="portfolio-wrap">
            <img src="${data['img-url']}" title="${data.name}" tabindex="0">
            <div class="portfolio-info">
                <h4>${data.name}</h4>
                <p>${data.desc}</p>
                <div class="portfolio-links">
                    <a href="${data['img-url']}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${data.name}"><i class="fas fa-plus"></i></a>
                    <a href="${data['img-url']}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${data.name}"><i class="far fa-thumbs-up"></i></a>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createOlehOlehTemplate,
};
