module.exports = {
  plugins: [
    [ '@babel/plugin-transform-runtime', ],
    [
      '@babel/plugin-transform-typescript',
      {
        parserOpts: {
          strictMode: true,
          sourceMap: true,
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3.10',
        forceAllTransforms: false,
        modules: 'umd',
        targets:'maintained node versions'
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allExtensions: false,
        allowNamespaces: true,
        allowDeclareFields: false,
        onlyRemoveTypeImports: false,
        isTSX: false,
        jsxPragma: 'React',
        jsxPragmaFrag: 'React.Fragment',
      },
    ],
  ],
};
