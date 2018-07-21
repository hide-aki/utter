import {MODAL_CLOSE, MODAL_OPEN} from './types.js'

export function openModal(modalType, modalProps) {
  return {
    type: MODAL_OPEN,
    payload: {modalType, modalProps}
  }
}

export function closeModal() {
  return {
    type: MODAL_CLOSE
  }
}
