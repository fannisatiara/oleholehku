/* eslint-disable no-unreachable-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import { getUserID } from '../../firebase/auth';

const createOlehOlehTemplate = (data) => /* html */`

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
                    <div id="upvote-${data.id}" class="col">
                        
                    </div>
                    <div id="count-${data.id}" class="col align-self-center">
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const createUpvoteButton = (data) => {
  const uid = getUserID();
  console.log(data.upvote.uid);
  for (const itemUID in data.upvote.uid) {
    console.log(itemUID);
    if (uid === itemUID) {
      console.log('sudah vote');
      return /* html */`
      <a id="button-${data.id}" data-id="${data.id}" data-city="${data.city}" class="portfolio-lightbox" title="upvote"><i class="fa-solid fa-thumbs-up"></i></a>
  `;
    }
    console.log('belum vote');
    return /* html */`
        <a id="button-${data.id}" data-id="${data.id}" data-city="${data.city}" class="btn-vote portfolio-lightbox" title="upvote"><i class="fa-regular fa-thumbs-up"></i></a>
    `;
  }
};

const createUpvotedButton = (data) => /* html */`
    <a id="button-${data.id}" data-id="${data.id}" class="portfolio-lightbox" title="upvote"><i class="fa-solid fa-thumbs-up"></i></a>
`;

export {
  createOlehOlehTemplate, createUpvoteButton, createUpvotedButton,
};
