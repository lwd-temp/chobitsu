import Chobitsu from './Chobitsu'
import noop from 'licia/noop'
import * as Runtime from './domains/Runtime'
import * as Page from './domains/Page'
import * as DOM from './domains/DOM'
import * as CSS from './domains/CSS'
import * as DOMStorage from './domains/DOMStorage'
import * as Network from './domains/Network'
import * as Overlay from './domains/Overlay'
import * as DOMDebugger from './domains/DOMDebugger'
import * as Debugger from './domains/Debugger'
import * as Storage from './domains/Storage'

const chobitsu = new Chobitsu()
chobitsu.register('Network', {
  ...Network,
  setAttachDebugStack: noop,
  clearAcceptedEncodingsOverride: noop, 
})
chobitsu.register('Page', {
  ...Page,
  getManifestIcons: noop,
  bringToFront: noop,
  getInstallabilityErrors: noop,
  setAdBlockingEnabled: noop,
  getAppId: noop,
})
chobitsu.register('Runtime', {
  ...Runtime,
  compileScript: noop,
  discardConsoleEntries: noop,
  getHeapUsage: noop,
  getIsolateId: noop,
  releaseObject: noop,
  releaseObjectGroup: noop,
  runIfWaitingForDebugger: noop,
})
chobitsu.register('DOM', {
  ...DOM,
  getNodeId: DOM.getDOMNodeId,
  markUndoableState: noop,
  undo: noop,
  getBoxModel: noop,
})
chobitsu.register('CSS', {
  ...CSS,
  getPlatformFontsForNode: noop,
  trackComputedStyleUpdates: noop,
  takeComputedStyleUpdates: noop,
})
chobitsu.register('Debugger', {
  ...Debugger,
  setAsyncCallStackDepth: noop,
  setBlackboxPatterns: noop,
  setPauseOnExceptions: noop,
})
chobitsu.register('Overlay', {
  ...Overlay,
  highlightFrame: noop,
  setShowGridOverlays: noop,
  setShowFlexOverlays: noop,
  setShowScrollSnapOverlays: noop,
  setShowContainerQueryOverlays: noop,
  setShowIsolatedElements: noop,
})
chobitsu.register('Profiler', {
  enable: noop,
})
chobitsu.register('Log', {
  clear: noop,
  enable: noop,
  startViolationsReport: noop,
})
chobitsu.register('Emulation', {
  setEmulatedMedia: noop,
  setAutoDarkModeOverride: noop,
  setEmulatedVisionDeficiency: noop,
  setFocusEmulationEnabled: noop,
  setTouchEmulationEnabled: noop,
  setEmitTouchEventsForMouse: noop,
})
chobitsu.register('Audits', {
  enable: noop,
})
chobitsu.register('ServiceWorker', {
  enable: noop,
})
chobitsu.register('Inspector', {
  enable: noop,
})
chobitsu.register('Target', {
  setAutoAttach: noop,
  setDiscoverTargets: noop,
  setRemoteLocations: noop,
})
chobitsu.register('DOMDebugger', {
  ...DOMDebugger,
  setBreakOnCSPViolation: noop,
})
chobitsu.register('Database', {
  enable: noop,
})
chobitsu.register('CacheStorage', {
  requestCacheNames: noop,
})
chobitsu.register('Storage', {
  ...Storage,
  trackCacheStorageForOrigin: noop,
  trackIndexedDBForOrigin: noop,
})
chobitsu.register('DOMStorage', {
  ...DOMStorage
})
chobitsu.register('IndexedDB', {
  enable: noop,
  requestDatabaseNames: noop,
})
chobitsu.register('ApplicationCache', {
  enable: noop,
  getFramesWithManifests: noop,
})
chobitsu.register('BackgroundService', {
  startObserving: noop,
})
chobitsu.register('HeapProfiler', {
  enable: noop,
})
chobitsu.register('Input', {
  emulateTouchFromMouseEvent: noop,
})

export default chobitsu
