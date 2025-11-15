---

layout: projects.njk
permalink: projects/EarthOvershoot/EarthOvershoot.html
# title: What Is Earth Overshoot Day? 
thumb: projects/BackMatter/thumb/BackMatterPartyFlyerThumbnail.png
---
        <div class="about-text">
          <h1><a class="overshoot" href="EarthOvershoot.html" target="_blank">What Is Earth Overshoot Day?</a></h1>
          <div
          style="margin-top: 2rem; font-size: 0.875rem; font-style: italic"
          class="about-text-list-items"
        >
          <strong>Technologies:</strong> Scrollama.js, Datawrapper, Scimago Graphica,
          Apache Echarts, HTML & CSS
        </div>
          <p class="about-text-list-items" style="margin-top: 1.5rem">
            This is a data-journalism explainer piece I developed while learning JavaScript scrollytelling, using Russell Samora's Scrollama.js library. (with the help of Jonathan Soma's great Scrollama tutorials)

          <p class="about-text-list-items" style="margin-top: 1.5rem">
           This project is a result of the "Future Fridays" bimonthly series hosted by UK data studio Infogr8 in partnership with the Data Visualization Society. 
          </p>


      <a class="overshoot"
      href="EarthOvershoot.html"
      target="_blank"
    >
      <picture class="about-photo-mobile">
        <source
          srcset="img/Overshoot.gif"
          media="(max-width: 600px)"
        />
        <img
          src="img/Overshoot.gif"
          alt="Overshoot essay scrolly progression"
          style="border: 1px solid black; border-radius: 0px; margin-bottom: 1rem;"
        /> </picture
                ></a>
      
                <div class="about-photo" style="margin-top: 1.5rem;">
                    <a class="overshoot"
                      href="EarthOvershoot.html"
                      target="_blank"
                    >
                      <picture>
                        <source
                          srcset="img/Overshoot.gif"
                          media="(min-width: 601px)"
                        />
                        <img
                          src="img/Overshoot.gif"
                          alt="Overshoot essay scrolly progression"
                          style="border: 1px solid black; "
                        /> </picture
                    ></a>
                  </div>

                
                  <p class="about-text-list-items" style="margin-top: 1.5rem">
                    I used a variety of interactive charting tools, from no-code to bespoke JavaScript, and the one I was most excited to try out was the Scimago Graphica app, developed by the SCImago data-research collective. 
                    </p>

                    <p class="about-text-list-items" style="margin-top: 1.5rem">
                        <a class="overshoot" href="EarthOvershoot.html" target="_blank">View the essay here.</a>
                        </p>
          
        </div>

       
      


<script>
    // update Overshoot href based on screen size
    const overshootLinks    = document.querySelectorAll(".overshoot");
  
    function updateLinkHref() {
    const windowWidth = window.innerWidth;
    const newHref = windowWidth < 1000
          ? 'EarthOvershootMobile.html'
          : 'EarthOvershootDesktop.html';

    // Loop over the NodeList and set the attribute
    overshootLinks.forEach(link => link.setAttribute('href', newHref));
  }
  
    updateLinkHref();
    window.addEventListener("resize", updateLinkHref);
  </script>
  