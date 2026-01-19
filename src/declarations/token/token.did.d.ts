import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<
      { 'balance' : bigint, 'symbol' : string }
    >,
  'payOut' : () => Promise<string>,
}
