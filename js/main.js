const elUrlShortener = document.querySelector('.url-shortener');
const elUrlShortenerForm = document.querySelector('.js-url-shortener-form');
const elUrlShortenerResults = document.querySelector('.url-shortener__results');
const elSitenavOpener = document.querySelector('.sitenav-opener');
const elSitenavAuthWrapper = document.querySelector('.site-header-mobile__sitenav-auth-wrapper');



if (elUrlShortenerForm) {
  elUrlShortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    elUrlShortenerResults.classList.add('url-shortener__results-open');
  });
}

if (elUrlShortener) {
  elUrlShortener.addEventListener('click', function(evt) {
    if (evt.target.matches('.js-copy-short-link-button')) {
      // * Change button text * \\
      evt.target.textContent = 'Copied!';
      // * Change button bg color * \\
      evt.target.classList.add('url-shortener__copy-button--copied');
      // * Copy short link to clipboard * \\
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);
      // * Reset button text and class after 1 second * \\
      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('url-shortener__copy-button--copied');
      }, 1000);
    }
  });
}

if (elSitenavOpener) {
  elSitenavOpener.addEventListener('click', function () {
    elSitenavAuthWrapper.classList.toggle('site-header-mobile__sitenav-auth-wrapper-open');
    elSitenavOpener.classList.toggle('sitenav-opener-open');
    setTimeout(function () {
      elSitenavAuthWrapper.classList.toggle('site-header-mobile__sitenav-auth-wrapper-open-opacity');
    }, 10);
  })
}