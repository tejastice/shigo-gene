
import { ethers } from 'ethers';
import { MerkleTree} from 'merkletreejs';
import keccak256 from 'keccak256';

import { allowlistAddresses }  from "./src/allowlist.js";

const leafNodes = allowlistAddresses.map(addr => ethers.utils.solidityKeccak256(['address', 'uint256'], [addr[0] , addr[1]]));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const rootHash = merkleTree.getRoot();
console.log('Whitelist Merkle Tree\n', merkleTree.toString());
console.log("Root Hash: ", "0x" + rootHash.toString('hex'));


const nameMap = allowlistAddresses.map( list => list[0] );
let addressId = nameMap.indexOf(allowlistAddresses[0][0]);
const claimingAddress = ethers.utils.solidityKeccak256(['address', 'uint256'], [allowlistAddresses[addressId][0] , allowlistAddresses[addressId][1]]);

console.log("index : " , addressId);
console.log("address : " , allowlistAddresses[addressId][0]);
console.log("amount : " , allowlistAddresses[addressId][1]);
console.log("claimingAddress : " , claimingAddress);

const hexProof = merkleTree.getHexProof(claimingAddress);
console.log("hexProof : \n",hexProof);

console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
