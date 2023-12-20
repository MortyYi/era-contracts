// import { expect } from "chai";
// import type { Contract } from "zksync-ethers";
// import { callFallback, deployContractYul } from "./shared/utils";

// describe("EcAdd tests", function () {
//   let ecAdd: Contract;

//   before(async () => {
//     ecAdd = await deployContractYul("EcAdd", "precompiles");
//   });

//   describe("Ethereum tests", function () {
//     it("0 bytes: (0, 0) + (0, 0)", async () => {
//       const returnData = await callFallback(ecAdd, "");
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     it("128 bytes: (6, 9) + (19274124, 124124)", async () => {
//       const call = callFallback(
//         ecAdd,
//         "0x00000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000126198c000000000000000000000000000000000000000000000000000000000001e4dc"
//       );
//       await expect(call).to.be.reverted;
//     });

//     it("128 bytes: (1, 2) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//     });

//     it("128 bytes: (0, 0) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     it("128 bytes: (0, 3) + (1, 2)", async () => {
//       const call = callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//       await expect(call).to.be.reverted;
//     });

//     it("128 bytes: (0, 0) + (1, 3)", async () => {
//       const call = callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003"
//       );
//       await expect(call).to.be.reverted;
//     });

//     it("128 bytes: (0, 0) + (1, 2)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//     });

//     it("64 bytes: (0, 0) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     it("128 bytes: (1, 2) + (1, 2)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//       await expect(returnData).to.be.equal(
//         "0x030644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd315ed738c0e0a7c92e7845f96b2ae9c0a68a6a449e3538fc7ff3ebf7a5a18a2c4"
//       );
//     });

//     it("80 bytes: (1, 3) + (0, 0)", async () => {
//       const call = callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(call).to.be.reverted;
//     });

//     it("192 bytes: (1, 2) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//     });

//     it("192 bytes: (0, 0) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     it("80 bytes: (0, 0) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     // (10744596414106452074759370245733544594153395043370666422502510773307029471145, 848677436511517736191562425154572367705380862894644942948681172815252343932)
//     // +
//     // (10744596414106452074759370245733544594153395043370666422502510773307029471145, 21039565435327757486054843320102702720990930294403178719740356721829973864651)
//     it("192 bytes: (1074..1145, 8486..3932) + (1074..1145, 2103..4651)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x17c139df0efee0f766bc0204762b774362e4ded88953a39ce849a8a7fa163fa901e0559bacb160664764a357af8a9fe70baa9258e0b959273ffc5718c6d4cc7c17c139df0efee0f766bc0204762b774362e4ded88953a39ce849a8a7fa163fa92e83f8d734803fc370eba25ed1f6b8768bd6d83887b87165fc2434fe11a830cb00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//     });

//     it("192 bytes: (0, 0) + (1, 2)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//     });

//     it("192 bytes: (1, 2) + (1, 2)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
//       );
//       await expect(returnData).to.be.equal(
//         "0x030644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd315ed738c0e0a7c92e7845f96b2ae9c0a68a6a449e3538fc7ff3ebf7a5a18a2c4"
//       );
//     });

//     it("64 bytes: (1, 2) + (0, 0)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//       await expect(returnData).to.be.equal(
//         "0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002"
//       );
//     });

//     // (10744596414106452074759370245733544594153395043370666422502510773307029471145, 848677436511517736191562425154572367705380862894644942948681172815252343932)
//     // +
//     // (1624070059937464756887933993293429854168590106605707304006200119738501412969, 3269329550605213075043232856820720631601935657990457502777101397807070461336)
//     it("128 bytes: (1074..1145, 8486..3932) + (1624..2969, 3269..1336)", async () => {
//       const returnData = await callFallback(
//         ecAdd,
//         "0x17c139df0efee0f766bc0204762b774362e4ded88953a39ce849a8a7fa163fa901e0559bacb160664764a357af8a9fe70baa9258e0b959273ffc5718c6d4cc7c039730ea8dff1254c0fee9c0ea777d29a9c710b7e616683f194f18c43b43b869073a5ffcc6fc7a28c30723d6e58ce577356982d65b833a5a5c15bf9024b43d98"
//       );
//       await expect(returnData).to.be.equal(
//         "0x15bf2bb17880144b5d1cd2b1f46eff9d617bffd1ca57c37fb5a49bd84e53cf66049c797f9ce0d17083deb32b5e36f2ea2a212ee036598dd7624c168993d1355f"
//       );
//     });
//   });
// });
