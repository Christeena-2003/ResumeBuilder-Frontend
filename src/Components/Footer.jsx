import React from 'react'


function Footer() {
  return (
    <>
      <footer className="w-full bg-primary text-light py-6">
      <div className="container pt-4" style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}} >
        
        {/* Company */}
        <div>
          <h4 className="fw-bold ">Company</h4>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Privacy Policy</p>
        </div>

        {/* Features */}
        <div>
          <h4 className="fw-bold ">Features</h4>
          <p>Resume Templates</p>
          <p>Export as PDF</p>
          <p>Save and Edit Anytime</p>
        </div>

        {/* Support */}
        <div>
          <h4 className="fw-bold ">Support</h4>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Terms of Services</p>
        </div>

        {/* Social Medias */}
        <div>
          <h4>Social Media's</h4>
          <p ><a style={{color:'white'}} href="">Facebook</a></p>
          <p ><a style={{color:'white'}} href="">Instagram</a></p>
          <p><a style={{color:'white'}} href="">Twitter</a></p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" fw-bolder mt-4 pt-2 text-center">
        © 2025 Resume Builder. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
