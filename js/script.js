document.querySelector('.portal').addEventListener('mousemove', (e) => {
    const portal = e.currentTarget;
    const rect = portal.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleX = (y - centerY) / centerY * 10;
    const angleY = (x - centerX) / centerX * 10;

    portal.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
});

document.querySelector('.portal').addEventListener('mouseleave', (e) => {
    e.currentTarget.style.transform = 'scale(1)';
});

document.getElementById('portal-link').addEventListener('click', function (e) {
    e.preventDefault();

    this.style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';

    const credit = document.querySelector('.credit');
    credit.style.opacity = '1';

    setTimeout(() => {
        window.location.href = 'https://szhong.4399.com/4399swf//upload_swf/ftp35/liuxinyu/20210324/jj01/index.html';
    }, 2000);
});

const creditsButton = document.getElementById('creditsButton');
const modal = document.getElementById('creditsModal');
const modalBackdrop = document.getElementById('modalBackdrop');

creditsButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modalBackdrop.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
}

modalBackdrop.addEventListener('click', closeModal);