import { TransformFnParams } from 'class-transformer';

export const transformToBoolean = (params: TransformFnParams) => {
  if (params.value === undefined) return;
  return /true/i.test(params.value);
};
