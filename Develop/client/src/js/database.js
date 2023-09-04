import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('PUT to the database');

  // Create a connection to the database and version we want to use
  const contactDb = await openDB('jate', 1);

  // Create new transaction and specify the database & data privileges
  const tx = contactDb.transaction('jate', 'readwrite');

  // Open the desired object
const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass into content
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request
  const result = await request; 
  console.log('🚀 - data saved to the database', result);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('GET from the database');

  // Create a connection to the database and version we want to use
  const contactDb = await openDB('jate', 1);

  // Create a new transation adn specify the database and data privileges
  const tx = contactDb.transaction('jate', 'readonly');

  // open the desired oject
  const store = tx.objectStore('jate'); 

  // Use the .getAll() method to get all data
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request; 
  console.log('result.value',);
  return result?.value;
};

initdb();
