import * as ActionTypes from './ActionTypes';
import { baseUrlForDevice, baseUrlForGroup } from '../shared/baseUrl';


export const fetchDevices = () => (dispatch) => {

    dispatch(devicesLoading());

    return fetch(baseUrlForDevice,{
        method: "GET",
        headers: {
          'Authorization': 'Bearer kfGaoX2xDXJLPK0OVAvYi45G5qS0I2'
        }})
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(devices => dispatch(addDevices(devices)))
    .catch(error => dispatch(devicesFailed(error.message)));
}

export const devicesLoading = () => ({
    type: ActionTypes.DEVICES_LOADING
});

export const devicesFailed = (errmess) => ({
    type: ActionTypes.DEVICES_FAILED,
    payload: errmess
});

export const addDevices = (devices) => ({
    type: ActionTypes.ADD_DEVICES,
    payload: devices
});


export const fetchGroups = () => (dispatch) => {

    dispatch(groupsLoading());

    return fetch(baseUrlForGroup,{
        method: "GET",
        headers: {
          'Authorization': 'Bearer kfGaoX2xDXJLPK0OVAvYi45G5qS0I2'
        }})
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(groups => dispatch(addGroups(groups)))
    .catch(error => dispatch(groupsFailed(error.message)));
}

export const groupsLoading = () => ({
    type: ActionTypes.GROUPS_LOADING
});

export const groupsFailed = (errmess) => ({
    type: ActionTypes.GROUPS_FAILED,
    payload: errmess
});

export const addGroups = (groups) => ({
    type: ActionTypes.ADD_GROUPS,
    payload: groups
});
