import shutil

#https://eth-converter.com/

contractAddress = "0x5002615D9d87fd8B9195a7ca8e227a4C280B4731"

#chainSelect = "Ethereum"
chainSelect = "Goerli"
#chainSelect = "Polygon"

NFTName = "Shigo Gene"
symbol = "SGG"
maxSupply = "700"
weiCost = "0"
displayCost = "0"
marketplaceLink = "https://opensea.io/collection/tereqn"


###############################################


if chainSelect == "Ethereum" :
    chainNumber = "1"
    chainName = "Ethereum"
    chainSymbol = "ETH"
    scanAddress = "https://etherscan.io/token/" + contractAddress

elif chainSelect == "Goerli" :
    chainNumber = "5"
    chainName = "Ethereum"
    chainSymbol = "ETH"
    scanAddress = "https://goerli.etherscan.io/token/" + contractAddress

elif chainSelect == "Polygon" :
    chainNumber = "137"
    chainName = "Polygon"
    chainSymbol = "MATIC"
    scanAddress = "https://polygonscan.com/token/" + contractAddress




#image copy
shutil.copy2("1x/bg.png"    , "public/config/images/bg.png")
shutil.copy2("1x/left.png"  , "public/config/images/left.png")
shutil.copy2("1x/right.png" , "public/config/images/right.png")
shutil.copy2("1x/logo.png"  , "public/config/images/logo.png")
shutil.copy2("1x/logo192.png" , "public/logo192.png")
shutil.copy2("1x/logo512.png" , "public/logo512.png")
shutil.copy2("1x/favicon.png" , "public/favicon.ico")


#abi copy
shutil.copy2("copy_template/abi.json" , "public/config/abi.json")


#config.json
with open("copy_template/config.json", encoding="utf-8") as f:
    data_lines = f.read()
    
data_lines = data_lines.replace("_CONTRACT_ADDRESS_", contractAddress)
data_lines = data_lines.replace("_SCAN_ADDRESS_", scanAddress)
data_lines = data_lines.replace("_CHAIN_NUMBER_", chainNumber)
data_lines = data_lines.replace("_CHAIN_SYMBOL_", chainSymbol)
data_lines = data_lines.replace("_CHAIN_NAME_", chainName)
data_lines = data_lines.replace("_NFT_NAME_", NFTName)
data_lines = data_lines.replace("_SYMBOL_", symbol)
data_lines = data_lines.replace("_MAX_SUPPLY_", maxSupply)
data_lines = data_lines.replace("_WEI_COST_", weiCost)
data_lines = data_lines.replace("_DISPLAY_COST_", displayCost)
data_lines = data_lines.replace("_MARKETPLACE_LINK_", marketplaceLink)

with open("public/config/config.json", mode="w", encoding="utf-8") as f:
    f.write(data_lines)



#index.html
with open("copy_template/index.html", encoding="utf-8") as f:
    data_lines = f.read()
    
data_lines = data_lines.replace("_NFT_NAME_", NFTName)

with open("public/index.html", mode="w", encoding="utf-8") as f:
    f.write(data_lines)




#manifest.json
with open("copy_template/manifest.json", encoding="utf-8") as f:
    data_lines = f.read()
    
data_lines = data_lines.replace("_NFT_NAME_", NFTName)
data_lines = data_lines.replace("_SYMBOL_", symbol)

with open("public/manifest.json", mode="w", encoding="utf-8") as f:
    f.write(data_lines)


