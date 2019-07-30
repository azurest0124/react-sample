// action type

export const COMPLETE_TODO = "COMPLETE_TODO";

// action methods/creators
export function complete({ complete, id }) {
  return { type: COMPLETE_TODO, complete, id };
}
