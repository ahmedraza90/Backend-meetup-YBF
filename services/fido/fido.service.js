const { formatResponse } = require('../../helpers/formatter')
const User = require('../../models/fido')
const linkz = require('../../models/linkFido')
const merkle = require('../../models/merkle')
const keccak256 = require("keccak256");
const { MerkleTree } = require('merkletreejs')
const lower = require('./lower.json')
const addressess = require("./white.json")
const whiteList = require("../../output.json")
const checker = require('./whiteChecker.json') 
const path = require('path');
const fs = require('fs');
const mongoose = require("mongoose");


async function merkleRoot() {

    const data = lower
    // Hash the data
    const hashes = data.map(item => keccak256(item))
    
    const tree = new MerkleTree(hashes, keccak256, { sortPairs: true })
    const buf2hex = x => '0x' + x.toString('hex')
    
    const proof = hashes.map(add => tree.getProof(add).map(x => buf2hex(x.data)))
    console.log(buf2hex(tree.getRoot()))

    await merkle.findByIdAndUpdate('65c5b9039fc28233632f87d3', { merkleRoot: buf2hex(tree.getRoot()) })

    let final = [];
    for (let i = 0; i < data.length; i++) {
        let obj = {}
        obj["walletAddress"] = data[i]
        obj["proof"] = proof[i]

        final.push(obj)

    }
    const newJsonData = JSON.stringify(final, null, 2);
    fs.writeFileSync('output.json', newJsonData);
    return formatResponse(
        200,
        "Success",
        buf2hex(tree.getRoot())
    );
}

async function wallet_checker(query) {

    const address = whiteList;
    const { walletAddress } = query
    let data = address.find(item => item.walletAddress === walletAddress);
    if (data) {
        return formatResponse(
            200,
            "Success",
            "",
            { data }
        );
    } else {
        return formatResponse(
            200,
            "Fail",
        );
    }

}

async function checker_page(query) {
    const address = checker;
    const { walletAddress } = query
    let data = address.find(item => item === walletAddress.toUpperCase());
    console.log(data)
    if (data) {
        return formatResponse(
            200,
            "Success",
            "",
            { data }
        );
    } else {
        return formatResponse(
            200,
            "Fail",
        );
    }
}
async function contract_deploy(query) {
    const { walletAddress } = query
    try {
        
        await User.findByIdAndUpdate('65c9ce20b11697c45f1c92e1', { contractAddress: walletAddress })
        
        return formatResponse(
            200,
            "Success"
        );

    } catch (error) {
        console.log("error in saving address: ", error)
        return formatResponse(
            200,
            "Fail"
        );
    }
}

async function contract_read() {

    const data = await User.findById('65c9ce20b11697c45f1c92e1')
    const {contractAddress} = data
    return formatResponse(
        200,
        "Success",
        "",
        { data : [contractAddress] }
    );
}

async function set_link(query) {
    const { link } = query
    try{
        await linkz.create(query)
        return formatResponse(
            200,
            "Success",
        );
    } catch(e){
        console.log("---------------",e)
    }
}
async function opensea() {

     if (!await linkz.exists()) {
        console.log("----")
         // Collection does not exist or is empty, return success with empty data
         return formatResponse(
             200,
             "Success",
             "",
             { data: "" }
         );
     }
 
    const data = await linkz.find({}).exec();
    const {link} = data[0]
    if (data.length == 0) {
        return formatResponse(
            200,
            "Success",
            "",
            { data:"" }
        );
    }

    return formatResponse(
        200,
        "Success",
        "",
        { data: [link]  }
    );
}

module.exports = {
    merkleRoot,
    wallet_checker,
    contract_deploy,
    contract_read,
    checker_page,
    set_link,
    opensea
}
