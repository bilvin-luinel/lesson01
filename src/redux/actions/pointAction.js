import { UPDATE_POINT } from './types';

export function updatePoint(newPoint) {
    return {
        type: UPDATE_POINT,
        payload: newPoint
    }
}