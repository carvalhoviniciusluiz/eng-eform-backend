import { TransformFnParams } from 'class-transformer';

export const transformToNumber = (params: TransformFnParams) => {
  if (params.value === undefined) return;
  return Number(params.value);
};
