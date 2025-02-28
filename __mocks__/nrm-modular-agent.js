/*
 * Copyright (c) 2022-present New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 
 */

export default  {
  startAgent: jest.fn(),
  analyticsEventEnabled: jest.fn(),
  networkRequestEnabled: jest.fn(),
  networkErrorRequestEnabled: jest.fn(),
  httpRequestBodyCaptureEnabled: jest.fn(),
  recordBreadcrumb: jest.fn(),
  recordCustomEvent: jest.fn(),
  crashNow: jest.fn(),
  currentSessionId: jest.fn(),
  noticeNetworkFailure: jest.fn(),
  recordMetric: jest.fn(),
  removeAllAttributes: jest.fn(),
  setMaxEventBufferTime: jest.fn(),
  setMaxEventPoolSize: jest.fn(),
  setStringAttribute: jest.fn(),
  setNumberAttribute: jest.fn(),
  setBoolAttribute: jest.fn(),
  incrementAttribute: jest.fn(),
  setJSAppVersion: jest.fn(),
  setUserId: jest.fn(),
  recordStack: jest.fn(),
  startInteraction: jest.fn(),
  endInteraction:jest.fn(),
  setInteractionName:jest.fn(),
  consoleEvents:jest.fn(),
  getReactNativeVersion:jest.fn(),
  onNavigationStateChange:jest.fn(),
  componentDidAppearListener:jest.fn(),
  onStateChange:jest.fn(),

  isAgentStarted: (name, callback) => {
    callback(true);
  },
};
