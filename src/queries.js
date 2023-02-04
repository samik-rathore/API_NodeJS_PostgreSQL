const getBankList = "SELECT name FROM banks";
const getBankBranchesList = "SELECT * FROM banks INNER JOIN branches on branches.bank_id=banks.id WHERE banks.name=$1";
const getBankBranchDetails = "SELECT * FROM banks INNER JOIN branches on branches.bank_id=banks.id WHERE banks.name=$1 AND branches.branch=$2";

module.exports = {
    getBankList,
    getBankBranchesList,
    getBankBranchDetails
}