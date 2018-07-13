

export default () => (

    <div className="HeroImage">
        <h2 className="HeroImage-title">自由が丘の緑陰レンタルスペース</h2>
    <style jsx global> { `
    .HeroImage {
        background-image: url('../static/img/cover-photo.jpg');
        height: calc(100vh - 55px);
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        background-size: cover;
        background-color: white;
        background-position: center;
        overflow: hidden;
        opacity: 1;
        color: white;
      
    }
    .HeroImage:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: black;
        opacity: .2; 
    }
    .HeroImage-title {
        position: relative;
        color: white;
    }
    `
    }
    </style>
    </div>

)