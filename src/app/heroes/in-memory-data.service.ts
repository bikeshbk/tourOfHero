import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Bikesh'},
      {id: 2, name: 'Sujesh'},
      {id: 3, name: 'Yuraj'},
      {id: 4, name: 'Prerana'},
      {id: 5, name: 'Bishwo'},
      {id: 6, name: 'Prabin'},
      {id: 7, name: 'Nischal'},
      {id: 8, name: 'Sushant'},
      {id: 9, name: 'Aashish'},
      {id: 10, name: 'Sumit'},
      {id: 11, name: 'Bishal'},
      {id: 12, name: 'Sonika'},
      {id: 13, name: 'Yogesh'},
      {id: 14, name: 'Sabin'}
    ];
    return {heroes};
  }
}
