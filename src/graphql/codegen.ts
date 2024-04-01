import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: process.env.GQL_SCHEMA_PATH,
  documents: ["./src/graphql/documents/query.graphql"],
  generates: {
    './src/graphql/generated/index.ts': {
      overwrite: true,
      plugins: ["typescript", "typescript-resolvers", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
      }
    }
  }
}
 
export default config