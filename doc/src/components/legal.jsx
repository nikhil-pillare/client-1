import React, { useState } from 'react';
import "../components/css/home.css"
function Legal() {
  const [popovers, setPopovers] = useState({
    privacy: false,
    legal: false,
    accessibility: false,
    about: false,
  });

  const togglePopover = (popover) => {
    setPopovers((prevPopovers) => ({
      privacy: popover === 'privacy' ? !prevPopovers.privacy : false,
      legal: popover === 'legal' ? !prevPopovers.legal : false,
      accessibility: popover === 'accessibility' ? !prevPopovers.accessibility : false,
      about: popover === 'about' ? !prevPopovers.about : false,
    }));
  };

  return (
    <div id='legal' style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginTop:"50px", marginBottom:"0px"}}>
      <div style={{ position: 'relative', marginRight: '10px', width: '25%' }}>
        <button
          onClick={() => togglePopover('privacy')}
          style={{
            backgroundColor: '#131313',
            color: 'grey',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            opacity: '0.3',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          Privacy
        </button>
        {popovers.privacy && (
          <div
            style={{
              position: 'absolute',
              top: '-350px',
              left: '0',
              zIndex: '1',
              width: '90%',
              backgroundColor: '#fff',
              opacity: "0.95",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              padding: '10px',
              transition: 'top 0.3s ease',
              display: 'block',
            }}
          >
            <button
              onClick={() => togglePopover('privacy')}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              &#x2715; {/* Close symbol (X) */}
            </button>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Privacy Statment</div>
            <div style={{ color: '#333' }}>

              <p style={{ textAlign: "left" }}>
                <strong>Data Collection:</strong> We only collect information voluntarily provided by you, such as your name and email address when you contact us.
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Use of Information:</strong> Any personal information you provide will only be used for the purpose for which it was shared. We do not sell or share your information with third parties.
              </p>
              <p style={{ textAlign: "left" }}>
                <strong>Links to External Sites:</strong> Our website may contain links to external websites. Please note that we are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any external sites you visit.
              </p>


            </div>
          </div>
        )}
      </div>


      <div style={{ position: 'relative', marginRight: '10px', width: '25%' }}>
        <button
          onClick={() => togglePopover('legal')}
          style={{
            backgroundColor: '#131313',
            color: 'grey',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            opacity: '0.3',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          Legal
        </button>
        {popovers.legal && (
          <div
            style={{
              position: 'absolute',
              top: '-285px',
              left: '0',
              zIndex: '1',
              width: '90%',
              backgroundColor: '#fff',
              opacity: "0.95",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              padding: '10px',
              transition: 'top 0.3s ease',
              display: 'block',
            }}
          >
            <button
              onClick={() => togglePopover('legal')}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              &#x2715; {/* Close symbol (X) */}
            </button>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Legal</div>
            <div style={{ color: '#333' }}>

              <p style={{ textAlign: "left", fontSize: "16px" }}>
                <strong>Intellectual Property Notice:</strong> All content, including text, images, design, and layout, on this website is protected by intellectual property laws, including copyright and trademark laws, as per the laws of India. This content is the exclusive property of Nikhil Pillare and is provided for informational and personal use only. Unauthorized reproduction, distribution, or use of this content may constitute a violation of Indian intellectual property laws and may result in legal action.
              </p>







            </div>
          </div>
        )}
      </div>





      <div style={{ position: 'relative', marginRight: '10px', width: '25%' }}>
        <button
          onClick={() => togglePopover('about')}
          style={{
            backgroundColor: '#131313',
            color: 'grey',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            opacity: '0.3',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          About
        </button>
        {popovers.about && (
          <div
            style={{
              position: 'absolute',
              top: '-300px',
              left: '0',
              zIndex: '1',
              width: '90%',
              backgroundColor: '#fff',
              opacity: "0.95",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              padding: '10px',
              transition: 'top 0.3s ease',
              display: 'block',
            }}
          >
            <button
              onClick={() => togglePopover('about')}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#555',
              }}
            >
              &#x2715; {/* Close symbol (X) */}
            </button>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>About</div>
            <div style={{ color: '#333' }}>
              <section>
                <p >
                   My portfolio is a reflection of my journey in creativity. It all began with a fascination for the captivating structure of buckminsterfullerene allotropes.
                </p>
                <p>
                  As time has passed, I've added my own creative touch to this evolving portfolio. It has become a canvas where I blend nature's geometry with my imagination. Within these virtual pages, you'll find a collection of projects that showcase my passion for innovation and the harmonious fusion of art and technology.
                </p>
              </section>



            </div>
          </div>
        )}
      </div>


      <div style={{ position: 'relative', marginRight: '10px', width: '25%' }}>
        <button
          onClick={() => togglePopover('accessibility')}
          style={{
            backgroundColor: '#131313',
            color: 'grey',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            opacity: '0.3',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          Accessibilty
        </button>
        {popovers.accessibility && (
          <div
            style={{
              position: 'absolute',
              top: '-270px',

              zIndex: '1',
              width: '90%',
              backgroundColor: 'white',
              opacity: "0.95",
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              padding: '10px',
              transition: 'top 0.3s ease',
              display: 'block',


            }}
          >
            <button
              onClick={() => togglePopover('accessibility')}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',

              }}
            >
              &#x2715;
            </button>
            <div style={{ fontWeight: 'bold', marginBottom: '10px', color: '#131313', }}>accessibility</div>
            <div style={{ color: '#131313' }}>
              <p style={{ textAlign: "left", fontSize: "16px" }}>
                <strong>Accessibility:</strong> I am committed to ensuring that my portfolio website is accessible to all users, regardless of disabilities. I strive to adhere to web accessibility standards and guidelines to make my content and design as inclusive as possible. If you encounter any accessibility issues or have suggestions for improvement, please feel free to <a href="mailto:nikhilpillare98@email.com">contact me</a>. Your feedback is valuable as I work towards enhancing the accessibility of my website for all visitors.
              </p>


            </div>
          </div>
        )}
      </div>




    </div>
  );
}

export default Legal;
