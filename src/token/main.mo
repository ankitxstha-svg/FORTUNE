import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor Token{
    var owner : Principal = Principal.fromText("k57il-pqt5x-bqkrv-7ypgz-ukncl-3txpa-gsm3i-egd3v-3mmxe-euaqa-jae");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "FORTUNE";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);
    
    public query func balanceOf(who: Principal) : async Nat {
        let balance = switch (balances.get(who)){
            case null {0};
            case (?amount) {amount};
        };

        return balance;
    };

    
};