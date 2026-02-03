// utils.js
export function logContactMetrics(contacts) {
  console.log("Total contacts:", contacts.length);

  let withEmail = 0;

  contacts.forEach((contact) => {
    console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
    if (contact.email) withEmail++;
  });

  console.log("Contacts with email:", withEmail);
}
