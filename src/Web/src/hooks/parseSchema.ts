
type BasicField = {
  label: string;
  key: string;
}

export interface Schema {
  ViewModel: BasicField[];
}

export function parseSchema(schema: Schema) {
  return schema
}
