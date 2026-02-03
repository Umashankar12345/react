import React from "react";

function Contact() {
  const contacts = [
    { id: 1, name: "Rahul Kumar", email: "rahul@example.com" },
    { id: 2, name: "Priya Sharma", email: "priya@example.com" },
    { id: 3, name: "Amit Verma", email: "amit@example.com" }
  ];

  function logContacts() {
    console.log("Logging contact list:");
    contacts.forEach((c) => {
      console.log(`ID: ${c.id}, Name: ${c.name}, Email: ${c.email}`);
    });
  }

  logContacts();

  return (
    <>
      <h1 style={{ color: "blue", textAlign: "center" }}>Contact List</h1>

      <style>
        {`
        .contact-box {
          width: 60%;
          margin: 20px auto;
          padding: 20px;
          background: #f4f4f4;
          border-radius: 8px;
        }
        .card {
          background: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 6px;
          box-shadow: 0 0 4px #ccc;
        }
      `}
      </style>

      <div className="contact-box">
        {contacts.map((c) => (
          <div key={c.id} className="card">
            <p><strong>ID:</strong> {c.id}</p>
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Email:</strong> {c.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
