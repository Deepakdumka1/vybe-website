const screens = {
  home: {
    title: 'Find something to play',
    description: 'Browse suggested playlists and recommended tracks, or jump back to your liked songs.',
    caption: 'Home screen',
    alt: 'Vybe Home screen showing suggested playlists and recommended tracks',
  },
  search: {
    title: 'Go straight to the track',
    description: 'Search for a song or artist and browse matching tracks from one screen.',
    caption: 'Search screen',
    alt: 'Vybe Search screen showing matching songs and their durations',
  },
  lyrics: {
    title: 'Sing along in time',
    description: 'Follow synced lyrics while a song plays, adjust their timing, or import a local lyrics file.',
    caption: 'Lyrics screen',
    alt: 'Vybe lyrics screen highlighting the current line above playback controls',
  },
  library: {
    title: 'Keep the songs you love',
    description: 'Save favorites to Liked songs, organize your playlists, and download music for offline listening.',
    caption: 'Liked songs screen',
    alt: 'Vybe Liked songs screen with a heart cover and its empty-library message',
  },
};

const buttons = document.querySelectorAll('.preview-option');
const previewImage = document.querySelector('#screen-image');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const key = button.dataset.screen;
    const screen = screens[key];
    if (!screen || button.getAttribute('aria-pressed') === 'true') return;

    for (const option of buttons) {
      const selected = option === button;
      option.setAttribute('aria-pressed', String(selected));
      option.classList.toggle('is-selected', selected);
    }

    previewImage.alt = screen.alt;
    previewImage.src = `assets/${key}.webp`;
    document.querySelector('#screen-title').textContent = screen.title;
    document.querySelector('#screen-description').textContent = screen.description;
    document.querySelector('#screen-caption').textContent = screen.caption;
  });
}
