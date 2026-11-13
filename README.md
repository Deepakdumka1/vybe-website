# Vybe website

This is the Android download website for [Vybe](https://github.com/Shubham-Loshali/Vybe).
It includes app screenshots, an installation guide, and a link to the latest
official `Vybe.apk` release asset.

## Preview locally

From the repository root, run:

```sh
python3 -m http.server 8765 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8765/ in your browser.

## Hosting

Publish the contents of `dist/` as a static site. There is no build step.
For [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/),
connect this repository, select `main` as the production branch, leave the build
command blank, and set the output directory to `dist`. Add your hostname in the
Pages project's [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
tab and follow the DNS instructions it provides.

## Release updates

Keep the APK asset named `Vybe.apk` in the latest public Android release.
The download button follows that release automatically. The app screenshots
are from Vybe validation builds. The lyrics preview uses sample lyrics.
The Figtree font license is in `dist/assets/OFL.txt`.
