import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token{
    var owner : Principal = Principal.fromText("k57il-pqt5x-bqkrv-7ypgz-ukncl-3txpa-gsm3i-egd3v-3mmxe-euaqa-jae");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "FORTUNE";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);
    
    public query func balanceOf(who: Principal) : async {
        balance: Nat;
        symbol: Text;
    } {
        let balance = switch (balances.get(who)){
            case null {0};
            case (?amount) {amount};
        };

        return {balance=balance;
        symbol=symbol;};
    };

    public shared(msg) func payOut() : async Text{
        Debug.print(debug_show(msg.caller));

        if(balances.get(msg.caller) == null){
            let amount = 10000;
            balances.put(msg.caller, amount);    
            return "success";
        }else{
            return "Already used";
        }
    };

    public shared(msg) func transfer(to: Principal, amount: Nat): async Text{

        let result = await balanceOf(msg.caller);
        let fromBalance = result.balance;



        if(fromBalance > amount){
            let newFromBalance : Nat = fromBalance - amount;
            balances.put(msg.caller, newFromBalance);

            let toBalance = await balanceOf(to);
            let newToBalance = toBalance.balance + amount;

            balances.put(to, newToBalance);
            return "success";

        }else{
            return "Insufficient Funds";

        };
    };

    
};