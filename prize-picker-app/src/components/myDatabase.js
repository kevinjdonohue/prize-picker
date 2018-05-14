import Dexie from 'dexie';

const db = new Dexie('myDatabase');

db.version(1).stores({
  contacts: `id, firstName, lastName, emailAddress`
});

export default db;
