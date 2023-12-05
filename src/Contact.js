import React from "react";

const contactFormStyles = {
  contactForm: {
    padding: "40px 0",
    margin: "0 10px",
  },
  formContainer: {
    maxWidth: "40%",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  h2: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

const Contact = () => {
  return (
    <section style={contactFormStyles.contactForm}>
      <div style={contactFormStyles.formContainer}>
        <h2 style={contactFormStyles.h2}>Your Details</h2>
        <form action="#" method="POST">
          <label
            htmlFor="name"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "1rem",
              resize: "vertical",
            }}
          />
          <label
            htmlFor="email"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "1rem",
              resize: "vertical",
            }}
          />
          <label
            htmlFor="phone"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "1rem",
              resize: "vertical",
            }}
          />
          <label
            htmlFor="message"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "1rem",
              resize: "vertical",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#0dac30",
              border: "none",
              color: "white",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
