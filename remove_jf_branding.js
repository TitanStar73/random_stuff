setInterval(function() {
  const shadowHosts = document.querySelectorAll('*');
  console.log(shadowHosts); 
  shadowHosts.forEach(function(host) {
      if (host.shadowRoot) {
          const brandingDivs = host.shadowRoot.querySelectorAll('.branding21');
          console.log(brandingDivs); 
          brandingDivs.forEach(function(div) {
              div.remove();
          });
      }
  });
}, 100);

