export default function() {
  this.get('games', function () {
    return {
      data: [{
        type: 'games',
        id: '1',
        relationships: {
          users: {
            data: [
              { type: 'users', id: '1' },
              { type: 'users', id: '2' },
              { type: 'users', id: '3' },
              { type: 'users', id: '4' }
            ]
          }
        }
      }, {
        type: 'games',
        id: '2',
        relationships: {
          users: {
            data: [
              { type: 'users', id: '4' },
              { type: 'users', id: '1' },
              { type: 'users', id: '3' },
              { type: 'users', id: '2' }
            ]
          }
        }
      }],
      included: [{
        type: 'users',
        id: '1',
        attributes: { name: 'tanaka51' }
      }, {
        type: 'users',
        id: '2',
        attributes: { name: 'flada_auxv' }
      }, {
        type: 'users',
        id: '3',
        attributes: { name: 'mtsmfm' }
      }, {
        type: 'users',
        id: '4',
        attributes: { name: 'ihei223' }
      }]
    };
  });
}
