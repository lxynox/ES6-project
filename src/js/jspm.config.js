System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "src/js/*": "js/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "src/js/app.bundle.js": [
      "src/js/app.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "src/js/example.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "src/js/dependencies.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:lodash@4.8.2.js",
      "npm:react@0.14.8.js",
      "npm:react-router@2.0.1.js",
      "npm:react-dom@0.14.8.js",
      "npm:core-js@1.2.6/library/fn/object/create.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/fn/object/set-prototype-of.js",
      "npm:react@0.14.8/react.js",
      "npm:react-router@2.0.1/lib/index.js",
      "npm:lodash@4.8.2/lodash.js",
      "npm:react-dom@0.14.8/index.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:react@0.14.8/lib/React.js",
      "npm:core-js@1.2.6/library/modules/es6.object.set-prototype-of.js",
      "npm:react-router@2.0.1/lib/PropTypes.js",
      "npm:react-router@2.0.1/lib/IndexLink.js",
      "npm:react-router@2.0.1/lib/IndexRedirect.js",
      "npm:react-router@2.0.1/lib/IndexRoute.js",
      "npm:react-router@2.0.1/lib/Redirect.js",
      "npm:react-router@2.0.1/lib/History.js",
      "npm:react-router@2.0.1/lib/Lifecycle.js",
      "npm:react-router@2.0.1/lib/RouteContext.js",
      "npm:react-router@2.0.1/lib/RouteUtils.js",
      "npm:react-router@2.0.1/lib/RoutingContext.js",
      "npm:react-router@2.0.1/lib/match.js",
      "npm:react-router@2.0.1/lib/Link.js",
      "npm:react-router@2.0.1/lib/useRoutes.js",
      "npm:react-router@2.0.1/lib/useRouterHistory.js",
      "npm:react-router@2.0.1/lib/Router.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:react-router@2.0.1/lib/RouterContext.js",
      "npm:react-router@2.0.1/lib/PatternUtils.js",
      "npm:react-router@2.0.1/lib/Route.js",
      "npm:react-router@2.0.1/lib/browserHistory.js",
      "npm:react-router@2.0.1/lib/hashHistory.js",
      "npm:react-router@2.0.1/lib/createMemoryHistory.js",
      "npm:react@0.14.8/lib/ReactDOM.js",
      "npm:react@0.14.8/lib/Object.assign.js",
      "npm:core-js@1.2.6/library/modules/$.object-sap.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:react@0.14.8/lib/ReactDOMServer.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:react@0.14.8/lib/ReactIsomorphic.js",
      "npm:react@0.14.8/lib/deprecated.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:invariant@2.2.1.js",
      "npm:history@2.0.1/lib/useBasename.js",
      "npm:react-router@2.0.1/lib/routerWarning.js",
      "npm:react-router@2.0.1/lib/RouterUtils.js",
      "npm:react-router@2.0.1/lib/createTransitionManager.js",
      "npm:react@0.14.8/lib/ReactCurrentOwner.js",
      "npm:react-router@2.0.1/lib/getRouteParams.js",
      "npm:react-router@2.0.1/lib/createRouterHistory.js",
      "npm:history@2.0.1/lib/useQueries.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:react-router@2.0.1/lib/deprecateObjectProperties.js",
      "npm:history@2.0.1/lib/createHashHistory.js",
      "npm:react@0.14.8/lib/ReactDOMTextComponent.js",
      "npm:history@2.0.1/lib/createBrowserHistory.js",
      "npm:history@2.0.1/lib/createMemoryHistory.js",
      "npm:react@0.14.8/lib/ReactVersion.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.8/lib/ReactReconciler.js",
      "npm:react@0.14.8/lib/renderSubtreeIntoContainer.js",
      "npm:react@0.14.8/lib/ReactPerf.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:react@0.14.8/lib/ReactDefaultInjection.js",
      "npm:react@0.14.8/lib/findDOMNode.js",
      "npm:react@0.14.8/lib/ReactUpdates.js",
      "npm:react@0.14.8/lib/ReactInstanceHandles.js",
      "npm:react@0.14.8/lib/ReactMount.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:react@0.14.8/lib/ReactElement.js",
      "npm:react@0.14.8/lib/ReactServerRendering.js",
      "npm:react@0.14.8/lib/ReactComponent.js",
      "npm:react@0.14.8/lib/ReactDOMFactories.js",
      "npm:react@0.14.8/lib/onlyChild.js",
      "npm:react@0.14.8/lib/ReactChildren.js",
      "npm:react@0.14.8/lib/ReactElementValidator.js",
      "npm:react@0.14.8/lib/ReactClass.js",
      "npm:react@0.14.8/lib/ReactPropTypes.js",
      "npm:history@2.0.1/lib/ExecutionEnvironment.js",
      "npm:history@2.0.1/lib/Actions.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:warning@2.1.0.js",
      "npm:react-router@2.0.1/lib/computeChangedRoutes.js",
      "npm:react-router@2.0.1/lib/isActive.js",
      "npm:react-router@2.0.1/lib/getComponents.js",
      "npm:invariant@2.2.1/browser.js",
      "npm:history@2.0.1/lib/PathUtils.js",
      "npm:history@2.0.1/lib/runTransitionHook.js",
      "npm:history@2.0.1/lib/deprecate.js",
      "npm:react-router@2.0.1/lib/TransitionUtils.js",
      "npm:react-router@2.0.1/lib/matchRoutes.js",
      "npm:history@2.0.1/lib/DOMUtils.js",
      "npm:react@0.14.8/lib/escapeTextContentForBrowser.js",
      "npm:buffer@3.6.0.js",
      "npm:query-string@3.0.3.js",
      "npm:process@0.11.2.js",
      "npm:history@2.0.1/lib/createDOMHistory.js",
      "npm:history@2.0.1/lib/DOMStateStorage.js",
      "npm:react@0.14.8/lib/ReactComponentBrowserEnvironment.js",
      "npm:history@2.0.1/lib/createHistory.js",
      "npm:react@0.14.8/lib/DOMChildrenOperations.js",
      "npm:react@0.14.8/lib/setTextContent.js",
      "npm:react@0.14.8/lib/DOMPropertyOperations.js",
      "npm:react@0.14.8/lib/validateDOMNesting.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.8/lib/ClientReactRootIndex.js",
      "npm:react@0.14.8/lib/ServerReactRootIndex.js",
      "npm:react@0.14.8/lib/ReactInstanceMap.js",
      "npm:react@0.14.8/lib/ReactRootIndex.js",
      "npm:react@0.14.8/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.8/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.8/lib/ReactInjection.js",
      "npm:react@0.14.8/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.8/lib/ReactMarkupChecksum.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:react@0.14.8/lib/ReactRef.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.8/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.8/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.8/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.8/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.8/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.8/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.8/lib/ChangeEventPlugin.js",
      "npm:react@0.14.8/lib/SelectEventPlugin.js",
      "npm:react@0.14.8/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.8/lib/ReactEventListener.js",
      "npm:react@0.14.8/lib/CallbackQueue.js",
      "npm:react@0.14.8/lib/PooledClass.js",
      "npm:react@0.14.8/lib/Transaction.js",
      "npm:react@0.14.8/lib/ReactDefaultPerf.js",
      "npm:react@0.14.8/lib/SimpleEventPlugin.js",
      "npm:react@0.14.8/lib/ReactDOMComponent.js",
      "npm:react@0.14.8/lib/DOMProperty.js",
      "npm:react@0.14.8/lib/instantiateReactComponent.js",
      "npm:react@0.14.8/lib/ReactUpdateQueue.js",
      "npm:react@0.14.8/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.8/lib/setInnerHTML.js",
      "npm:react@0.14.8/lib/ReactServerBatchingStrategy.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:react@0.14.8/lib/getIteratorFn.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:react@0.14.8/lib/canDefineProperty.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocationNames.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.8/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.8/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.8/lib/ReactPropTypeLocations.js",
      "npm:react-router@2.0.1/lib/AsyncUtils.js",
      "npm:warning@2.1.0/browser.js",
      "npm:react@0.14.8/lib/traverseAllChildren.js",
      "npm:process@0.11.2/browser.js",
      "npm:history@2.0.1/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:react@0.14.8/lib/quoteAttributeValueForBrowser.js",
      "npm:query-string@3.0.3/index.js",
      "npm:buffer@3.6.0/index.js",
      "npm:history@2.0.1/lib/createLocation.js",
      "npm:react@0.14.8/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.8/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.8/lib/Danger.js",
      "npm:react@0.14.8/lib/adler32.js",
      "npm:react@0.14.8/lib/ViewportMetrics.js",
      "npm:react@0.14.8/lib/getEventTarget.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:react@0.14.8/lib/ReactEmptyComponent.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:react@0.14.8/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.8/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.8/lib/FallbackCompositionState.js",
      "npm:react@0.14.8/lib/SyntheticInputEvent.js",
      "npm:react@0.14.8/lib/SyntheticCompositionEvent.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:react@0.14.8/lib/ReactDefaultPerfAnalysis.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.8/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.8/lib/ReactInputSelection.js",
      "npm:react@0.14.8/lib/ReactOwner.js",
      "npm:react@0.14.8/lib/EventConstants.js",
      "npm:react@0.14.8/lib/EventPropagators.js",
      "npm:react@0.14.8/lib/ReactNativeComponent.js",
      "npm:react@0.14.8/lib/EventPluginHub.js",
      "npm:react@0.14.8/lib/SyntheticEvent.js",
      "npm:react@0.14.8/lib/isEventSupported.js",
      "npm:react@0.14.8/lib/EventPluginRegistry.js",
      "npm:react@0.14.8/lib/isTextInputElement.js",
      "npm:react@0.14.8/lib/getEventCharCode.js",
      "npm:react@0.14.8/lib/ReactDOMButton.js",
      "npm:react@0.14.8/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.8/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.8/lib/SyntheticDragEvent.js",
      "npm:react@0.14.8/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.8/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.8/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.8/lib/SyntheticUIEvent.js",
      "npm:react@0.14.8/lib/ReactMultiChild.js",
      "npm:react@0.14.8/lib/AutoFocusUtils.js",
      "npm:react@0.14.8/lib/ReactDOMInput.js",
      "npm:react@0.14.8/lib/ReactDOMOption.js",
      "npm:react@0.14.8/lib/ReactDOMTextarea.js",
      "npm:react@0.14.8/lib/CSSPropertyOperations.js",
      "npm:react@0.14.8/lib/ReactDOMSelect.js",
      "npm:react@0.14.8/lib/ReactCompositeComponent.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:base64-js@0.0.8.js",
      "npm:ieee754@1.1.6.js",
      "npm:isarray@1.0.0.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:react@0.14.8/lib/getEventModifierState.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.8/lib/forEachAccumulated.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:react@0.14.8/lib/ReactErrorUtils.js",
      "npm:react@0.14.8/lib/getTextContentAccessor.js",
      "npm:react@0.14.8/lib/ReactDOMSelection.js",
      "npm:react@0.14.8/lib/accumulateInto.js",
      "npm:react@0.14.8/lib/getEventKey.js",
      "npm:react@0.14.8/lib/EventPluginUtils.js",
      "npm:react@0.14.8/lib/ReactChildReconciler.js",
      "npm:react@0.14.8/lib/flattenChildren.js",
      "npm:react@0.14.8/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:react@0.14.8/lib/dangerousStyleValue.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:react@0.14.8/lib/LinkedValueUtils.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:react@0.14.8/lib/getNodeForCharacterOffset.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:fbjs@0.6.1/lib/toArray.js"
    ]
  },

  map: {
    "alt": "npm:alt@0.18.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.6",
    "lodash": "npm:lodash@4.8.2",
    "react": "npm:react@0.14.8",
    "react-dom": "npm:react-dom@0.14.8",
    "react-router": "npm:react-router@2.0.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:alt@0.18.4": {
      "flux": "npm:flux@2.1.1",
      "is-promise": "npm:is-promise@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "transmitter": "npm:transmitter@2.0.0"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.13"
    },
    "npm:fbemitter@2.0.2": {
      "fbjs": "npm:fbjs@0.7.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.1.0-alpha.7": {
      "core-js": "npm:core-js@1.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.7.2": {
      "core-js": "npm:core-js@1.2.6",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.1.1",
      "ua-parser-js": "npm:ua-parser-js@0.7.10"
    },
    "npm:flux@2.1.1": {
      "fbemitter": "npm:fbemitter@2.0.2",
      "fbjs": "npm:fbjs@0.1.0-alpha.7",
      "immutable": "npm:immutable@3.7.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:history@2.0.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.4.1",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:lodash@4.8.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:node-fetch@1.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.1.1": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react-router@2.0.1": {
      "history": "npm:history@2.0.1",
      "invariant": "npm:invariant@2.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ua-parser-js@0.7.10": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
