import lowDB from 'lowdb';
// import fileSync from "lowdb/adapters/FileSync";
const db = lowDB('db.json', {
  storage: require('lowdb/lib/file-sync'),
});

db.defaults({ contacts: [] }).write();
