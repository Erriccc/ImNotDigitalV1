import React, {useState, useEffect} from 'react';
import { PlasmicClaimPage } from "../../components/plasmic/im_xbeanies/PlasmicClaimPage";
import { getNftById } from "@/nftModel"
import AppSetup from "@appSetupClient"
import  ProcessingView from  '/components/ProcessingView';
import { ethers } from 'ethers';
import { Link, ImmutableXClient,MintableERC721TokenType} from '@imtbl/imx-sdk';
import { ImmutableOrderStatus } from '@imtbl/imx-sdk';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
 

 function Nfts(props) {
    
    const nft = props.nft
    // const [owner,setOwner] = useState("ImNotArt");
    const [owner,setOwner] = useState(undefined);
    const [isUidVerified,setIsUidVerified] = useState(false);
    // const [ownerInfo,setOwnerInfo] = useState(false);
    const [client, setClient] = useState(Object);
    const [validatingInput, setvalidatingInput] = useState(false);
    const [minting, setMinting] = useState(false);

    const router = useRouter()

    // initialise Immutable X Link SDK
    const link = new Link(AppSetup.LinkUrl);

      // initialise an Immutable X Client to interact with apis more easily
      async function buildIMX() {
        setClient(await ImmutableXClient.build({ publicApiUrl:AppSetup.publicProviderUrl ?? '' }));
    }

      // register and/or setup a user
      async function linkSetup() {
        setvalidatingInput(true)  //update loading state
        let linkRes;
        try{
          linkRes= await link.setup({});
          setOwner(linkRes.address);
          setvalidatingInput(false);  //update loading state
          toast.success('wallet detected!')

      }catch(e){
        setvalidatingInput(false);  //update loading state
        toast.error('wallet connection failed!')
      }
      };




    async function Mint(mintIdReference) {
      // initialise a client with the minter for your NFT smart contract
      const provider = new ethers.providers.JsonRpcProvider(AppSetup.rpcProviderClient);
      const minter = new ethers.Wallet(process.env.NEXT_PUBLIC_MINTER_PK).connect(provider);
      const minterClient = await ImmutableXClient.build({
          publicApiUrl:AppSetup.publicProviderUrl,
          signer: minter,
          starkContractAddress:AppSetup.starkContractAddress,
          registrationContractAddress:AppSetup.registrationContractAddress,
      });
      // mint any number of NFTs to specified wallet address (must be registered on Immutable X first)
      const token_address = "0xf6877fA137BE8Dc0874afe5A199a39D83D1e41D1"; // contract registered by Immutable
      const result = await minterClient.mint({
          mints: [{
                  etherKey: owner&&owner ,  //current wallet in session
                  tokens: [{
                          type: MintableERC721TokenType.MINTABLE_ERC721,
                          data: {
                          id: mintIdReference.toString(),  //this should come from the database instead
                          blueprint: nft.metadataUrl,
                          tokenAddress: token_address.toLowerCase(),
                          }
                      }],
                  nonce: (Math.floor(Math.random() * (1000000000 - 1 + 1)) + 1).toString(10),
                  authSignature: ''
              }]
      });
      console.log(`Token minted: ${result.results[0].token_id}`);
      return 
    }





async function ClaimNow(tagUid) {
  
    setMinting(true)  //update loading state
    const mintIdReference = Date.now();
    const JSONdata = JSON.stringify({tagUid:tagUid,claimed:true,owner:owner,mintId:mintIdReference})
    const endpoint = `${AppSetup.claimApiEndpoint}` // "api/paymentHandler"
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const flexRoute = `${AppSetup.webRoute}flex/${nft.tagUid}`

          try{ 
            console.log('minting web3')
            await Mint(mintIdReference)
            // web3MintPassed = true
          }catch(e){
            // alert(e)
            console.log(e)
            setMinting(false);  //update loading state
            toast.error(`Mint failed! ${e}`)
            return
          }

        try{
          console.log('minting web2')
          await fetch(endpoint, options)
          setMinting(false);  //update loading state
          toast.success('asset minted!')
          router.push(flexRoute)
        }catch(e){
          // alert(e)
          console.log(e)
          setMinting(false);  //update loading state
          toast.error(`Claim failed! ${e}`)
        }
    setMinting(false);  //update loading state

}


useEffect(() => {
  const showClaimButton = async () => {
      if(nft?.claimed) {
        setIsUidVerified(owner)
        const flexRoute = `${AppSetup.webRoute}flex/${nft.tagUid}`
        router.push(flexRoute)
      }else{
        //build imx Client on load
          {nft && buildIMX()};
        console.log('not claimed')
      } 
  }
  showClaimButton()
      return


},[isUidVerified,owner]);


    return (
      <main >
        {validatingInput && (<ProcessingView status={"connecting wallet.."} arrayToDisplay={["thank you for trying imNotDigital","don't forget to flex 🏋️ your Nft after you claim it 🤳🏽😚", "connecting....."]}/>)}
        {minting && (<ProcessingView status={"minting"} arrayToDisplay={["minting.....","don't forget to flex 🏋️ your Nft after you claim it 🤳🏽😚","how can we improve?🐵🙈🤔"]}/>)}
      
        {nft &&
          <PlasmicClaimPage /* The claimpage component that encompasses the entirety of the claim page */
              // claimBeanieHeader={{claimText:`Claim Nft ${nft.tagUid} Detail`}} /* Header component, this will not be dynamic, just used as an example at first. claimText is the slot used for dynamic data based on the particular prop used */
              imNotArtNav={{
                imNotArtNavLogo:{href:AppSetup.webRoute}
              }}
              claimButton={{ /* Claim button component */
                canClaim:owner===undefined, // Boolean only sow the claim button if ownerInfo is already populated
                onClick:() => {ClaimNow(nft.tagUid)}
              }}
              commingSoonOrRegisterWallet={{
                connectedAddress:owner&&owner,
                walletConnected:!(owner===undefined),
                registerWalletButton:{
                  ownerInfo:!(owner===undefined),
                  onClick:() => {linkSetup()}
                }
              }}
              uid={{uIdInput:nft.tagUid}}
            />
          }
       </main>
       
    )
  }
  


export const getServerSideProps = async (context) => {
    const {params} = context;
    const id = params.nftId;

    async function getNft() {
        const {nft} = await getNftById(id)
        if (!nft) {
          throw new Error('Failed to fetch data')
        }
        return nft
      }
    const nft = await getNft()
    return {props:{nft}}
  }

  export default Nfts