import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducers/rootReducer';
import usersReducer from './reducers/usersReducer';
import goalsReducer from './reducers/goalsReducer';
import wishBoardReducer from './reducers/goalsReducer';

const newUser = [];
const newGoalsList = [{ taskName: 'Travel to 50 countries'}];
const newWishBoard = [];

const initialState = { 
  usersReducer: { users: newUser }, 
  goalsReducer: { goals: newGoalsList },
  wishBoardReducer: { wishBoard: newWishBoard }  
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(
  persistedReducer,
  initialState,
  composedEnhancers
);

export const persistor = persistStore(store);
