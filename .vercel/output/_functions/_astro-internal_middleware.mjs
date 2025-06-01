import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Dpg1pN8J.mjs';
import 'kleur/colors';
import { a as AstroUserError } from './chunks/astro/server_B3pF-2QK.mjs';
import 'clsx';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_ChbjbMXK.mjs';
import { u as useTranslations } from './chunks/translations_kKiGUXIf.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  initializeStarlightRoute(context);
  return next();
});
function initializeStarlightRoute(context) {
  if ("starlightRoute" in context.locals) return;
  const state = { routeData: void 0 };
  Object.defineProperty(context.locals, "starlightRoute", {
    get() {
      if (!state.routeData) {
        throw new AstroUserError(
          "`locals.starlightRoute` is not defined",
          "This usually means a component that accesses `locals.starlightRoute` is being rendered outside of a Starlight page, which is not supported.\n\nIf this is a component you authored, you can do one of the following:\n\n1. Avoid using this component in non-Starlight pages.\n2. Wrap the code that reads `locals.starlightRoute` in a  `try/catch` block and handle the cases where `starlightRoute` is not available.\n\nIf this is a Starlight built-in or third-party component, you may need to report a bug or avoid this use of the component."
        );
      }
      return state.routeData;
    },
    set(routeData) {
      state.routeData = routeData;
    }
  });
}

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
