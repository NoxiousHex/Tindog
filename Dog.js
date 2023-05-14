export default class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    getProfileHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        const swipedBadge = `<img class="badge" src="./images/badge-nope.png" alt="Nope badge">`;
        const likedBadge = `<img class="badge" src="./images/badge-like.png" alt="Like badge">`;
        const renderBadge = hasBeenLiked
            ? likedBadge
            : hasBeenSwiped
            ? swipedBadge
            : "";
        return `
            ${renderBadge}
            <img class="profile-img" src=${avatar} alt="Match profile image">
            <div class="profile-text">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
        `;
    }

    updateHasBeenAttr(id) {
        this.hasBeenSwiped = true;
        if (id === "like-btn") {
            this.hasBeenLiked = true;
        }
    }
}
