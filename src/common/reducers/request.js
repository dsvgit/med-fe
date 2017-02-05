export function init() {
  return {
    received: false,
    pending: false,
    failed: false
  };
}

export function request(state) {
  return {
    ...state,
    received: state.received,
    pending: true,
    failed: false
  };
}

export function succeed(state) {
  return {
    ...state,
    received: true,
    pending: false,
    failed: false
  };
}

export function failed(state) {
  return {
    ...state,
    received: state.received,
    pending: false,
    failed: true
  };
}
