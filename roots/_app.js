import "../assets/styles/style.less";
import React from "react";
import RootsContext, {parsePathname} from "next-roots/context";
import schema from 'roots.schema';

const App = props => {

    const {Component, pageProps, router} = props;

    const {locale, root, rule} = parsePathname(router.pathname, schema)

    return (
        <RootsContext.Provider
            value={{
                currentRule: rule,
                currentRoot: root,
                currentLocale: locale || schema.defaultLocale,
                defaultLocale: schema.defaultLocale,
                locales: schema.locales,
                rules: schema.rules,
                meta: schema.meta,
            }}
        >
            <Component {...pageProps} />
        </RootsContext.Provider>

    )

};

export default App;
