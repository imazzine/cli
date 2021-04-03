module.exports = {
  async: false,
  typescript: {
    enabled: true,
    memoryLimit: 2048,
    configFile: 'tsconfig.json',
    typescriptPath: require.resolve('typescript'),
    // configOverwrite: {
    //   extends: {},
    //   include: {},
    //   exclude: {},
    //   files: {},
    //   references: [],
    //   compilerOptions: {},
    // },
    context: './src',
    mode: 'write-references',
    diagnosticOptions: {
      syntactic: false,
      semantic: true,
      declaration: false,
      global: false
    },
    extensions: {},
    profile: false,
  },
  eslint: undefined,
};
