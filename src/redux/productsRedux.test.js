import productsReducer from './productsRedux';
import { ADD_TO_FAV } from './productsRedux';

const initialState = [
  {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
  },
  {
    id: 'aenean-ru-bristique-2',
    name: 'Aenean Ru Bristique 2',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
  },
];

describe('Redux Products', () => {
  it('should change state properly', () => {
    const stateAfterChange = productsReducer(initialState, {
      payload: 'aenean-ru-bristique-1',
      type: ADD_TO_FAV,
    });

    expect(stateAfterChange[0].isFavorite).toBe(true);
    expect(stateAfterChange[1].isFavorite).toBe(false);
  });
});
