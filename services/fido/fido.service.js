const { formatResponse } = require('../../helpers/formatter')
const User = require('../../models/fido')
const keccak256 = require("keccak256");
const { MerkleTree } = require('merkletreejs')
const addressess = require("./white.json")
const whiteList = require("./output.json")
const contract = require("./contract.json")
const fs = require('fs');


async function merkleRoot() {

    const data = addressess
    // Hash the data
    const hashes = data.map(item => keccak256(item))

    const tree = new MerkleTree(hashes, keccak256, { sortPairs: true })
    const buf2hex = x => '0x' + x.toString('hex')

    const proof = hashes.map(add => tree.getProof(add).map(x => buf2hex(x.data)))

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

    const {  walletAddress } = query
    console.log( walletAddress)
    const newJsonData = JSON.stringify(walletAddress, null, 2);
    try {
        fs.writeFileSync('contract.json', newJsonData);
    } catch (error) {
        console.error('Failed to write file:', error);
    }
}
async function contract_read() {
    const data = contract
    if (data.length == 0) {
        return formatResponse(
            200,
            "Fail",
            "No contract yet"
        );
    }
    return formatResponse(
        200,
        "Success",
        "",
        { data }
    );
}

module.exports = {
    merkleRoot,
    wallet_checker,
    contract_deploy,
    contract_read
}
