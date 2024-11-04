export default {
  paths: ["features/*.feature"],
  requireModule: ["ts-node/register", "tsconfig-paths/register"],
  import: ["features/**/*.ts"],
  loader: ["ts-node/esm"],
};
