function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export class CancelError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CancelError';
  }
  get isCancelled() {
    return true;
  }
}
var _isResolved = /*#__PURE__*/new WeakMap();
var _isRejected = /*#__PURE__*/new WeakMap();
var _isCancelled = /*#__PURE__*/new WeakMap();
var _cancelHandlers = /*#__PURE__*/new WeakMap();
var _promise = /*#__PURE__*/new WeakMap();
var _resolve = /*#__PURE__*/new WeakMap();
var _reject = /*#__PURE__*/new WeakMap();
export class CancelablePromise {
  constructor(executor) {
    _classPrivateFieldInitSpec(this, _isResolved, void 0);
    _classPrivateFieldInitSpec(this, _isRejected, void 0);
    _classPrivateFieldInitSpec(this, _isCancelled, void 0);
    _classPrivateFieldInitSpec(this, _cancelHandlers, void 0);
    _classPrivateFieldInitSpec(this, _promise, void 0);
    _classPrivateFieldInitSpec(this, _resolve, void 0);
    _classPrivateFieldInitSpec(this, _reject, void 0);
    _classPrivateFieldSet(_isResolved, this, false);
    _classPrivateFieldSet(_isRejected, this, false);
    _classPrivateFieldSet(_isCancelled, this, false);
    _classPrivateFieldSet(_cancelHandlers, this, []);
    _classPrivateFieldSet(_promise, this, new Promise((resolve, reject) => {
      _classPrivateFieldSet(_resolve, this, resolve);
      _classPrivateFieldSet(_reject, this, reject);
      const onResolve = value => {
        if (_classPrivateFieldGet(_isResolved, this) || _classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isCancelled, this)) {
          return;
        }
        _classPrivateFieldSet(_isResolved, this, true);
        if (_classPrivateFieldGet(_resolve, this)) _classPrivateFieldGet(_resolve, this).call(this, value);
      };
      const onReject = reason => {
        if (_classPrivateFieldGet(_isResolved, this) || _classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isCancelled, this)) {
          return;
        }
        _classPrivateFieldSet(_isRejected, this, true);
        if (_classPrivateFieldGet(_reject, this)) _classPrivateFieldGet(_reject, this).call(this, reason);
      };
      const onCancel = cancelHandler => {
        if (_classPrivateFieldGet(_isResolved, this) || _classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isCancelled, this)) {
          return;
        }
        _classPrivateFieldGet(_cancelHandlers, this).push(cancelHandler);
      };
      Object.defineProperty(onCancel, 'isResolved', {
        get: () => _classPrivateFieldGet(_isResolved, this)
      });
      Object.defineProperty(onCancel, 'isRejected', {
        get: () => _classPrivateFieldGet(_isRejected, this)
      });
      Object.defineProperty(onCancel, 'isCancelled', {
        get: () => _classPrivateFieldGet(_isCancelled, this)
      });
      return executor(onResolve, onReject, onCancel);
    }));
  }
  get [Symbol.toStringTag]() {
    return "Cancellable Promise";
  }
  then(onFulfilled, onRejected) {
    return _classPrivateFieldGet(_promise, this).then(onFulfilled, onRejected);
  }
  catch(onRejected) {
    return _classPrivateFieldGet(_promise, this).catch(onRejected);
  }
  finally(onFinally) {
    return _classPrivateFieldGet(_promise, this).finally(onFinally);
  }
  cancel() {
    if (_classPrivateFieldGet(_isResolved, this) || _classPrivateFieldGet(_isRejected, this) || _classPrivateFieldGet(_isCancelled, this)) {
      return;
    }
    _classPrivateFieldSet(_isCancelled, this, true);
    if (_classPrivateFieldGet(_cancelHandlers, this).length) {
      try {
        for (const cancelHandler of _classPrivateFieldGet(_cancelHandlers, this)) {
          cancelHandler();
        }
      } catch (error) {
        console.warn('Cancellation threw an error', error);
        return;
      }
    }
    _classPrivateFieldGet(_cancelHandlers, this).length = 0;
    if (_classPrivateFieldGet(_reject, this)) _classPrivateFieldGet(_reject, this).call(this, new CancelError('Request aborted'));
  }
  get isCancelled() {
    return _classPrivateFieldGet(_isCancelled, this);
  }
}