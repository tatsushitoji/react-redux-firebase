import { configureStore } from './store';

test('should set the root reducer', () => {
  const rootReducer = jest.fn();
  configureStore(rootReducer());
  expect(rootReducer).toHaveBeenCalled();
});
