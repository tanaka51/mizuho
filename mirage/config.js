const game1 = {
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
};

const game2 = {
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
};

const includedUsers = [{
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
}];

export default function() {
  this.get('games', function () {
    return {
      data: [game1, game2],
      included: includedUsers
    };
  });

  this.get('games/1', function () {
    return {
      data: game1,
      included: includedUsers
    }
  })

  this.get('games/2', function () {
    return {
      data: game2,
      included: includedUsers
    }
  })
}
