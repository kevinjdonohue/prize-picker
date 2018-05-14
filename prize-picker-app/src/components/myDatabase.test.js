import myDatabase from './myDatabase';
import { Dexie } from 'dexie';

describe('myDatabase', () => {
  it('saves and retrieves data successfully', () => {
    // arrange
    Dexie.spawn(function*() {
      yield db.tasks.bulkPut([
        { id: 1, firstName: 'Kevin', lastName: 'Donohue', emailAddress: 'kevinjdonohue@yahoo.com' },
        { id: 2, firstName: 'Kimberley', lastName: 'Donohue', emailAddress: 'utkimmr@yahoo.com' }
      ]);

      let myContacts = yield db.tasks
        .where('lastName')
        .equalsIgnoreCase('donohue')
        .toArray();

      console.log('myContacts', myContacts);
    });
  });
});
