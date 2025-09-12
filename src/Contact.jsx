import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary fw-bold mb-4">📞 Contact Us</h1>
      <p className="text-center text-muted fs-5">
        Have questions or need help? We’re just a message away!
      </p>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h4 className="fw-bold text-success">Get in Touch</h4>
            <p className="mb-2">📞 Phone: +91 7680943067 </p>
            <p className="mb-2">✉️ Email: maheshthummanani@gmail.com</p>
            <p className="mb-2">
              🏢 Address: Ameerpet, Main Road,near Sathyam Mall Hyderabad, Telangana, India
            </p>
            <p className="mb-2">⏰ Working Hours: Mon – Sat, 9:00 AM – 8:00 PM</p>

            <h5 className="fw-bold mt-3 text-info">Follow Us</h5>
            <p>
              🌐 Facebook: facebook.com/maheshmart <br />
              📸 Instagram: instagram.com/maheshmart <br />
              🐦 Twitter: twitter.com/maheshmart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
