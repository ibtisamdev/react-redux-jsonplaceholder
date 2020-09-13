import PhotosActionTypes from "./photos.types";
import {
  updateItemDetails,
  deleteItem,
  addNewItem,
} from "../redux-reducer-utils";

const initialState = {
  isFetching: false,
  photos: [],
  errorMessage: "",
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case PhotosActionTypes.FETCH_PHOTOS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photos: action.payload,
      };
    case PhotosActionTypes.FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PhotosActionTypes.EDIT_PHOTO_START:
      return {
        ...state,
        isFetching: true,
      };
    case PhotosActionTypes.EDIT_PHOTO_SUCCESS:
      return {
        ...state,
        photos: updateItemDetails(state.photos, action.payload),
        isFetching: false,
      };
    case PhotosActionTypes.EDIT_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PhotosActionTypes.ADD_PHOTO_START:
      return {
        ...state,
        isFetching: true,
      };
    case PhotosActionTypes.ADD_PHOTO_SUCCESS:
      return {
        ...state,
        photos: addNewItem(state.photos, action.payload),
        isFetching: false,
      };
    case PhotosActionTypes.ADD_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case PhotosActionTypes.DELETE_PHOTO_START:
      return {
        ...state,
        isFetching: true,
      };
    case PhotosActionTypes.DELETE_PHOTO_SUCCESS:
      return {
        ...state,
        photos: deleteItem(state.photos, action.payload),
        isFetching: false,
      };
    case PhotosActionTypes.DELETE_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;
