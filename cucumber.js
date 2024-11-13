export default {
  paths: ["tests/features/*.feature"],
  require: ["ts-node/register", "tsconfig-paths/register"],
  import: ["tests/features/**/*.ts"],
  loader: ["ts-node/esm"],
};
