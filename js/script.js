/* Author: Shajed Evan

*/


/*  Google Font Loader */
 
   WebFontConfig = {
    google: { families: [ 'Droid+Sans:400,700:latin' ] } //place your font name within ['...']
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
/* End of Font Loader */






