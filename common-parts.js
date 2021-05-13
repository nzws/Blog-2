const header = document.getElementById("header");
header.insertAdjacentHTML("afterbegin", '<div class="sub-title">サブタイトルは思い付かないので募集中</div>');
header.insertAdjacentHTML("afterbegin", '<a href="/" class="title">おぬ的な気まぐれブログ</a>');

const footer = document.getElementById("footer");
footer.insertAdjacentHTML("beforeend", '<div class="copyright">(C) Something Onu</div>');
footer.insertAdjacentHTML("beforeend", '<div class="precautions">お問い合わせ先 : <b>contact@0nu.be</b> もしくは <b>rogatelice@protonmail.com</b></div>');
footer.insertAdjacentHTML("beforeend", '<div class="precautions">本サイトに掲載された情報・データによる損害については<b>一切の責任を負いません</b>。</div>');
footer.insertAdjacentHTML("beforeend", '<div class="precautions">本サイトに掲載された情報・データの無断転載及び商用利用は<b>クレジットの記載を条件</b>に全て許可しているよ。</div>');

const sidebar = document.getElementById("sidebar");
sidebar.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="profile">
            <div class="profile-1">
                <div>
                    <img src="/assets/icon.png" />
                </div>
                <div class="name">
                    <ruby><rb>Something Onu</rb><rp>(</rp><rt>おぬ的な何か</rt><rp>)</rp></ruby>
                </div>
            </div>
            <div class="profile-2">インターネットの端でひっそりと余暇を楽しむ学生。色々と活動を行う中、最近は小説の執筆やマイクラ鯖の開発協力、小規模なプロジェクトの制作、ＰＣゲームを趣味として時間を潰している。</div>
        </div>
        <div class="gallery">
            <div class="comment">My Cool Environment</div>
            <img src="/assets/desktop.jpg" />
        </div>
        <div class="gallery">
            <div class="comment">My Cool Computers</div>
            <img src="/assets/laptop.jpg" />
        </div>
        <div class="tip">
            <div class="category">ソーシャルメディア</div>
            ・<a href="https://twitter.com/SomethingOnu" target="_blank" rel="noopener noreferrer">Twitter</a></br>
            ・<a href="https://www.youtube.com/channel/UC464uXof2ms92PtIWz6yIAg" target="_blank" rel="noopener noreferrer">YouTube</a></br>
            ・<a href="https://github.com/SomethingOnu" target="_blank" rel="noopener noreferrer">GitHub</a></br>
            ・<a href="https://www.pixiv.net/users/63404396" target="_blank" rel="noopener noreferrer">Pixiv</a>
            <div class="category">外部リンク</div>
            ・<a href="https://0nu.be/" target="_blank" rel="noopener noreferrer">0nu.be (旧ホームページ)</a></br>
            ・<a href="http://www.skaldworld.com/" target="_blank" rel="noopener noreferrer">Skald World</a></br>
            ・<a href="https://dotplants.net/" target="_blank" rel="noopener noreferrer">dotPlants</a>
        </div>
        <div class="gallery">
            <div id="youtube" class="video">
                <iframe src="https://www.youtube.com/embed/FGbCSufgnsw?mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `
);

const onResize = () => {
    const video = document.getElementById("youtube");
    if (!video) {
        throw new Error("X(");
    }

    const width = video.clientWidth;
    const height = (width / 16) * 9;
    video.style.height = `${height}px`;
}

onResize();
window.addEventListener('resize', onResize);
