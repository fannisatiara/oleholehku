const createOlehOlehTemplate = (data) => `

    <div class="col-lg-4 col-md-6 portfolio-item">
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
                    <div class="col">
                        <a data-gallery="portfolioGallery" class="portfolio-lightbox" title="upvote"><i class="far fa-thumbs-up"></i></a>
                    </div>
                    <div class="col align-self-center">
                        <p>${data.upvote.count}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export {
  createOlehOlehTemplate,
};
