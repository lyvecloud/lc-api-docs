
$(document).ready(function () {

  
  setWelcomeText();
  $(document).ajaxComplete(function () {
    setWelcomeText();
  });
  
  $('.breadcrumb > li:first-child > a').attr('href', '../index.html');
    
  $('.portal-footer').prepend('	<div class="paligo-footer-inner"> <div class="footer-menu-container"> <div class="row text-sm-left text-md-left">  <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Product</h5> <ul class="list-unstyled quick-links"> <li><a href="en/release-notes.html">Release Notes</a></li> <li><a href="en/product-features.html">Product Features</a></li> </ul> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Solution</h5> <ul class="list-unstyled quick-links"> <li><a href="en/partner-solution.html">Partner Solution</a></li> <li><a href="en/partner-deployment-solutions.html">Partner Deployment Solutions</a></li> </ul> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Support</h5> <ul class="list-unstyled quick-links"> <li><a href="mailto:support.lyvecloud@seagate.com" >support.lyvecloud@seagate.com</a></li> </ul> </div> </div>  </div> </div> </div>');

  // Panel position
  //var position = 0;
  // Icon/image url
  //var cloneIcon = "https://www.seagate.com/ww/redesign/assets/seagate-logo-text.svg";
  // Link url
  var cloneLink = "https://github.com/Seagate/Lyve-Cloud-Solutions-Samples";
  // Title text
  var cloneTitle = "Lyve Cloud Integration Solutions Samples";


  //var $original = $('.portal-single-publication').eq(position);
  var $original = $('.portal-single-publication').last();
  var $clone = $original.clone();

  //$clone.children('a').first().attr('href', cloneLink);
  $clone.children('a').first().prop({href: cloneLink,target: "_blank"});  

  $clone.find('h3').text(cloneTitle);
  $original.after($clone);

});

function setWelcomeText(){
  for (var key in welcomeTextDict) {
      var element = $("header.portal-header[data-portal-language=" + key +"] h1");
      element.text(welcomeTextDict[key])
  }
}
var welcomeTextDict = { "en" : "Lyve Cloud Documentation"};

