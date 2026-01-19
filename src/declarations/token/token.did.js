export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balanceOf' : IDL.Func(
        [IDL.Principal],
        [IDL.Record({ 'balance' : IDL.Nat, 'symbol' : IDL.Text })],
        ['query'],
      ),
    'payOut' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
