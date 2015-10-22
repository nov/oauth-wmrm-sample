onmessage = function (event) {
  console.info(event);
  postMessage({
    type: 'authorization_response',
    response: {
      error: 'consent_required',
      // token: 'access-token-without-user-interaction',
      state: params.state
    }
  }, params.redirect_uri);
};