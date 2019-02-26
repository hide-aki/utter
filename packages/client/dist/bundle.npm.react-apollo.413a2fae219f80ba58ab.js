(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{QZJQ:function(t,e,r){!function(t,e,n,o,i){"use strict";i=i&&i.hasOwnProperty("default")?i.default:i;var a,s=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},function(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),u=function(){return(u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},p=function(){function t(){this.children=null,this.added=!1}return t.prototype.has=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=this;return t.every(function(t){var e=r.children&&r.children.get(t);return!(!e||!(r=e))})&&r.added},t.prototype.add=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=this;e.forEach(function(e){var r=n.children||(n.children=new Map),o=r.get(e);o?n=o:r.set(e,n=new t)}),n.added=!0},t}(),c=function(){function t(){this.queryPromises=new Map,this.queryGraveyard=new p}return t.prototype.addQueryPromise=function(t,e){var r=t.props,n=r.query,o=r.variables;return this.queryGraveyard.has(n,JSON.stringify(o))?e():(this.queryPromises.set(t,new Promise(function(e){e(t.fetchData())})),null)},t.prototype.hasPromises=function(){return this.queryPromises.size>0},t.prototype.consumeAndAwaitPromises=function(){var t=this,e=[];return this.queryPromises.forEach(function(r,n){var o=n.props,i=o.query,a=o.variables;t.queryGraveyard.add(i,JSON.stringify(a)),e.push(r)}),this.queryPromises.clear(),Promise.all(e)},t}();function l(t){var o=t.tree,i=t.context,a=void 0===i?{}:i,p=t.renderFunction,l=void 0===p?r("LIej").renderToStaticMarkup:p,f=new c,y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.getChildContext=function(){return u({},a,{renderPromises:f})},e.prototype.render=function(){return o},e.childContextTypes={renderPromises:n.object},e}(e.Component);return Object.keys(a).forEach(function(t){y.childContextTypes[t]=n.any}),Promise.resolve().then(function t(){var r=l(e.createElement(y));return f.hasPromises()?f.consumeAndAwaitPromises().then(t):r})}var f=r("m/ml"),y=function(t,e){return f(!!e.client,'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>'),t.children(e.client)};y.contextTypes={client:n.object.isRequired},y.propTypes={children:n.func.isRequired};var h,d=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=r("m/ml"),b=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.operations=new Map,v(e.client,'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.'),e.client.__operations_cache__||(e.client.__operations_cache__=n.operations),n}return d(e,t),e.prototype.getChildContext=function(){return{client:this.props.client,operations:this.props.client.__operations_cache__}},e.prototype.render=function(){return this.props.children},e.propTypes={client:n.object.isRequired,children:n.node.isRequired},e.childContextTypes={client:n.object.isRequired,operations:n.object},e}(e.Component),m=r("m/ml");!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(h||(h={}));var O=new Map;function g(t){var e,r,n=O.get(t);if(n)return n;m(!!t&&!!t.kind,"Argument of "+t+" passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document");var o=t.definitions.filter(function(t){return"FragmentDefinition"===t.kind}),i=t.definitions.filter(function(t){return"OperationDefinition"===t.kind&&"query"===t.operation}),a=t.definitions.filter(function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation}),s=t.definitions.filter(function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation});m(!o.length||i.length||a.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"),m(i.length+a.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+t+" had "+i.length+" queries, "+s.length+" subscriptions and "+a.length+" mutations. You can use 'compose' to join multiple operation types to a component"),r=i.length?h.Query:h.Mutation,i.length||a.length||(r=h.Subscription);var u=i.length?i:a.length?a:s;m(1===u.length,"react-apollo only supports one defintion per HOC. "+t+" had "+u.length+" definitions. You can use 'compose' to join multiple operation types to a component");var p=u[0];e=p.variableDefinitions||[];var c={name:p.name&&"Name"===p.name.kind?p.name.value:"data",type:r,variables:e};return O.set(t,c),c}var w=r("m/ml");function P(t,e){var r=t.client||e.client;return w(!!r,'Could not find "client" in the context or passed in as a prop. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via props.'),r}var j=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),_=function(){return(_=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},S=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]]);return r},q=r("pVl1"),M=r("m/ml"),R=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.previousData={},n.hasMounted=!1,n.startQuerySubscription=function(){if(!n.querySubscription){var t=n.getQueryResult();n.querySubscription=n.queryObservable.subscribe({next:function(e){var r=e.data;t&&7===t.networkStatus&&q(t.data,r)?t=void 0:(t=void 0,n.updateCurrentData())},error:function(t){if(n.resubscribeToQuery(),!t.hasOwnProperty("graphQLErrors"))throw t;n.updateCurrentData()}})}},n.removeQuerySubscription=function(){n.querySubscription&&(n.querySubscription.unsubscribe(),delete n.querySubscription)},n.updateCurrentData=function(){n.hasMounted&&n.forceUpdate()},n.getQueryResult=function(){var t,e={data:Object.create(null)};if(Object.assign(e,{variables:(t=n.queryObservable).variables,refetch:t.refetch.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}),n.props.skip)e=_({},e,{data:void 0,error:void 0,loading:!1});else{var r=n.queryObservable.currentResult(),i=r.loading,a=r.partial,s=r.networkStatus,u=r.errors,p=r.error;if(u&&u.length>0&&(p=new o.ApolloError({graphQLErrors:u})),Object.assign(e,{loading:i,networkStatus:s,error:p}),i)Object.assign(e.data,n.previousData,r.data);else if(p)Object.assign(e,{data:(n.queryObservable.getLastResult()||{}).data});else{var c=n.queryObservable.options.fetchPolicy,l=n.props.partialRefetch;if(l&&0===Object.keys(r.data).length&&a&&"cache-only"!==c)return Object.assign(e,{loading:!0,networkStatus:o.NetworkStatus.loading}),e.refetch(),e;Object.assign(e.data,r.data),n.previousData=r.data}}if(!n.querySubscription){var f=e.refetch;e.refetch=function(t){return n.querySubscription?f(t):new Promise(function(e,r){n.refetcherQueue={resolve:e,reject:r,args:t}})}}return e.client=n.client,e},n.client=P(e,r),n.initializeQueryObservable(e),n}return j(e,t),e.prototype.fetchData=function(){if(this.props.skip)return!1;var t=this.props,e=(t.children,t.ssr),r=(t.displayName,t.skip,t.client,t.onCompleted,t.onError,t.partialRefetch,S(t,["children","ssr","displayName","skip","client","onCompleted","onError","partialRefetch"])),n=r.fetchPolicy;if(!1===e)return!1;"network-only"!==n&&"cache-and-network"!==n||(n="cache-first");var o=this.client.watchQuery(_({},r,{fetchPolicy:n})),i=this.queryObservable.currentResult();return!!i.loading&&o.result()},e.prototype.componentDidMount=function(){if(this.hasMounted=!0,!this.props.skip&&(this.startQuerySubscription(),this.refetcherQueue)){var t=this.refetcherQueue,e=t.args,r=t.resolve,n=t.reject;this.queryObservable.refetch(e).then(r).catch(n)}},e.prototype.componentWillReceiveProps=function(t,e){if(!t.skip||this.props.skip){var r=P(t,e);q(this.props,t)&&this.client===r||(this.client!==r&&(this.client=r,this.removeQuerySubscription(),this.queryObservable=null,this.previousData={},this.updateQuery(t)),this.props.query!==t.query&&this.removeQuerySubscription(),this.updateQuery(t),t.skip||this.startQuerySubscription())}else this.removeQuerySubscription()},e.prototype.componentWillUnmount=function(){this.removeQuerySubscription(),this.hasMounted=!1},e.prototype.componentDidUpdate=function(){var t=this.props,e=t.onCompleted,r=t.onError;if(e||r){var n=this.queryObservable.currentResult(),o=n.loading,i=n.error,a=n.data;!e||o||i?r&&!o&&i&&r(i):e(a)}},e.prototype.render=function(){var t=this,e=this.context,r=function(){return t.props.children(t.getQueryResult())};return e&&e.renderPromises?e.renderPromises.addQueryPromise(this,r):r()},e.prototype.extractOptsFromProps=function(t){var e,r=t.variables,n=t.pollInterval,o=t.fetchPolicy,i=t.errorPolicy,a=t.notifyOnNetworkStatusChange,s=t.query,u=t.displayName,p=void 0===u?"Query":u,c=t.context,l=void 0===c?{}:c;return this.operation=g(s),M(this.operation.type===h.Query,"The <Query /> component requires a graphql query, but got a "+(this.operation.type===h.Mutation?"mutation":"subscription")+"."),e={variables:r,pollInterval:n,query:s,fetchPolicy:o,errorPolicy:i,notifyOnNetworkStatusChange:a,metadata:{reactComponent:{displayName:p}},context:l},Object.keys(e).reduce(function(t,r){return void 0!==e[r]&&(t[r]=e[r]),t},{})},e.prototype.initializeQueryObservable=function(t){var e=this.extractOptsFromProps(t);this.setOperations(e),this.queryObservable=this.client.watchQuery(e)},e.prototype.setOperations=function(t){this.context.operations&&this.context.operations.set(this.operation.name,{query:t.query,variables:t.variables})},e.prototype.updateQuery=function(t){this.queryObservable?this.setOperations(t):this.initializeQueryObservable(t),this.queryObservable.setOptions(this.extractOptsFromProps(t)).catch(function(){return null})},e.prototype.resubscribeToQuery=function(){this.removeQuerySubscription();var t=this.queryObservable.getLastError(),e=this.queryObservable.getLastResult();this.queryObservable.resetLastResults(),this.startQuerySubscription(),Object.assign(this.queryObservable,{lastError:t,lastResult:e})},e.contextTypes={client:n.object,operations:n.object,renderPromises:n.object},e.propTypes={client:n.object,children:n.func.isRequired,fetchPolicy:n.string,notifyOnNetworkStatusChange:n.bool,onCompleted:n.func,onError:n.func,pollInterval:n.number,query:n.object.isRequired,variables:n.object,ssr:n.bool,partialRefetch:n.bool},e}(e.Component),Q=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),C=function(){return(C=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},x=r("m/ml"),k=r("pVl1"),E={loading:!1,called:!1,error:void 0,data:void 0},A=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.hasMounted=!1,n.runMutation=function(t){void 0===t&&(t={}),n.onMutationStart();var e=n.generateNewMutationId();return n.mutate(t).then(function(t){return n.onMutationCompleted(t,e),t}).catch(function(t){if(n.onMutationError(t,e),!n.props.onError)throw t})},n.mutate=function(t){var e=n.props,r=e.mutation,o=e.variables,i=e.optimisticResponse,a=e.update,s=e.context,u=void 0===s?{}:s,p=e.awaitRefetchQueries,c=void 0!==p&&p,l=e.fetchPolicy,f=C({},t),y=f.refetchQueries||n.props.refetchQueries;y&&y.length&&Array.isArray(y)&&(y=y.map(function(t){return"string"==typeof t&&n.context.operations&&n.context.operations.get(t)||t}),delete f.refetchQueries);var h=Object.assign({},o,f.variables);return delete f.variables,n.client.mutate(C({mutation:r,optimisticResponse:i,refetchQueries:y,awaitRefetchQueries:c,update:a,context:u,fetchPolicy:l,variables:h},f))},n.onMutationStart=function(){n.state.loading||n.props.ignoreResults||n.setState({loading:!0,error:void 0,data:void 0,called:!0})},n.onMutationCompleted=function(t,e){var r=n.props,i=r.onCompleted,a=r.ignoreResults,s=t.data,u=t.errors,p=u&&u.length>0?new o.ApolloError({graphQLErrors:u}):void 0,c=function(){return i?i(s):null};n.hasMounted&&n.isMostRecentMutation(e)&&!a?n.setState({loading:!1,data:s,error:p},c):c()},n.onMutationError=function(t,e){var r=n.props.onError,o=function(){return r?r(t):null};n.hasMounted&&n.isMostRecentMutation(e)?n.setState({loading:!1,error:t},o):o()},n.generateNewMutationId=function(){return n.mostRecentMutationId=n.mostRecentMutationId+1,n.mostRecentMutationId},n.isMostRecentMutation=function(t){return n.mostRecentMutationId===t},n.verifyDocumentIsMutation=function(t){var e=g(t);x(e.type===h.Mutation,"The <Mutation /> component requires a graphql mutation, but got a "+(e.type===h.Query?"query":"subscription")+".")},n.client=P(e,r),n.verifyDocumentIsMutation(e.mutation),n.mostRecentMutationId=0,n.state=E,n}return Q(e,t),e.prototype.componentDidMount=function(){this.hasMounted=!0},e.prototype.componentWillUnmount=function(){this.hasMounted=!1},e.prototype.componentWillReceiveProps=function(t,e){var r=P(t,e);k(this.props,t)&&this.client===r||(this.props.mutation!==t.mutation&&this.verifyDocumentIsMutation(t.mutation),this.client!==r&&(this.client=r,this.setState(E)))},e.prototype.render=function(){var t=this.props.children,e=this.state,r=e.loading,n=e.data,o=e.error,i=e.called,a={called:i,loading:r,data:n,error:o,client:this.client};return t(this.runMutation,a)},e.contextTypes={client:n.object,operations:n.object},e.propTypes={mutation:n.object.isRequired,variables:n.object,optimisticResponse:n.object,refetchQueries:n.oneOfType([n.arrayOf(n.oneOfType([n.string,n.object])),n.func]),awaitRefetchQueries:n.bool,update:n.func,children:n.func.isRequired,onCompleted:n.func,onError:n.func,fetchPolicy:n.string},e}(e.Component),T=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),I=r("pVl1"),D=(r("m/ml"),function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.initialize=function(t){n.queryObservable||(n.queryObservable=n.client.subscribe({query:t.subscription,variables:t.variables,fetchPolicy:t.fetchPolicy}))},n.startSubscription=function(){n.querySubscription||(n.querySubscription=n.queryObservable.subscribe({next:n.updateCurrentData,error:n.updateError}))},n.getInitialState=function(){return{loading:!0,error:void 0,data:void 0}},n.updateCurrentData=function(t){var e=n,r=e.client,o=e.props.onSubscriptionData;o&&o({client:r,subscriptionData:t}),n.setState({data:t.data,loading:!1,error:void 0})},n.updateError=function(t){n.setState({error:t,loading:!1})},n.endSubscription=function(){n.querySubscription&&(n.querySubscription.unsubscribe(),delete n.querySubscription)},n.client=P(e,r),n.initialize(e),n.state=n.getInitialState(),n}return T(e,t),e.prototype.componentDidMount=function(){this.startSubscription()},e.prototype.componentWillReceiveProps=function(t,e){var r=P(t,e);if(!I(this.props.variables,t.variables)||this.client!==r||this.props.subscription!==t.subscription){var n=t.shouldResubscribe;"function"==typeof n&&(n=!!n(this.props,t));var o=!1===n;if(this.client!==r&&(this.client=r),!o)return this.endSubscription(),delete this.queryObservable,this.initialize(t),this.startSubscription(),void this.setState(this.getInitialState());this.initialize(t),this.startSubscription()}},e.prototype.componentWillUnmount=function(){this.endSubscription()},e.prototype.render=function(){var t=this.props.children;if(!t)return null;var e=Object.assign({},this.state,{variables:this.props.variables});return t(e)},e.contextTypes={client:n.object},e.propTypes={subscription:n.object.isRequired,variables:n.object,children:n.func,onSubscriptionData:n.func,shouldResubscribe:n.oneOfType([n.func,n.bool])},e}(e.Component)),N=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),W=r("m/ml"),F=function(){return{}},L=function(){return!1};function z(t){return t.displayName||t.name||"Component"}function U(t,e,r,n){for(var o={},i=0,a=t.variables;i<a.length;i++){var s=a[i],u=s.variable,p=s.type;if(u.name&&u.name.value){var c=u.name.value,l=e[c];if(void 0===l)if("NonNullType"===p.kind){if(t.type===h.Mutation)return;W(void 0!==l,"The operation '"+t.name+"' wrapping '"+n+"' is expecting a variable: '"+u.name.value+"' but it was not found in the props passed to '"+r+"'")}else o[c]=null;else o[c]=l}}return o}var $=function(t){function e(e){var r=t.call(this,e)||this;return r.withRef=!1,r.setWrappedInstance=r.setWrappedInstance.bind(r),r}return N(e,t),e.prototype.getWrappedInstance=function(){return W(this.withRef,"To access the wrapped instance, you need to specify { withRef: true } in the options"),this.wrappedInstance},e.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},e}(e.Component),J=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),V=function(){return(V=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},G=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]]);return r};function Y(t,r){void 0===r&&(r={});var n=g(t),o=r.options,a=void 0===o?F:o,s=r.skip,u=void 0===s?L:s,p=r.alias,c=void 0===p?"Apollo":p,l=a;"function"!=typeof l&&(l=function(){return a});var f,y=u;return"function"!=typeof y&&(y=function(){return u}),function(o){var a=c+"("+z(o)+")",s=function(i){function s(){return null!==i&&i.apply(this,arguments)||this}return J(s,i),s.prototype.render=function(){var i=this,s=this.props,u=y(s),p=u?Object.create(null):V({},l(s));return!u&&!p.variables&&n.variables.length>0&&(p.variables=U(n,s,a,z(o))),e.createElement(R,V({},p,{displayName:a,skip:u,query:t,warnUnhandledError:!0}),function(t){t.client;var n,a,p=t.data,c=G(t,["client","data"]);if(r.withRef&&(i.withRef=!0,s=Object.assign({},s,{ref:i.setWrappedInstance})),u)return e.createElement(o,V({},s));var l=Object.assign(c,p||{}),y=r.name||"data",h=((n={})[y]=l,n);if(r.props){var d=((a={})[y]=l,a.ownProps=s,a);f=r.props(d,f),h=f}return e.createElement(o,V({},s,h))})},s.displayName=a,s.WrappedComponent=o,s}($);return i(s,o,{})}}var H=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Z=function(){return(Z=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function B(t,r){void 0===r&&(r={});var n=g(t),o=r.options,a=void 0===o?F:o,s=r.alias,u=void 0===s?"Apollo":s,p=a;return"function"!=typeof p&&(p=function(){return a}),function(o){var a=u+"("+z(o)+")",s=function(i){function s(){return null!==i&&i.apply(this,arguments)||this}return H(s,i),s.prototype.render=function(){var i=this.props,s=p(i);return r.withRef&&(this.withRef=!0,i=Object.assign({},i,{ref:this.setWrappedInstance})),!s.variables&&n.variables.length>0&&(s.variables=U(n,i,a,z(o))),e.createElement(A,Z({},s,{mutation:t,ignoreResults:!0}),function(t,n){var a,s,u=r.name||"mutate",p=((a={})[u]=t,a);if(r.props){var c=((s={})[u]=t,s.ownProps=i,s);p=r.props(c)}return e.createElement(o,Z({},i,p))})},s.displayName=a,s.WrappedComponent=o,s}($);return i(s,o,{})}}var K=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),X=function(){return(X=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},tt=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&(r[n[o]]=t[n[o]]);return r};function et(t,r){void 0===r&&(r={});var n=g(t),o=r.options,a=void 0===o?F:o,s=r.skip,u=void 0===s?L:s,p=r.alias,c=void 0===p?"Apollo":p,l=r.shouldResubscribe,f=a;"function"!=typeof f&&(f=function(){return a});var y,h=u;return"function"!=typeof h&&(h=function(){return u}),function(o){var a=c+"("+z(o)+")",s=function(i){function s(t){var e=i.call(this,t)||this;return e.state={resubscribe:!1},e}return K(s,i),s.prototype.componentWillReceiveProps=function(t){l&&this.setState({resubscribe:l(this.props,t)})},s.prototype.render=function(){var i=this,s=this.props,u=h(s),p=u?Object.create(null):f(s);return!u&&!p.variables&&n.variables.length>0&&(p.variables=U(n,s,a,z(o))),e.createElement(D,X({},p,{displayName:a,skip:u,subscription:t,shouldResubscribe:this.state.resubscribe}),function(t){var n,a,p=t.data,c=tt(t,["data"]);if(r.withRef&&(i.withRef=!0,s=Object.assign({},s,{ref:i.setWrappedInstance})),u)return e.createElement(o,X({},s));var l=Object.assign(c,p||{}),f=r.name||"data",h=((n={})[f]=l,n);if(r.props){var d=((a={})[f]=l,a.ownProps=s,a);y=r.props(d,y),h=y}return e.createElement(o,X({},s,h))})},s.displayName=a,s.WrappedComponent=o,s}($);return i(s,o,{})}}var rt=function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),nt=function(){return(nt=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},ot=r("m/ml"),it=r("zdeH");t.compose=it,t.getDataFromTree=function(t,e){return void 0===e&&(e={}),l({tree:t,context:e,renderFunction:r("LIej").renderToStaticMarkup})},t.ApolloConsumer=y,t.ApolloProvider=b,t.Query=R,t.Mutation=A,t.Subscription=D,t.graphql=function(t,e){switch(void 0===e&&(e={}),g(t).type){case h.Mutation:return B(t,e);case h.Subscription:return et(t,e);case h.Query:default:return Y(t,e)}},t.withQuery=Y,t.withMutation=B,t.withSubscription=et,t.withApollo=function(t,r){void 0===r&&(r={});var n="withApollo("+function(t){return t.displayName||t.name||"Component"}(t)+")",o=function(o){function i(t){var e=o.call(this,t)||this;return e.setWrappedInstance=e.setWrappedInstance.bind(e),e}return rt(i,o),i.prototype.getWrappedInstance=function(){return ot(r.withRef,"To access the wrapped instance, you need to specify { withRef: true } in the options"),this.wrappedInstance},i.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},i.prototype.render=function(){var n=this;return e.createElement(y,null,function(o){var i=Object.assign({},n.props,{client:o,ref:r.withRef?n.setWrappedInstance:void 0});return e.createElement(t,nt({},i))})},i.displayName=n,i.WrappedComponent=t,i}(e.Component);return i(o,t,{})},t.RenderPromises=c,t.getMarkupFromTree=l,t.walkTree=function t(r,n,o,i){if(void 0===i&&(i=new Map),r)if(Array.isArray(r))r.forEach(function(e){return t(e,n,o,i)});else if(function(t){return!!t.type}(r))if("function"==typeof r.type){var a=r.type,s=Object.assign({},a.defaultProps,function(t){return t.props||t.attributes}(r)),u=n,p=void 0;if(function(t){return t.prototype&&(t.prototype.render||t.prototype.isReactComponent)}(a)){var c=new a(s,n);if(Object.defineProperty(c,"props",{value:c.props||s}),c.context=c.context||n,c.state=c.state||null,c.setState=function(t){"function"==typeof t&&(t=t(c.state,c.props,c.context)),c.state=Object.assign({},c.state,t)},a.getDerivedStateFromProps){var l=a.getDerivedStateFromProps(c.props,c.state);null!==l&&(c.state=Object.assign({},c.state,l))}else c.UNSAFE_componentWillMount?c.UNSAFE_componentWillMount():c.componentWillMount&&c.componentWillMount();if(c.getChildContext&&(u=Object.assign({},n,c.getChildContext())),!1===o(r,c,i,n,u))return;p=c.render()}else{if(!1===o(r,null,i,n))return;p=a(s,n)}p&&(Array.isArray(p)?p.forEach(function(e){return t(e,u,o,i)}):t(p,u,o,i))}else if(r.type._context||r.type.Consumer){if(!1===o(r,null,i,n))return;var p=void 0;if(r.type._context)(i=new Map(i)).set(r.type,r.props.value),p=r.props.children;else{var f=r.type._currentValue;i.has(r.type.Provider)&&(f=i.get(r.type.Provider)),p=r.props.children(f)}p&&(Array.isArray(p)?p.forEach(function(e){return t(e,n,o,i)}):t(p,n,o,i))}else{if(!1===o(r,null,i,n))return;r.props&&r.props.children&&e.Children.forEach(r.props.children,function(e){e&&t(e,n,o,i)})}else"string"!=typeof r&&"number"!=typeof r||o(r,null,i,n)},Object.defineProperty(t,"__esModule",{value:!0})}(e,r("r0ML"),r("cNRa"),r("3I0+"),r("c1/l"))},"c1/l":function(t,e,r){"use strict";var n=r("dt/a"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(t){return n.isMemo(t)?a:s[t.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var p=Object.defineProperty,c=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(h){var o=y(r);o&&o!==h&&t(e,o,n)}var a=c(r);l&&(a=a.concat(l(r)));for(var s=u(e),d=u(r),v=0;v<a.length;++v){var b=a[v];if(!(i[b]||n&&n[b]||d&&d[b]||s&&s[b])){var m=f(r,b);try{p(e,b,m)}catch(t){}}}return e}return e}},pVl1:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty;function o(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}t.exports=function(t,e){if(o(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(var a=0;a<r.length;a++)if(!n.call(e,r[a])||!o(t[r[a]],e[r[a]]))return!1;return!0}}}]);
//# sourceMappingURL=bundle.npm.react-apollo.413a2fae219f80ba58ab.js.map