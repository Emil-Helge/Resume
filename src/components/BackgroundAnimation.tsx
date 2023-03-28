export function initBackgroundAnimation() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.zIndex = '-1';
  canvas.style.top = '0';
  canvas.style.left = '0';
  document.body.appendChild(canvas);

  const ctx: any = canvas.getContext('2d');
  let particles: Particle[] = [];

  class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;

    constructor(
      x: number,
      y: number,
      size: number,
      speedX: number,
      speedY: number
    ) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      particle.update();
      particle.draw();

      if (particle.size <= 0.18) {
        particles.splice(index, 1);
      }
    });

    requestAnimationFrame(animateParticles);
  }

  function createParticle() {
    const posX = Math.random() * canvas.width;
    const posY = 0;

    const size = Math.random() * 6;
    const speedX = Math.random() - 1.5;
    const speedY = Math.random() + 0.1;

    particles.push(new Particle(posX, posY, size, speedX, speedY));
  }

  resizeCanvas();
  animateParticles();
  window.addEventListener('resize', resizeCanvas);
  let prevScrollPosition = window.pageYOffset;

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPosition) {
      createParticle();
    }

    prevScrollPosition = currentScrollPos;
  });
}
