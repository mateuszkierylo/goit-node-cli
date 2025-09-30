const { listContacts, getContactById, removeContact } = require("../contacts");

describe("contacts functions", () => {
  test("listContacts should return an array", async () => {
    const contacts = await listContacts();
    expect(Array.isArray(contacts)).toBe(true);
  });

  test("getContactById should return null if not found", async () => {
    const contact = await getContactById("nonexistent-id");
    expect(contact).toBeNull();
  });

  test("removeContact should return null if not found", async () => {
    const removed = await removeContact("nonexistent-id");
    expect(removed).toBeNull();
  });
});
