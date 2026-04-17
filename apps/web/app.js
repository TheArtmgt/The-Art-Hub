const user = {
  name: 'Artist',
  genre: 'Afrobeats',
  location: 'Surulere, Lagos',
  hasToken: false
};

const tokenModal = document.querySelector('[data-token-modal]');
const tokenActions = document.querySelectorAll('[data-token-action]');
const tokenStatus = document.querySelectorAll('[data-token-status]');

if (!user.hasToken) {
  tokenStatus.forEach((node) => {
    node.textContent = 'Inactive';
  });
}

tokenActions.forEach((button) => {
  if (!user.hasToken) {
    button.setAttribute('aria-disabled', 'true');
  }

  button.addEventListener('click', (event) => {
    if (!user.hasToken) {
      event.preventDefault();
      tokenModal?.classList.add('visible');
    }
  });
});

document.querySelectorAll('[data-close-token-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    tokenModal?.classList.remove('visible');
  });
});
