export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/components/Title.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-title" */ 'src/components/Title.mdx'
    ),
}
