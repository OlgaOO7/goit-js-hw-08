function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?y(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=g();if(x(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function O(e){return u=void 0,p&&r?y(e):(r=o=void 0,a)}function T(){var e=g(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=b(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},T.flush=function(){return void 0===u?a:O(g())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};let S={email:"",message:""};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(t.email&&(y.input.value=t.email||"",S.email=t.email),t.message&&(y.textarea.value=t.message||"",S.message=t.message))}(),y.form.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault(),y.input.value&&y.textarea.value?(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),S={}):alert("Заповніть всі поля")}));
//# sourceMappingURL=03-feedback.b7863853.js.map
