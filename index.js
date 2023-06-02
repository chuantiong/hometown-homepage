import { activityDatas } from './data.js';

const getActivityHtml = () => {
    let activityHtml = ``;
    
    activityDatas.forEach(activityData => {
        let leftClass = '';
        
        if (activityData.title === 'Mulu Headhunter’s Trail') {
            leftClass = 'left'
        };
        
        activityHtml += `
        <div class="activities__card">
            <div class="activities__card-img" >
                <img class="activities__card-img-size ${leftClass}" src="${activityData.image}">
            </div>
            <h3 class="card__title">
                ${activityData.title}
            </h3>
            <p class="card__description">
                ${activityData.description}
            </p>
        </div>
        `
    });
    return activityHtml;
};

const render = () => {
    document.getElementById('activities__container').innerHTML = getActivityHtml();
};

render();


