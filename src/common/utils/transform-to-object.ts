import { TransformFnParams } from 'class-transformer';

export const transformToObject = (params: TransformFnParams) => {
  if (params.value === undefined) return;

  const [fieldName, value] = params.value.split('.');
  const fieldValue = ['asc', 'desc'].includes(value) ? value : 'asc';
  const entries = new Map([[fieldName, fieldValue]]);
  return Object.fromEntries(entries);
};
