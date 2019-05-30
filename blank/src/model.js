import { getText } from './service';

export default {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    text: 'loading...',
  },

  effects: {
    *fetch(_, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          text: yield call(getText),
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
