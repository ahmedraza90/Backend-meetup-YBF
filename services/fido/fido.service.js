const { formatResponse } = require('../../helpers/formatter')
const User = require('../../models/fido')
const keccak256 = require("keccak256");
const { MerkleTree } = require('merkletreejs')
const addressess = require("./white.json")


async function merkleRoot() {

    const data = addressess        
    // Hash the data
    const hashes = data.map(item => keccak256(item))

    // Create the Merkle tree
    const tree = new MerkleTree(hashes, keccak256, { sortPairs: true })
    const buf2hex = x => '0x' + x.toString('hex')

    const proof = hashes.map(add => tree.getProof(add).map(x => buf2hex(x.data)))

    let final=[];
    for (let i = 0; i < data.length; i++) {
        let obj = {}
        obj["walletAddress"] = data[i]
        obj["proof"] = proof[i]

        final.push(obj)
        
    }

    // const proof = tree.getProof(leaf).map(x => buf2hex(x.data))
    await User.insertMany(final);
    return formatResponse(
        200,
        "Success",
        buf2hex(tree.getRoot())
    );
}

async function wallet_checker(query) {
    console.log("[[[[[[[[[[",query)
    const walletAddress = query
    const data = await User.findOne(walletAddress).select('-_id -__v -createdAt -updatedAt').exec();
    if (!data) {
        return formatResponse(
            200,
            "Fail",
            "wallet does not exist in whitelist"
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
    wallet_checker
}
