const pool = require("./db");
const queries = require("./queries");

const getBankList = (req,res) =>{
    pool.query(queries.getBankList,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBankBranchesList = (req,res)=>{
    const bankName = req.params.bankName;
    console.log(bankName);
    pool.query(queries.getBankBranchesList,[bankName],(error,results)=>{
        console.log(queries.getBankBranchesList);
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const getBankBranchDetails = (req,res) =>{
    const bankName = req.params.bankName;
    const bankBranch = req.params.bankBranch;
    pool.query(queries.getBankBranchDetails,[bankName,bankBranch],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getBankList,
    getBankBranchesList,
    getBankBranchDetails
}