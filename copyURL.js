var slug = document.createElement('input'), text = window.location.href;
document.body.appendChild(slug);
slug.value = text;
slug.select();
document.execCommand('copy');
document.body.removeChild(slug);