export default {
  paths: ["features/*.feature"],
  require: ["ts-node/register", "tsconfig-paths/register"],
  import: ["features/**/*.ts"],
  loader: ["ts-node/esm"],
};
