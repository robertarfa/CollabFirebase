/* eslint no-shadow: ["error", { "allow": ["client"] }]*/
import { createActions, handleActions } from 'redux-actions'

const defaultState = {
  error: null,
  data: {
    language: 'en-us',
  },
  isLoading: true,
  isLoadingMore: false,
}

export const {
  fetchLanguageReset,
  onChangeLanguage

} = createActions({
  FETCH_LANGUAGE_RESET: () => ({}),
  ON_CHANGE_LANGUAGE: obj => ({ obj })
})

export const languageAction = handleActions(
  {

    [fetchLanguageReset]: (state) => {
      return { ...defaultState }
    },

    [onChangeLanguage]: (state, { payload: { obj } }) => {
      console.log("state", state)
      console.log("obj", obj)
      return ({ ...state, data: { ...state.data, [obj.field]: obj.value } })
    },
  },

  defaultState
)
