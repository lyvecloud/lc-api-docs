
$(document).ready(function () {

  setWelcomeText();
  addExternalLinksJQuery()
  $(document).ajaxComplete(function () {
    setWelcomeText();
  });
  
  $('.breadcrumb > li:first-child > a').attr('href', '../index.html');
    
  $('.portal-footer').prepend('	<div class="paligo-footer-inner"> <div class="footer-menu-container"> <div class="row text-sm-left text-md-left">  <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Product</h5> <ul class="list-unstyled quick-links"> <li><a href="en/release-notes.html">Release Notes</a></li> <li><a href="en/product-features.html">Product Features</a></li> </ul> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Solution</h5> <ul class="list-unstyled quick-links"> <li><a href="en/partner-solutions.html">Partner Solutions</a></li> <li><a href="en/partner-deployment-solutions.html">Partner Deployment Solutions</a></li> </ul> </div> </div> <div class="col-xs-12 col-sm-4 col-md-4"> <div class="footer-menu"> <h5>Support</h5> <ul class="list-unstyled quick-links"> <li><a href="mailto:support.lyvecloud@seagate.com" >support.lyvecloud@seagate.com</a></li> </ul> </div> </div>  </div> </div> </div>');

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

function addExternalLinksJQuery() {
  const $computeApiGuide = $('a[href="lyve-cloud-compute-api-guide.html"]')
  const $dropdown = $("<span />", {
    class: "glyphicon",
    click: function(event) {
      event.preventDefault()
      const $apiGuideParent = $computeApiGuide.parent()
      const classes = $apiGuideParent.attr('class')
      if (classes?.includes('opened')) {
        $apiGuideParent.removeClass('opened')
      } else {
        $apiGuideParent.addClass('opened')
      }
    }
  })
  $computeApiGuide.append($dropdown)
  $computeApiGuide.parent().append('<ul><li><a href="https://guides.zadara.com/cs-compute-guide/latest/aws-ec2-api.html" class="topic-link section link-external" target="_blank">Compute API Guide</a></li><li><a href="https://guides.zadara.com/cs-networking-guide/latest/aws-vpc.html" class="topic-link section link-external" target="_blank">Networking API Guide</a></li><li><a href="https://guides.zadara.com/cs-iam-guide/latest/aws-policies.html" class="topic-link section link-external" target="_blank">Identity API Guide</a></li></ul>')

  $('a[href="using-s3-select.html"]').parent().prepend('<li><a href="https://apihelp.lyvecloud.seagate.com/" class="topic-link section link-external" target="_blank" data-permalink="api-guides.html" data-topic-level="1" data-relative-prefix data-publication-date>Account API</a></li>')

  // kept just as a reference, we'll probably remove below later
  // var apiGuide = document.querySelector("[href='api-guides.html']")
  // if (apiGuide.parentNode.className.includes("opened")) {
  //   const apiGuideList = apiGuide.parentNode.lastChild
  //   const s3ApiGuide = apiGuideList.firstChild
  //   insertAfter(linkAccountAPI, s3ApiGuide)  
  // } else {
  //   const usingS3 = document.querySelector("[href='using-s3-select.html']")
  //   usingS3.parentNode.parentNode.insertBefore(linkAccountAPI, usingS3.parentNode)
  // }  
}

function setWelcomeText(){
  for (var key in welcomeTextDict) {
      var element = $("header.portal-header[data-portal-language=" + key +"] h1");
      element.text(welcomeTextDict[key])
  }
}
var welcomeTextDict = { "en" : "Lyve Cloud Documentation"};

